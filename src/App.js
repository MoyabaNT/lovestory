import React, { useState, useRef } from "react";

const App = () => {
  const [questionText, setQuestionText] = useState("Do you love me?");
  const [showGiphy, setShowGiphy] = useState(true); // Initially show the Giphy embed
  const noBtnRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleYesClick = () => {
    // Change the question and hide the embedded Giphy
    setQuestionText("I love you too ❤️");
    setShowGiphy(false); // Hide the embedded Giphy
  };

  const handleNoMouseOver = () => {
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const noBtnRect = noBtnRef.current.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtnRef.current.style.left = `${randomX}px`;
    noBtnRef.current.style.top = `${randomY}px`;
  };

  return (
    <div className="ml-20">
    <div className="relative w-96 h-96 border border-black mx-auto mt-10" ref={wrapperRef}>
      <h1 className="text-xl font-bold mb-4">{questionText}</h1>

      {/* Display Giphy Embed before clicking Yes */}
      {showGiphy ? (
        <div
          style={{ width: "100%", height: "0", paddingBottom: "74%", position: "relative" }}
          dangerouslySetInnerHTML={{
            __html: `
            <iframe 
              src="https://giphy.com/embed/1hqb8LwPS2xCNCpWH8" 
              width="100%" 
              height="100%" 
              style="position:absolute" 
              frameborder="0" 
              class="giphy-embed" 
              allowfullscreen>
            </iframe>
            `,
          }}
        />
      ) : (
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif"
          alt="Rickroll gif"
          className="w-full h-auto mt-4"
        />
      )}

    </div>
    <div className="flex space-x-4 mt-4">
        {/* Yes button */}
        <button
          className="yes-btn px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleYesClick}
        >
          Yes
        </button>

        {/* No button */}
        <button
          className="no-btn px-4 py-2 bg-red-500 text-white rounded absolute"
          ref={noBtnRef}
          onMouseOver={handleNoMouseOver}
          style={{ top: "100px", left: "100px" }} // Initial position of the No button
        >
          No
        </button>
      </div>

    </div>

  );
};

export default App;
