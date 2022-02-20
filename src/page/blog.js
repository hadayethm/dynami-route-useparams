import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { getProductData } from '../component/Data'
const Blog = () => {
    const [blogsData, setBlogsData] = useState(getProductData)
  return (
    <section id='card_area'>
    <div className='container'>
        <div className='row'>
        {blogsData.map((data, index)=>(
                <div className='col-lg-4' key={index}>
                <div className="card">
                    <img src={data.img} className="Card-Img-Top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.para}</p>
                        <Link to={`/blogs/${data.id}`} className='btn btn-primary'>Details</Link>
                    </div>
                </div>
            </div>
        ))}
    
        </div>
    </div>
    </section>
  )
}

export default Blog