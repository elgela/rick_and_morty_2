import './Card.css'

export default function Card({
   id, 
   name, 
   status, 
   species, 
   gender, 
   origin, 
   image, 
   onClose}) {
   return (
      <div className='text'>
         <button onClick={onClose} className='bot'>X</button>
          <h2>{id}</h2>
         <h2>{name}</h2>
         {/* <h2>{status}</h2> */}
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{origin}</h2> */}
         <img src={image} alt={name} />
      </div>
   );
}