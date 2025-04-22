// Save the movies in local storage in a array
document.addEventListener("DOMContentLoaded", () => {
  const likeButton = document.getElementById("likeBtn");
  const watchlistKey = "likedMovies";
  likeButton.addEventListener("click", () => {
    const movieTitleElement = document.getElementById("movieTitle");
    const movieOverviewElement = document.getElementById("movieOverview");

    if (movieTitleElement && movieOverviewElement) {
      const likedMovie = {
        title: movieTitleElement.textContent,
        overview: movieOverviewElement.textContent,
      };

      const storedWatchlist = localStorage.getItem(watchlistKey);
      let watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];

      watchlist.push(likedMovie);

      localStorage.setItem(watchlistKey, JSON.stringify(watchlist));
      // console.log("Movie added to watchlist:", watchlist);
    } else {
      console.log(
        "Error: target elements movieTitle and movieOverview not found."
      );
    }
  });
});

// Display the array in watchlist.html and clean it when returning to index.html
document.addEventListener("DOMContentLoaded", () => {
  const watchlistContainer = document.getElementById("watchlist-container");
  const clearWatchlistLink = document.querySelector('a[href="/index.html"]');
  const watchlistKey = "likedMovies";

  const clearWatchlist = () => {
    localStorage.removeItem(watchlistKey);
    watchlistContainer.innerHTML = "<p>Your watchlist is empty.</p>";
    // console.log("Your watchlist is empty.");
  };

  if (clearWatchlistLink) {
    clearWatchlistLink.addEventListener("click", clearWatchlist);
  } else {
    console.log("Error: return link not found.");
  }

  const storedWatchlist = localStorage.getItem(watchlistKey);
  const watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];

  if (watchlist.length > 0) {
    watchlist.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie-item");

      const titleHeading = document.createElement("h2");
      titleHeading.textContent = movie.title;
      titleHeading.setAttribute("id", "movieTitle");

      const overviewParagraph = document.createElement("p");
      overviewParagraph.textContent = movie.overview;
      overviewParagraph.setAttribute("id", "movieText");
      overviewParagraph.setAttribute("class", "pb-4");

      movieDiv.appendChild(titleHeading);
      movieDiv.appendChild(overviewParagraph);
      watchlistContainer.appendChild(movieDiv);
    });
  } else if (
    !clearWatchlistLink ||
    (clearWatchlistLink && localStorage.getItem(watchlistKey))
  ) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Your watchlist is empty.";
    watchlistContainer.appendChild(emptyMessage);
  }
});
