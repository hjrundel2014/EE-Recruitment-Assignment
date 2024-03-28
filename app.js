// Function 2: Toggle Seat Selection
let selectedSeats = [];

// Function to toggle seat selection
function toggleSeat(seat) {
    // Check if the seat is already selected
    const index = selectedSeats.indexOf(seat);
    if (index !== -1) {
        // If selected, remove it from the list
        selectedSeats.splice(index, 1);
    } else {
        // If not selected, add it to the list
        selectedSeats.push(seat);
    }
    }

      // Example usage
      toggleSeat('A1'); // Select seat A1
      console.log(selectedSeats); // Output: ['A1']

      toggleSeat('B3'); // Select seat B3
      console.log(selectedSeats); // Output: ['A1', 'B3']

      toggleSeat('A1'); // Deselect seat A1
      console.log(selectedSeats); // Output: ['B3']

      function confirmSeats() {
        // Check if any seat is selected
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat.");
            return;
        }
    
        // Display confirmation message with selected seats
        const confirmationMessage = "You have selected the following seats:\n" + selectedSeats.join(', ');
        alert(confirmationMessage);
    
        // Here you can perform additional actions like sending the selected seats to a server or navigating to the next page
    }

    document.addEventListener("DOMContentLoaded", function() {
  const films = [
    { 
      title: "Dune 2", 
      genre: "Action, Draama", 
      ageRating: "PG-13", 
      time: "10:00, 15:00", 
      language: "Inglise", 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BODdjMjM3NGQtZDA5OC00NGE4LWIyZDQtZjYwOGZlMTM5ZTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY1200_CR96,0,630,1200_AL_.jpg",
    },

    { 
      title: "Kung Fu Panda 4", 
      genre: "Komöödia", 
      ageRating: "PG", 
      time: "11:00,14:00", 
      language: "Eesti", 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
    },

    { 
    title: "Film 3", 
    genre: "Õudus, Triller", 
    ageRating: "R", 
    time: "12:00, 16:00", 
    language: "Inglise", 
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYTcwMjA2MzctNjU0NC00OWRkLWJlMzMtZDBjNjViZjEyMzgwXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg"
    },

    { 
    title: "Man with a Movie Camera", 
    genre: "Dokumentaal", 
    ageRating: "PG-13", 
    time: "13:00", 
    language: "Vene", 
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYTc3NGVlN2QtYWJlZi00YjhjLThiZjctZDA1MmE1NGI4ZmE4XkEyXkFqcGdeQXVyODQyNDU4OTk@._V1_.jpg"
    },
  ];

  // Function to populate film list
  function populateFilmList(filteredFilms) {
    const filmListContainer = document.getElementById("filmList");
    filmListContainer.innerHTML = ""; // Clear previous content

    filteredFilms.forEach(film => {
        // Create film element from template
        const filmElement = document.createElement("div");
        filmElement.classList.add("film");

        // Append film element to film list container
        filmListContainer.appendChild(filmElement);

        // Replace template placeholders with film data
        filmElement.innerHTML = `
            <div class="film__image-container">
                <img class="film-image" img src="${film.imageUrl}" alt="${film.title}">
            </div>
            <div class="film__info">
                <h2 class="film__title">${film.title}</h2>
                <p class="film__genre">Genre: ${film.genre}</p>
                <p class="film__age-rating">Age Rating: ${film.ageRating}</p>
                <p class="film__time">Time: ${film.time}</p>
                <p class="film__language">Language: ${film.language}</p>
                <a href="TicketSelection.html" class="button buy-ticket-button">Osta Pilet</a>
            </div>
        `;
    });
  }

  // Initial population of film list
  populateFilmList(films);

  // Function to filter films based on selected checkboxes
  function filterFilms() {
    const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(input => input.value);
    const selectedAgeRatings = Array.from(document.querySelectorAll('input[name="age"]:checked')).map(input => input.value);
    const selectedTimes = Array.from(document.querySelectorAll('input[name="time"]:checked')).map(input => input.value);
    const selectedLanguages = Array.from(document.querySelectorAll('input[name="language"]:checked')).map(input => input.value);

    const filteredFilms = films.filter(film => {
      return (
        (selectedGenres.length === 0 || film.genre.split(', ').some(genre => selectedGenres.includes(genre))) &&
        (selectedAgeRatings.length === 0 || selectedAgeRatings.includes(film.ageRating)) &&
        (selectedTimes.length === 0 || film.time.split(', ').some(time => selectedTimes.includes(time))) &&
        (selectedLanguages.length === 0 || selectedLanguages.includes(film.language))
      );
    });

    // Populate film list with filtered films
    populateFilmList(filteredFilms);
  }

  // Add event listeners to checkboxes for filtering
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterFilms);
  });
});