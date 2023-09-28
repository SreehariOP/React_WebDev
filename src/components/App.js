import React from "react";
import Card from "./cards.js";
import contacts from "../contacts.js";

function createCard(contact){
  return <Card 
        id ={contact.id}
        key = {contact.id}
        name = {contact.name}
        img = {contact.imgURL}
        tel ={contact.phone}
        email = {contact.email}
        />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <img  className="circle-img" src="https://th.bing.com/th/id/OIP.KKjoNGUUlIgHcUDEGnfyOAAAAA?w=186&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="avatar_img" />
      
      {contacts.map(createCard)}
      

    </div>
  );
}

export default App;