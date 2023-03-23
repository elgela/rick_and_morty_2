import './Card.css'
import { Link } from "react-router-dom";

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)} className='bot'>X</button>
         <Link to={`/details/${id}`}>
            <h2>{id}</h2>
            <h2>{name}</h2>
            {/* <h2>{status}</h2> */}
            <h2>{species}</h2>
            <h2>{gender}</h2>
            {/* <h2>{origin}</h2> */}
            <img src={image} alt={name} />
         </Link>
      </div>
   );
}