import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogList } from './data';
import Chip from './Chip';
import EmptyList from './EmptyList';
import './subBlog.css';

const SubBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let selectedBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [id]);

  return (
    <>
      <div className='blog-goBack'>
        <Link to='/'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        </div>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
                
              ))}
            </div>
            
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
        
      ) : (
        <EmptyList />
      )}
      
    </>
  );
};

export default SubBlog;
