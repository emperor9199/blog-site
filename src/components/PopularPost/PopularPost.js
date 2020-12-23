import React from "react";
import "./PopularPost.css";

const PopularPost = ({ news }) => {
  return (
    <div className="popular-main-container">
      {news.map((item, index) => {
        return (
          <div className="popular-post-container" key={index}>
            <div className="popular-post-img">
              <img src={item.urlToImage} alt="img" className="popular-image" />
            </div>
            <div className="popular-post-details">
              <h4>{item.title}</h4>
              <p className="popular-description">{item.description}</p>
              <a href="see">Read More...</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularPost;
