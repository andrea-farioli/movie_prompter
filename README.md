# Movie Prompter

A single web application that helps you discover the latest movies by genre and build a temporary watchlist of your favorites.

## Features

- **Genre-Based Movie Discovery:** Browse a curated list of recent movies based on your selected genre.
- **Like or Dislike:** Easily indicate your interest in prompted movies with simple like or dislike actions.
- **Temporary Watchlist:** Keep track of all the movies you've liked in a dedicated watchlist page.

## How It Works

The Movie Prompter leverages the power of the [The Movie Database (TMDb) API](https://www.themoviedb.org) to fetch up-to-date movie information. The application's functionality is entirely client-side, built with the following JavaScript files:

- `main.js`: Handles all Document Object Model (DOM) interactions and dynamic content updates.
- `api.js`: Manages HTTP requests to the TMDb API to retrieve movie data.
- `watchlist.js`: Stores and manages the user's liked movies in a temporary, in-browser watchlist.

The user interface is styled using the [Bootstrap](https://getbootstrap.com/) framework, enhanced with custom CSS for a unique look and feel.

## Why This Project Exists

This project was developed purely for **didactical purposes**, serving as a practical exercise in:

- Fetching and utilizing data from external APIs.
- Implementing client-side logic with JavaScript.
- Managing DOM manipulation and dynamic content.
- Creating a user-friendly interface with HTML, CSS, and a CSS framework.
- Understanding the basic principles of building interactive web applications.
