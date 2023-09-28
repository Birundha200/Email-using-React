
import React, { useState } from 'react';
import './Composeemailpage.css';
import attachIcon from "./images/icon.png";
import closeIcon from "./images/close.png";
import imageicon from "./images/imageicon.png";
import ImageContainer from "./ImageContainerPage";

function ComposeEmail({ onSendEmail,onClose }) {
  const [name, setName] = useState('');
  const [to, setTo] = useState(''); 
  const [subject, setSubject] = useState(''); 
  const [body, setBody] = useState(''); 
  const [selectedImages, setSelectedImages] = useState([]);
  const [showImageContainer, setShowImageContainer] = useState(false);
  const [selectedImageURL, setSelectedImageURL] = useState(null);
  const [selectedImageFilename, setSelectedImageFilename] = useState(null);
  const [nameError, setNameError] = useState(''); 
  const [toError, setToError] = useState(''); 
  const [subjectError, setSubjectError] = useState(''); 
  const [bodyError, setBodyError] = useState(''); 
  
  const validateName = (name) => {
    if (!name) {
      return 'Name is required!';
    }
    if (name.length > 30) {
      return 'Name should be less than or equal to 30 characters';
    }
    return ''; 
  };

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required!';
    }
    if (email.length > 30) {
      return 'Email should be less than or equal to 30 characters';
    }
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      return 'Invalid email format';
    }
    return ''; 
  };

  const validateSubject = (subject) => {
    if (!subject) {
      return 'Subject cannot be Empty!';
    }
    return ''; 
  };

  const validateBody = (body) => {
    if (!body) {
      return 'Email field cannot be Empty!';
    }
    return ''; 
  };

  const handleSendClick = () => {
    const nameValidationResult = validateName(name);
    const emailValidationResult = validateEmail(to);
    const subjectValidationResult = validateSubject(subject);
    const bodyValidationResult = validateBody(body);

    setNameError(nameValidationResult);
    setToError(emailValidationResult);
    setSubjectError(subjectValidationResult);
    setBodyError(bodyValidationResult);

    if (nameValidationResult || emailValidationResult || subjectValidationResult || bodyValidationResult) {
      return;
    }

    const emailData = {
      name: name,
      to: to,
      subject: subject,
      body: body,
      attachedImages: selectedImages,
    };

    onSendEmail(emailData);

    setName('');
    setTo('');
    setSubject('');
    setBody('');
    setSelectedImages([]);
  };

  const handleAttachClick = () => {
    setShowImageContainer(true);
  };

  const handleBackIconClick = () => {
    setShowImageContainer(false);
  };

  const handleImageNameClick = (imageUrl, filename) => {
    setSelectedImageURL(imageUrl);
    setSelectedImageFilename(filename);
  };

  const handleImageDeleteClick = (imageUrl) => {
    const updatedImages = selectedImages.filter((image) => image !== imageUrl);
    setSelectedImages(updatedImages);
  };
  const handleGoBackClick = () => {
    onClose();
  };

  return (
    <div>
      {showImageContainer ? (
        <ImageContainer
          onClose={handleBackIconClick}
          onSelectImage={(imageUrl) => {
            setSelectedImages([...selectedImages, imageUrl]);
            setSelectedImageURL(null);
            setSelectedImageFilename(null);
            setShowImageContainer(false);
          }}
        />
      ) : (
        <div>
          <div className='backage-for-email'>
            <div className='header-for-compose-email'>CATIE Mail</div>
          </div>
          <div className="flex-items-center">
            <img src={closeIcon} className='close' onClick={ handleGoBackClick } alt='closeimage'></img>
            <p className='para'></p>
            <div className='image-container'>
              <img src={attachIcon} className="image" alt="Attach" onClick={handleAttachClick} />
            </div>
            <button onClick={handleSendClick} className="send-button-for-email">Send</button>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(''); 
              }}
            />
            {nameError && <div className="error-message">{nameError}</div>}
          </div>
          <div className="form-group">
            <label>To:</label>
            <input
              type="email"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
                setToError('');
              }}
            />
            {toError && <div className="error-message">{toError}</div>}
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setSubjectError('');
              }}
            />
            {subjectError && <div className="error-message">{subjectError}</div>}
          </div>
          <div className="compose">
            <label>Compose Mail:</label>
            {bodyError && <div className="error-message">{bodyError}</div>}
            <textarea
              rows={7}
              cols={50}
              type="text"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                setBodyError('');
              }}
            ></textarea>
          </div>

          {selectedImages && selectedImages.length > 0 && (
            <div>
              <p style={{fontWeight:"bolder",fontSize:"16px",color:"blue"}}>Attached Images:</p>
              {selectedImages.map((imageUrl, index) => (
                <div key={index}>
                  <div className='selectedimagecontainer'>
                    <img src={imageicon} className='composeimage' alt="composeimageicon"></img>
                    <p onClick={() => handleImageNameClick(imageUrl, `Image ${index + 1}`)} className='composeimagename'>
                      {`Image ${index + 1}`}
                    </p>
                    <img
                      src={closeIcon}
                      alt='close'
                      className='closeforimage'
                      onClick={() => handleImageDeleteClick(imageUrl)}
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {selectedImageURL && (
        <div className="image-preview">
          <img
            src={selectedImageURL}
            alt={selectedImageFilename}
            className="selected-image-for-email"
          />
          <img
            src={closeIcon}
            alt="close"
            className='closeforopenimage'
            onClick={() => setSelectedImageURL(null)}
          ></img>
        </div>
      )}
    </div>
  );
}

export default ComposeEmail;



