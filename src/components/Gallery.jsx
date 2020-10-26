import React, { Component } from "react";
import "./Gallery.css";
import pic1 from "../images/bear.jpeg";
import pic2 from "../images/Crown.jpeg";
import pic3 from "../images/daniel_laugh.jpg";
import pic4 from "../images/daniel_sexy.jpg";
import pic5 from "../images/daniel1.jpg";
import pic6 from "../images/us.jpeg";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        pic1,
        pic6,
        pic2,
        pic3,
        pic5,
        pic5,
        pic3,
        pic6,
        pic3,
        pic4,
        pic2,
      ],
    };
  }

  render() {
    return (
      <>
        <div className="gallery-container">
          <div className="gallery">
            {this.state.photos.map((item, i) => {
              return (
                <img
                  src={item}
                  id={"pic" + (i + 1)}
                  className="photo"
                  style={{
                    animationName: "photo",
                    animationDuration: (i + 1) / 3 + "s",
                    animationTimingFunction: "ease-in",
                  }}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
