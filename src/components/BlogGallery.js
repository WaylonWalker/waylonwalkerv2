import React from "react";
import { Link } from "gatsby";
import ProjectGalleryItem from "../components/ProjectGalleryItem";

const BlogGallery = props => {
  return (
    <section className="project GalleryWrapper">
      <div className="project TitleWrapper">
        <div className="bar" />
        <h1>Blog</h1>
        <div className="bar" />
      </div>
      <div className="project Gallery">
        <section className="blog-posts">
          {props.posts
            .map(({ node: post }) => (
              <Link className="blog-post-card" key={post.id} to={post.fields.slug}>
                <div>
                  <h2> {post.frontmatter.title} </h2>
                  <div className='bottom'>
                    <em>{post.frontmatter.date}</em>
                  </div>
                </div>
              </Link>
            ))}
        </section>
      </div>
    </section>
  );
};

export default BlogGallery;
