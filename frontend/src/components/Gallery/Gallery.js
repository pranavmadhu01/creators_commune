import { useState, useEffect } from "react";
import "./Gallery.css";
export default function Gallery() {
  const [image, setImage] = useState([]);
  function fetchData() {
    fetch(`${process.env.REACT_APP_FIREBASE_DOMAIN}/Gallery.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImage(data);
      });
  }
  console.log(image)
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="gallery-wrapper">
      <div className="section-title-wrapper">
        <h2>GALLERY</h2>
      </div>
      <div className="gallery-inner-wrapper">
        {image.map((imge) => (
          <img src={imge.image} className="gallery-image" />
        ))}
      </div>
    </div>
  );
}
