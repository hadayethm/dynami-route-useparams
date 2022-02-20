import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductData } from '../component/Data'

const Details = () => {
  const { id } = useParams()
  const [blogData, setBlogData] = useState(null);
  
  useEffect(() => {
    const filtered = getProductData.filter(blogData => blogData.id === parseInt(id));
    if (filtered.length) {
      setBlogData(filtered[0]);
    }
  }, [id])


  return (
    <>
      {
        blogData !== null &&
        <>
          <section id='edtails_area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8 offset-lg-2'>
                  <div className='blog_details_wrapper'>
                    <img src={blogData.img} alt="img" />
                    <h2>{blogData.name}</h2>
                    <p>{blogData.para2}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
        </>
      }
    </>
  )
}

export default Details