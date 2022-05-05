CREATE TABLE warehouse(
   id SERIAL PRIMARY KEY,
   location     VARCHAR(30),
   phone        NUMERIC(10)
);

CREATE TABLE truck(
   id        SERIAL PRIMARY KEY,
   vol_capacity    INTEGER,
   weight_cap      INTEGER
);

CREATE TABLE trip(
   id       SERIAL PRIMARY KEY,
   trip_date     DATE,
   warehouse  INTEGER,
   truck      INTEGER,
   FOREIGN KEY(truck) REFERENCES truck(id) ON DELETE SET NULL ON UPDATE CASCADE,
   FOREIGN KEY(warehouse) REFERENCES warehouse(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE store(
   id        SERIAL PRIMARY KEY,
   store_name      VARCHAR(40),
   address         VARCHAR(100)
);

CREATE TABLE shipment(
   id    SERIAL PRIMARY KEY,
   volume         INTEGER,
   weight         INTEGER,
   trip           INTEGER,
   store          INTEGER,
   FOREIGN KEY(trip) REFERENCES  trip(id) ON DELETE SET NULL ON UPDATE CASCADE,
   FOREIGN KEY(store) REFERENCES store(id) ON DELETE SET NULL ON UPDATE CASCADE
);