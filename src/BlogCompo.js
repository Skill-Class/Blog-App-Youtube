import React from 'react'
import "./blogCompo.css"

function BlogCompo({heading, desc, author, link}) {
    return (
        <div className="blogcompo">
            <h2>{heading}</h2>
            <p>{desc}</p>
            <h5>{author}</h5>   
            <h2>{link}</h2>            
        </div>
    )
}

export default BlogCompo
