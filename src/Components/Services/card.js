import React from 'react';
import PropTypes from 'prop-types';
import 'propscode/Components/Services/services.style.css';

const Card = ({ title,img, text }) => {
  return (
    <div className="card " style={{ marginBottom: 20, flex:1,justifyContent:'center', width: "94%", height: '300px', borderWidth:0,  borderRadius:10, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 10px', cursor:'pointer'}}>
      <div className="card-body">
        <img src={img} width={100} />
        <h5 className="card-title text-center pt-3">{title}</h5>
        <p className="card-text text-justify" style={{fontFamily: 'Open Sans'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}


Card.PropsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;