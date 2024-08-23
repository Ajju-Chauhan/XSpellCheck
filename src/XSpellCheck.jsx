import React, { useState, useEffect } from "react";

const XSpellCheck = () => {
  // Custom dictionary for spell-checking
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  // State for managing user input text
  const [text, setText] = useState("");
  
  // State for storing the suggestion based on the first misspelled word
  const [suggestion, setSuggestion] = useState("");

  // Effect hook to handle spell-checking logic when the text changes
  useEffect(() => {
    // Clear suggestion if input is empty
    if (text.trim() === "") {
      setSuggestion("");
      return;
    }

    // Split the input text into words
    const words = text.split(" ");
    
    // Iterate through words to find the first misspelled word
    for (const word of words) {
      const lowerCaseWord = word.toLowerCase();
      
      // If the word is misspelled, set the suggestion and break
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        break;
      } else {
        setSuggestion("");
      }
    }
  }, [text]); // Dependency array with text state

  // Handler to update text state with the user's input
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Render the textarea and the suggestion if it exists
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
