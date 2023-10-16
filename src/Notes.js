import './noteapp.css';
const Notes = ({id,title,desc,deleteArraycallback}) =>{


    return(
        <div className='note'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className='del' onClick={()=>{
            deleteArraycallback(id);
        }}>-</button>
        </div>
    )

}

export default Notes;