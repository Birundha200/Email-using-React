
import unreadIcon from "./images/unread.svg";
import imagecontainsIcon from "./images/imagecontains.png";
import './Listviewpage.css';

export default function Card({ name, message, imageUrl, date, isUnread, attachedImages }) {
  // Capitalize the first letter of the name
  const capitalizedName = name.charAt(0).toUpperCase().concat(name.slice(1));

  return (
    <div className="card">
      <div className="image-containers">
        <div >
        <img src={imageUrl} className="photo" alt="photoforimage"/>
        </div>
        <div className="unreadiconContainer">
        {isUnread && <img src={unreadIcon} alt="Unread" className='unread-icon' />}
        </div>
      </div>

      <div className="content">
        <div style={{width:"100%"}}>
        <div className="name">{capitalizedName}</div>
        </div>
        <div style={{width:"100%"}}>
        <div className="message">{message}</div>
        </div>
      </div>
      <div className="attachediconcontainer">
      {attachedImages && attachedImages.length > 0 && (
        <img src={imagecontainsIcon} alt="imagecontainsicon" style={{ margin: "5px", height: "20px", width: "30px" }} className="imagecontainsicon" />
      )}
      </div>
      <div className="date" style={{width:"25%",marginLeft:"10px"}}>
        <p>{date}</p>
      </div>
    </div>
  );
}
