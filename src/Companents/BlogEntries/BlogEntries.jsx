import React from "react";
import BlogEntries from "./BlogItem";

const arrayBlogEntries = [
    {
        id: 0,
        title: "TITLE HEADING",
        titleDesc: "Title description",
        date: "April 7, 2014",
        desc: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at.Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitaejusto condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
        countComments: "0",
        imageURL: "https://www.w3schools.com/w3images/woods.jpg"
    },
    {
        id: 1,
        title: "BLOG ENTRY",
        titleDesc: "Title description",
        date: "17.04.2022",
        desc: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc idlorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sedultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
        countComments:"0",
        imageURL:"https://www.w3schools.com/w3images/bridge.jpg"
    }
]

const blog = () => {
    let mas = arrayBlogEntries.map(content =>
    <BlogEntries
        key={content.id}
        title={content.title}
        titleDesc={content.titleDesc}
        desc={content.desc}
        date={content.date}
        countComments={content.countComments}
        imageURL={content.imageURL}/>
    )
    return(
        <div className="w3-col m8 s12">
            {mas}
        </div>
    )
}
export default blog;

/*
* Мы можем передавать:
* Title
* Title description
* Date
* Description
* CountComments
* ImageURL
* */