import React from 'react'
import SearchBar from './SearchBar'
import './Nav.css'

export default function Nav({onSearch}) {
  return (
    <div class='navBar'>
        <SearchBar />
    </div>
  )
}
