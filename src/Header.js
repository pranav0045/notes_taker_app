import logo from './logo.jpg';
import './noteapp.css';


const Header = ()=>{

    return(
        <div className="header">

           <div className="logo">

            <img src={logo}/>
            <h2>pd keep</h2>

           </div>

           <div className='search'>

            <input type='text' placeholder='Search here'/>
           </div>

        </div>

    )
}

export default Header;