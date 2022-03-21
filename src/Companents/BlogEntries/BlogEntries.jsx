import React from "react";
import BlogItem from "./BlogItem";
import {posts} from "../../Constant";


const BlogEntries = () => {
    return(
        <div className="w3-col m8 s12">
            {
                posts.map((content,index) => {
                    return <BlogItem
                key={index}
                title={content.title}
                titleDesc={content.titleDesc}
                desc={content.desc}
                date={content.date}
                countComments={content.countComments}
                imageURL={content.imageURL}/>
                })
            }
        </div>
    )
}
export default BlogEntries;

/*
* Мы можем передавать:
* Title
* Title description
* Date
* Description
* CountComments
* ImageURL
* */