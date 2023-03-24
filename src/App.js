import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import characters from './data.js';
import { useState } from 'react';

function App() {
   const state = useState([]);
   // console.log(useState);
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />       
      </div>
   );
}

 function onSearch() {
   const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   };
 }

export default App;
