import React from 'react'
import ReactDom from 'react-dom'
// Css Import
import './index.css'
// Import components
import { books } from './books'
import Book from './Book'

// APP
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
