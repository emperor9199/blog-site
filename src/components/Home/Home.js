import React from "react";
import Cover from "../Cover/Cover";
import RecentPost from "../RecentPost/RecentPost";
import PopularPost from "../PopularPost/PopularPost";
import { Interests } from "../../constants/Interests";
import "./Home.css";
import { Posts } from "../../constants/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="base-area">
      <div className="cover-area">
        <Cover />
      </div>

      <div className="main-area">
        <div className="interest-container">
          <h3 className="interest-catagory">Catagories</h3>
          <hr className="h-line" />
          <div className="interest-sub-container">
            {Interests.map((item) => {
              return (
                <p className="interest-link" key={item.id}>
                  {item.name}
                </p>
              );
            })}
          </div>
          <Link to="/all-blogs" className="see-more-link">
            See More...
          </Link>
        </div>
        <div className="post-container">
          <RecentPost news={Posts} />
          <Link to="/all-blogs" className="see-page-link bottom-link">
            See All Blogs...
          </Link>
        </div>
        <div className="popular-container">
          <h3 className="popular-post-heading">Popular Posts</h3>
          <hr />
          <PopularPost news={Posts} />
          <Link to="/all-blogs" className="see-page-link bottom-link">
            See All Blogs...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
