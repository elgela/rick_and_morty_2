export default function SearchBar(props) {
   return (
      <div>
         <input type='search' class='bot' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
