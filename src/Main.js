import { useState } from 'react';
import './noteapp.css';
import Notes from './Notes';
const Main = () =>{

const [noteArray,setArray]=useState([]);
const [title,setTitle]=useState("");
const [desc,setDesc]=useState("");



 const deleteArraycallback = (index) =>{

    setArray( oldarray =>{
      return oldarray.filter((note,id)=>{
             return id!==index;
        })
    })
 }

    return(
       <>
     <div className='main-div'>
            
            <div className='note-container'>
                <h1>Title</h1>
                 <input type='text' placeholder='add a title' onChange={(e)=>{
                    setTitle(e.target.value);
                 }} value={title}/>

                 <textarea placeholder='write a note...' onChange={(e)=>{
                    setDesc(e.target.value);
                 }} value={desc}></textarea>

                 <button className='addNote' onClick={(e)=>{
                     if(title!== "" && desc!== ""){
                        setArray(oldarray =>{ 
                            return [...oldarray,{title,desc}];
                        }) 
    
                     }  
                     else{
                        alert("please enter the data first !");
                     }     
                
                     
                    setTitle("");
                    setDesc("");
                 }}>+</button>
            </div>
     </div>

       <div className='notes-section'>
        {
           noteArray.map( (item,ind) =>{
             return <Notes {...item} id={ind} deleteArraycallback={deleteArraycallback} key={ind} > </Notes>
           })
        }
           </div>
       </>
    )
}

export default Main;