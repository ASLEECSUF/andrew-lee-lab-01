// Current list of movies
const movies = [
    { name: "The Dark Knight", genre: "action", review: "A masterpiece of action and storytelling." },
    { name: "Inception", genre: "sci-fi", review: "A mind-bending journey into dreams." },
    { name: "The Godfather", genre: "drama", review: "An iconic tale of power and family." },
    { name: "Superbad", genre: "comedy", review: "A hilarious coming-of-age story." },
    { name: "Interstellar", genre: "sci-fi", review: "A visually stunning space epic." },
    { name: "Pulp Fiction", genre: "drama", review: "A groundbreaking narrative masterpiece." },
    { name: "Avengers: Endgame", genre: "action", review: "An epic conclusion to a decade-long saga." },
    { name: "The Hangover", genre: "comedy", review: "A laugh-out-loud adventure." },
    { name: "Forrest Gump", genre: "drama", review: "A heartwarming tale of life and love." },
    { name: "Guardians of the Galaxy", genre: "sci-fi", review: "A fun and quirky space adventure." }
];

// DOM Elements
const genreDropdown = document.getElementById("genre");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const getMovieButton = document.getElementById("getMovieButton");
const clearButton = document.getElementById("clearButton");

const movieName = document.getElementById("movieName");
const movieGenre = document.getElementById("movieGenre");
const movieReview = document.getElementById("movieReview");
const movieRating = document.getElementById("movieRating");

// Function to get a random movie based on genre
function getRandomMovie() {
    const selectedGenre = genreDropdown.value;

    // Filter movies based on the selected genre
    const filteredMovies = selectedGenre === "all"
        ? movies
        : movies.filter(movie => movie.genre === selectedGenre);

    if (filteredMovies.length === 0) {
        movieName.textContent = "No movies found for this genre.";
        movieGenre.textContent = "";
        movieReview.textContent = "";
        movieRating.textContent = "";
        return;
    }

    // Select a random movie
    const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
    displayMovie(randomMovie);
}

//TODO: Function to search for a movie by name
function searchMovie() {

    // Step 1: Get the search term from the input field
    // Use the `searchInput` DOM element to get the value entered by the user.
    // Make sure to trim any extra spaces and convert the term to lowercase for case-insensitive matching.


    // Step 2: Check if the search term is empty
    // If the user hasn't entered anything, display an alert to prompt them to input a movie name.
    // You can use `alert()` for this.


    // Step 3: Search for a movie in the `movies` array
    // Use the `find()` method to check if any movie name includes the search term.
    // Make sure to convert the movie name to lowercase before comparing.


    // Step 4: Display the found movie or show a "not found" message
    // If a movie is found, call the `displayMovie()` function with the movie object.
    // Otherwise, update the `movieName`, `movieGenre`, `movieReview`, and `movieRating`
    // DOM elements to show a message like "No movie found with that name."

    alert("This feature is not implemented yet.");
}

// TODO: Function to display a movie
function displayMovie(movie) {
    // Step 1: Display the movie name
    // Use `movie.name` to set the text content of the `movieName` element.
    movieName.textContent = `Name: ${movie.name}`;

    // Step 2: Display the movie genre
    // Use `movie.genre` to set the text content of the `movieGenre` element.
    movieGenre.textContent = `Genre: ${movie.genre}`;

    // Step 3: Display the written movie review
    // Use `movie.review` to set the text content of the `movieReview` element.


    // Step 4: Add a numeric `rating` property to each movie object in the `movies` array.
    // Then use the `movie.rating` value to determine the descriptive rating:
    // - 1 to 2: "Not good"
    // - 2 to 3: "Average"
    // - 3 to 4: "Good"
    // - 4 to 5: "Excellent"
    // Write conditional logic (such as `if-elseif-else` or `switch`) to check the range and assign the appropriate description.


    // Step 5: Display the review and descriptive rating
    // Use the written review to set the text content of the `movieReview` element.
    // Use the descriptive rating to set the text content of the `movieRating` element.
    movieReview.textContent = "Review: TODO"; // change this
    movieRating.textContent = "Rating: unknown"; // change this
}

// Function to clear the displayed movie
function clearMovie() {
    movieName.textContent = "Click 'Get Movie' to start!";
    movieGenre.textContent = "";
    movieReview.textContent = "";
    movieRating.textContent = "";
    searchInput.value = "";
}

// Event Listeners
getMovieButton.addEventListener("click", getRandomMovie);
searchButton.addEventListener("click", searchMovie);
clearButton.addEventListener("click", clearMovie);
