import '../style.css';
import React from 'react';


function ArtworkComponent({link, title, detail}) {

  return (
    <div class="col-lg-4 col-md-6 artwork-item">
      <img src={link} class="img-fluid" alt={title}/>
      <div class="artwork-info">
        <h4>{title}</h4>
        <p>{detail}</p>
      </div>
    </div> 
  );
}

export default ArtworkComponent;
