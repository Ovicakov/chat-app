import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    }
  }

  newOnline = (event) => {
    const newOnline = !this.state.online
    this.setState({online: newOnline})
  }
  
  render() {
    return (
      <div className="Contact">
        <img
          className="avatar" 
          src={this.props.image}
          alt={this.props.name}
        />
        
        <div className="rightSide">
          <div className="name">{this.props.name}</div>
  
          <div 
            className="status"
          >
            <div className="status-text">
              <div 
                onClick={this.newOnline}
                className={this.state.online ? "status-online" : "status-offline"}></div>
                {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default Contact;