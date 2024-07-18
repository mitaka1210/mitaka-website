import React from "react";

const ReadHtml = () => {
  let cardAquariums = [
    {
      images: "https://images.unsplash.com/photo-1667680139900-44882fc7b625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Mitaka",
      date: "2021-09-02",
      description: "Mitaka is a city located in the western portion of Tokyo Metropolis, Japan. It is a part of the Tama Area of Tokyo. As of 1 February 2016, the city had an estimated population of 189,168, and a population density of 11,520 persons per km². Its total area is 16.42 square kilometres.",
    }
  ];
  return (
    <div className="read">
      {
        cardAquariums ? <div>
          {/*<ScrollToTop/>*/}
          {/*<div className="read-back-btn">*/}
          {/*  <button className="btn btn-outline-secondary" onClick={goBack}>back</button>*/}
          {/*</div>*/}
          <div>
            {
              cardAquariums.map((article, index) => {
                return <div key={index}>
                  <article>
                    <div className="article-image-container">
                      <img src={article.images} alt="read"/>
                    </div>
                    <div className="content-container">
                      <h3 className="article-title">{article.header}</h3>
                      <p
                        className="article-content">{article.description[0].replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />")}</p>
                    </div>
                  </article>
                  {/*<LikeDislike articleId={article.todoId}/>*/}
                  {/*<hr className="add-line"/>*/}
                  {/*<LeaveComments articleId={todoId}/>*/}
                  {/*<AddComment articleId={todoId}/>*/}
                  {/*<div>*/}
                  {/*  <SocialShare url={url} title={header} description={content} images={images}/>*/}
                  {/*</div>*/}
                </div>;
              })
            }
          </div>
        </div> : "Loading..."
      }
    </div>
  );
};

export default ReadHtml;
