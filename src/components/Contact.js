import React from 'react';
import './Contact.css';

const Contact = (props) => {

  return (
    <div className="Contact">
      <img 
        className="avatar" 
        src={props.image}
        alt={props.name}
      />
      
      <div className="rightSide">
        <div className="name">{props.name}</div>
        
        <div className="status">
          <div className={props.online === "true"? "status-online" : "status-offline"}>
            <div className="status-text">
              {props.online === "true"? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;