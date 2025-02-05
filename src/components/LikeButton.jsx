import  { useState } from "react";

function LikeButton() {
  // Step 1: Create a state variable for the like counts for each button
  const [likes, setLikes] = useState([0, 0]); // Each button gets its own like count

  // Step 2: Define a function to handle button clicks, accepting the index of the button
  const handleLikeClick = (index) => {
    const newLikes = [...likes]; // Make a copy of the likes array
    newLikes[index] = newLikes[index] + 1; // Increment the like count for the specific button
    setLikes(newLikes); // Update the state with the new array
  };

  return (
    <div>
      {/* Step 3: Render the buttons, each with its own like count */}
      <button onClick={() => handleLikeClick(0)}>
        {likes[0]} Likes
      </button>
      <button onClick={() => handleLikeClick(1)}>
        {likes[1]} Likes
      </button>
    </div>
  );
}

export default LikeButton;
