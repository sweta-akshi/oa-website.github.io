package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

//PrettyPrint takes in a struct and pretty prints it
func PrettyPrint(data interface{}) (err error) {
	b, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return data, fmt.Errorf("Marshal error: %v", err)
	}

	fmt.Println(string(b))
	return
}

//Store holds the details a specific store
type Store struct {
	ID            int    `json:"id"`
	StoreNumber   int    `json:"store_number"`
	StreetAddress string `json:"street_address"`
	City          string `json:"city"`
	State         string `json:"state"`
	NumEmployees  int    `json:"number_of_employees"`
	MonthlySales  string `json:"monthly_sales"`
}

//AddStore reads from an API and returns the body
func AddStore(newStore Store) (result Store, err error) {

	bytesRepresentation, err := json.Marshal(newStore)
	if err != nil {
		return result, fmt.Errorf("Struct conversion error: %v", err)
	}

	url := "http://localhost:3000/stores"

	//POST API call
	postResponse, err := http.Post(url, "application/json", bytes.NewBuffer(bytesRepresentation))
	defer postResponse.Body.Close()

	if err != nil {
		return result, fmt.Errorf("POST error: %v", err)
	}

	json.NewDecoder(postResponse.Body).Decode(&result)

	b, err := json.MarshalIndent(result, "", "  ")
	if err != nil {
		return result, fmt.Errorf("Marshal error: %v", err)
	}

	fmt.Println(string(b))
	return
}

//GetAllStoreInfo shows the details of each store
func GetAllStoreInfo() (allStores []Store, err error) {
	//GET API call
	response, err := http.Get("http://localhost:3000/stores")
	defer response.Body.Close()

	if err != nil {
		return allStores, fmt.Errorf("http request failed: %s", err)
	}

	//Decodes API response
	if err := json.NewDecoder(response.Body).Decode(&allStores); err != nil {
		return allStores, fmt.Errorf("Decode error: %v", err)
	}

	PrettyPrint(allStores)

	return
}

//GetStoreInfo shows the details of each store
func GetStoreInfo(storeNum int) (store []Store, err error) {
	//GET API call
	url := fmt.Sprintf("http://localhost:3000/stores?store_number=%v", storeNum)
	response, err := http.Get(url)
	defer response.Body.Close()

	fmt.Printf("Retrieving store: %v\n", storeNum)

	if err != nil {
		return store, fmt.Errorf("http request failed: %s", err)
	}

	//Decodes API response
	if err := json.NewDecoder(response.Body).Decode(&store); err != nil {
		return store, fmt.Errorf("Decode error: %v", err)
	}

	PrettyPrint(store)

	return
}

func main() {
	newStore := Store{
		StoreNumber:   1234,
		StreetAddress: "123 Main St",
		City:          "Austin",
		State:         "Texas",
	}

	_, err := AddStore(newStore)

	if err != nil {
		fmt.Print(err)
	}

	_, err = GetStoreInfo(1234)

	if err != nil {
		fmt.Print(err)
	}
}
