function Character(character){
   return(
    <div className="col-3">
        <div className="card bg-dark h-75 text-white ">
            <img src={character.image} alt={character.name}className='card-img-top' width='300'/>
        
        <div className="card-body">
        <h3 className='card-title'>{character.name}</h3>
            <p>Origin: {character.origin && character.origin.name }</p> 
            <p>Status: {character.status}</p> 
            <p>Species:{character.species}</p>
        </div>
        </div>
        
</div>
   )
}
export default Character