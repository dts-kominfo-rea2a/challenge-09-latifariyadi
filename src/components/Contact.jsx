// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = ({ data }) => {
  return (
    <>
      <div className="container-contact">
        <div className="image-contact">
          <img src={data.photo} alt="" />
        </div>
        <div className="description-contact">
          <h2>{data.name}</h2>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
