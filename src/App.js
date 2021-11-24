import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5", description:"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon." },
    { name: "E-balagurushamy", rating: "4/5", description: "Prof. Dr. E. Balagurusamy is an Indian educator, engineer. He is the Chairman of EBG Foundation in Coimbatore and the President of the Coimbatore Academy of Sciences."},
    { name: "You Don't Know JS", rating: "3.5/5", description: "Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes."}
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      description: "The Immortals of Meluha is the first book of Amish Tripathi, first book of Amishverse, and also the first book of Shiva Trilogy. "
    },
    {
      name:"Great gets by",
      rating: "4/5",
      description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description: "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him."
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      description: "A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home."
    },
    {
      name: "zero to one",
      rating: "5/5",
      description: "Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake"
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description: "Instant WSJ bestseller * Translated into 18 languages* #1 Most Recommended Book of the year (Bloomberg annual survey of CEOs and entrepreneurs)* An Amazon, Bloomberg, Financial Times, Forbes, Inc"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "larger" }}> {book.description} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

