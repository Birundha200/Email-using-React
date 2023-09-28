import { useState } from 'react';
import deleteIcon from "./images/Icon.svg";
import './Detailview.css'; 
import imageicon from './images/imageicon.png';
import closeIcon from "./images/close.png";
import backIcon from './images/backk.png';

export default function DetailView({ data, onDelete,onBackClick }) {
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleImageNameClick = (imageIndex) => {
    setSelectedImage(data.attachedImages[imageIndex]);
  };

  return (
    <div className="detailview">
       <div className='back'>
        <img
          src={backIcon}
          className="back-for-listviewpage"
          onClick={() => onBackClick()}
          alt="Back"
        />
        </div>
      <div className="detail-content">
        <div className="detailviewcontainer">
          <img src={data.imageUrl} alt={data.name} className="detail-image" />
          <div className="from">
            <p>
              <b>From:</b>
              {data.name}
              <br />
              <b>To:</b>{data.to}
            </p>
          </div>
          <p className="detaildate">{data.date}</p>
          <img src={deleteIcon} className="delete" alt="Delete" onClick={onDelete} />
        </div>
        <div className="messagebodyy">
          <p className="messagee">Message Body:</p>
          <br />
          {data.message}
          </div>
          {data.attachedImages && data.attachedImages.length > 0 && (
            <div className="attached-images">
              <div className='attachments'>Attachments</div>
              {data.attachedImages.map((image, index) => (
                <div  className='image-name'>
                  <div className='selectedimage'>
                        <img src={imageicon} alt="imageicon" className='imageiconfordetailview'></img>
                        <p className="image-name-text" onClick={() => handleImageNameClick(index)}>
                           Image {index + 1}
                       </p>
                </div>
                </div>
              ))}
            </div>
          )}
      </div>
      {selectedImage && (
        <div className="image-modal">
           <img src={selectedImage} alt="SelectedImage" />
          <img src={closeIcon} onClick={() => setSelectedImage(null)} className='closeforopenimageindetail'
          alt="closeicon"></img>
         
        </div>
      )}
    </div>
  );
}