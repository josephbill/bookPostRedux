import React from 'react'
import {useSelector} from 'react-redux'

export const BooksList = () => {
    //getting our books items from the store 
    const posts = useSelector(state => state.books)
    //creating our renderer for the books items
    const renderedPosts = posts.map(post => (
        <article className='post-excerpt' key={post.id}>
             <h3>{post.title}</h3>
             <p className='post-content'>{post.content.substring(0,100)}</p>
        </article>
    ))

    return (
        <section className='post-list'>
             <h2>
                Posts
             </h2>
             {renderedPosts}
        </section>
    )
}