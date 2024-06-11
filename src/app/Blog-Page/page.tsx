import React from 'react';
import BlogHtml from "@/app/Blog-Page/BlogHTML";
import Navigation from "@/app/Navigation-component/navigation";
import './blog.scss';
const Page = () => {
  return (
    <div className="blog-page">
      <div
        className="nav-bar-blog flex-vertical-container text-align-center justify-content-end ">
        <Navigation/>
      </div>
      <BlogHtml/>
    </div>
  );
};

export default Page;
