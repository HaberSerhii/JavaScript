const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);

console.log(allGenres);

function f1() {
  document.querySelector(".output-1").innerHTML = uniqueGenres;
}

document.querySelector(".btn-1").onclick = f1;
