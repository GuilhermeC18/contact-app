import "./Contact.css"; 

function Contact(props) {
  
  return (
  <div className="Contact">
    <img src={props.avatar} className="avatar" alt="person" />
      <h4 className="name">{props.name}</h4>
      <div className="status">
        <span className={props.online ? "status-online" : "status-offline"}>
        </span>
      </div>
  </div>    
  );
} 

export default Contact; 


