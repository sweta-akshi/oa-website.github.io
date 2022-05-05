function Movie(title, genre, year) {
    this.title = title;
    this.genre = genre;
    this.year = year;
}
Movie.prototype.print = function () {
    console.log(`${this.title} is a ${this.genre} that was released in ${this.year}.`);
};

const starWars = new Movie('Star Wars', 'SciFi', 1976);
const theTerminator = new Movie('The Terminator', 'SciFi', 1984);
const groundHogDay = new Movie('Groundhog Day', 'Comedy', 1993);

const movies = [starWars, theTerminator, groundHogDay];
movies.forEach(movie => {
    movie.print();
});
