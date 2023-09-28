
import React, { useState } from 'react';
import './ImageContainer.css';
import attachIcon from "./images/attach.svg";
import closeIcon from "./images/close.png";
import flower1 from "./images/flower1.jpeg";
import flower2 from "./images/flower2.jpeg";
import flower3 from "./images/flower3.jpeg";
import flower4 from "./images/flower4.jpeg";
import flower5 from "./images/flower5.jpeg";
import flower6 from "./images/flower6.jpeg";
import flower7 from "./images/flower7.jpeg";
import flower8 from "./images/flower8.jpeg";
import flower9 from "./images/flower9.jpeg";
import flower10 from "./images/flower10.jpeg";
import flower11 from "./images/flower11.jpeg";
import flower12 from "./images/flower12.jpeg";
import checkmarkIcon from "./images/checkmarkicon.png";

function ImageContainer({ onClose, onSelectImage }) {
  const [selectedImageURL, setSelectedImageURL] = useState(null); 
  const [selectedImageFilename, setSelectedImageFilename] = useState(null); 

  const images = [
    flower1,
    flower2,
    flower3,
    flower4,
    flower5,
    flower6,
    flower7,
    flower8,
    flower9,
    flower10,
    flower11,
    flower12,
  ];

  const handleClose = () => {
    onClose();
  };

  const handleAttachClick = () => {
    if (selectedImageURL) {
      onSelectImage(selectedImageURL, selectedImageFilename);
      setSelectedImageURL(null);
      setSelectedImageFilename(null); 
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageFilename(getFilenameFromURL(imageUrl));
    setSelectedImageURL(imageUrl);
  };
 
  const getFilenameFromURL = (url) => {
    return url.substring(url.lastIndexOf('/') + 1);
  };

  return (
    <div>
      <div className='backage'>
        <div className='headerr'>CATIE Mail</div>
      </div>
      <div className='wholepage'>
        <div className="flex-items-centerr">
          <div className='image-containerr'>
            <img src={closeIcon} alt="close" onClick={handleClose} className="closee" />
          </div>
          <p className='paraa'></p>
          <div className='image-containerr'>
            <img src={attachIcon} className="imagee" alt="Attach" onClick={handleAttachClick} />
          </div>
        </div>
        <div className="imagePlace">
          <p className='library'>Please select a photo from your library</p>
          <div className='image-wrapper'>
            {images.map((imageUrl, index) => (
              <div key={index} className={selectedImageURL === imageUrl ? 'selected-image' : ''}>
                <img
                  src={imageUrl}
                  alt="imagenumber"
                  className="sampleimagee"
                  onClick={() => handleImageClick(imageUrl)}
                />
                {selectedImageURL === imageUrl && (
                  <img
                    src={checkmarkIcon}
                    alt="Selected"
                    className="checkmarkiconimage"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='Attach-buttons'>
        <button className='attach' onClick={handleAttachClick}>Attach</button>
        <button className='cancel' onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ImageContainer;


