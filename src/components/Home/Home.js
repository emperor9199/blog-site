import React, { useState, useEffect } from "react";
import Cover from "../Cover/Cover";
import RecentPost from "../RecentPost/RecentPost";
import PopularPost from "../PopularPost/PopularPost";
import { Interests } from "../../constants/Interests";
import "./Home.css";

const Home = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await fetch(
      "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7784803310b640b8b86adc801b602028"
    ).then((res) => res.json());

    setNews(data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="base-area">
      <div className="cover-area">
        <Cover />
      </div>

      <div className="main-area">
        {/* <div className="side-container"> */}
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
          <a className="see-more-link" href="see">
            See More...
          </a>
        </div>
        {/* </div> */}
        <div className="post-container `">
          <RecentPost news={news} />
        </div>
        <div className="popular-container">
          <h3 className="popular-post-heading">Popular Posts</h3>
          <hr />
          <PopularPost news={news} />
        </div>
      </div>
    </div>
  );
};

export default Home;
