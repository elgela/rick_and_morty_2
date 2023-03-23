import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import characters from './data.js';


function App() {
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />       
      </div>
   );
}

 function onSerch() {
   const characters = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };
}

export default App;
