

const artistsData = [
  {
    "name": "Dua Lipa",
    "birthYear": 1995,
    "country": "United Kingdom",
    "genres": ["Pop", "Dance"],
    "hitSongs": ["Don't Start Now", "New Rules"],
    "description": "Dua Lipa is known for her captivating pop and dance music."
  },
  {
    "name": "Katy Perry",
    "birthYear": 1984,
    "country": "United States",
    "genres": ["Pop"],
    "hitSongs": ["Firework", "Roar"],
    "description": "Katy Perry is a global pop sensation with numerous chart-topping hits."
  },
  {
    "name": "Billie Eilish",
    "birthYear": 2001,
    "country": "United States",
    "genres": ["Pop", "Alternative"],
    "hitSongs": ["Bad Guy", "Ocean Eyes"],
    "description": "Billie Eilish is a young and influential artist known for her unique style and impactful lyrics."
  },
  {
    "name": "Taylor Swift",
    "birthYear": 1989,
    "country": "United States",
    "genres": ["Pop", "Country"],
    "hitSongs": ["Love Story", "Shake It Off"],
    "description": "Taylor Swift is a versatile artist with a blend of pop and country influences."
  },
  {
    "name": "Ariana Grande",
    "birthYear": 1993,
    "country": "United States",
    "genres": ["Pop", "R&B"],
    "hitSongs": ["Thank U, Next", "7 Rings"],
    "description": "Ariana Grande is recognized for her powerful voice and a mix of pop and R&B styles."
  },
  {
    "name": "Lana Del Rey",
    "birthYear": 1985,
    "country": "United States",
    "genres": ["Indie Pop", "Alternative"],
    "hitSongs": ["Summertime Sadness", "Video Games"],
    "description": "Lana Del Rey is known for her dreamy and cinematic approach to music."
  }
];




function generateArtistCards(artists) {
  const artistContainer = document.getElementById("artist-container");
  artistContainer.innerHTML = '';
  artists.forEach(artist => {
    const card = document.createElement("div");
    card.classList.add("artist-card");


    const image = document.createElement("img");
    image.src= 'singing.png';
    image.id="img";
    card.appendChild(image);
    artistContainer.appendChild(card);



    const name = document.createElement("p");
    name.textContent = `Artists : ${artist.name}`;
    card.appendChild(name);
    artistContainer.appendChild(card);

    const birthYear = document.createElement("p");
    birthYear.textContent = `Birthyear:${artist.birthYear}`;
    card.appendChild(birthYear);
    artistContainer.appendChild(card);

    const country = document.createElement("p");
    country.textContent = `Country :${artist.country}`;
    card.appendChild(country);
    artistContainer.appendChild(card);

    const genres = document.createElement("p");
    genres.textContent = `Genres:${artist.genres}`;
    card.appendChild(genres);
    artistContainer.appendChild(card);

    const hitSongs = document.createElement("p");
    hitSongs.textContent = `Hitsongs:${artist.hitSongs}`;
    card.appendChild(hitSongs);
    artistContainer.appendChild(card);

    const description = document.createElement("p");
    description.textContent =`About:${ artist.description}`;
    card.appendChild(description);
    artistContainer.appendChild(card);

    


  });
}

function filterArtists(searchTerm) {
  const filteredArtists = artistsData.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  generateArtistCards(filteredArtists);
}



document.getElementById("searchInput").addEventListener("input", function (event) {
  filterArtists(event.target.value);
});

generateArtistCards(artistsData);
