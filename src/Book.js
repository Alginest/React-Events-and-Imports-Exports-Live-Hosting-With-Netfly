import React from 'react'

// Main Component
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    console.log('hello world')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='1' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Click
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  )
}

export default Book
