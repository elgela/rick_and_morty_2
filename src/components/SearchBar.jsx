import './SearchBar.css'

export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => onSearch('Not found id')} className='btnAdd' >Agregar</button>
      </div>
   );
}
