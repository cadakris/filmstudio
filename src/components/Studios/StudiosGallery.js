import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes} from "react-icons/fa";


const StudiosGallery = ({ photos }) => {
  const [enlargedIndex, setEnlargedIndex] = useState(-1);

  const handlePhotoClick = (index) => {
    setEnlargedIndex(index);
  };

  const handleNextClick = () => {
    setEnlargedIndex((enlargedIndex + 1) % photos.length);
  };

  const handlePrevClick = () => {
    setEnlargedIndex((enlargedIndex - 1 + photos.length) % photos.length);
  };

  const handleExitClick = () => {
    setEnlargedIndex(-1);
  };


  const photoRows = [];
  let i = 0;
  while (i < photos.length) {
    photoRows.push(
      <div className="row" key={i}>
        <div className="column">
          <img
            src={photos[i]}
            onClick={() => handlePhotoClick(i)}
          />
        </div>
        {i + 1 < photos.length && (
          <div className="column">
            <img
              src={photos[i + 1]}
              onClick={() => handlePhotoClick(i + 1)}
            />
          </div>
        )}
        {i + 2 < photos.length && (
          <div className="column">
            <img
              src={photos[i + 2]}
              onClick={() => handlePhotoClick(i + 2)}
            />
          </div>
        )}
      </div>
    );
    i += 3;
  }

  return (
    <div>
      {photoRows}
      {enlargedIndex !== -1 && (
        <div className="overlay">
          <button className="exit" onClick={handleExitClick}>
            <FaTimes />
          </button>
          <div className="enlarged-photo">
            <img src={photos[enlargedIndex]} 
            // alt={photos[enlargedIndex].alt} 
            />
            <button className="prev" onClick={handlePrevClick}>
              <FaArrowLeft />
            </button>
            <button className="next" onClick={handleNextClick}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudiosGallery