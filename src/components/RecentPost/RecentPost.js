import React from "react";
import "./RecentPost.css";

const RecentPost = ({ news }) => {
  return (
    <div className="recent-main-container">
      <h1 className="title">Recent Posts</h1>
      <hr className="recent-line" />
      {news.map((item, index) => {
        return (
          <div className="recent-post-container" key={index}>
            <div className="recent-post-imgArea">
              <img
                src={item.urlToImage}
                alt="img"
                className="recent-post-img"
              />
            </div>
            <div className="recent-post-details">
              <h3>{item.title}</h3>
              <div className="article-detail">
                <p className="article-catagory">
                  {/* <i className="far fa-bookmark article-icon"></i>Technology */}
                  Technology
                </p>
                <p>
                  {/* <i className="far fa-clock article-icon"></i> Parth Maru */}
                  <li>Parth Maru</li>
                </p>
                <p>
                  {/* <i className="far fa-user article-icon"></i> 1 Jan 2020 */}
                  <li>1 Jan 2020</li>
                </p>
              </div>
              <p className="recent-descripton">{item.description}</p>
              <a href="see">Read More...</a>
              <i className="fas fa-share share-icon"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentPost;
