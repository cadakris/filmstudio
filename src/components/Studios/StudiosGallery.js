import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  const photoRows = [];
  for (let i = 0; i < photos.length; i += 2) {
    photoRows.push(
      <div className="row" key={i}>
        <div className="column">
          <img
            src={photos[i]}
            // alt={photos[i].alt}
            onClick={() => handlePhotoClick(i)}
          />
        </div>
        {i + 1 < photos.length && (
          <div className="column">
            <img
              src={photos[i + 1]}
            //   alt={photos[i + 1].alt}
              onClick={() => handlePhotoClick(i + 1)}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {photoRows}
      {enlargedIndex !== -1 && (
        <div className="overlay">
          <div className="enlarged-photo">
            <img src={photos[enlargedIndex].src} alt={photos[enlargedIndex].alt} />
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