import { React} from "react";
import { NavLink } from "react-router-dom";


const Home = () => {

    return (
      
        <div className='home'>
        <div className="home-list">
            <ul className="fix-list">
                <li><NavLink style={({isActive}) => isActive ? {color: 'white'} : {color: 'red'}}
                     to="/">Home</NavLink>
                </li>
                <li>
                     <NavLink style={({isActive}) => isActive ? {color: 'white'} : {color: 'red'}}
                     to="/users">Users</NavLink>
                </li>
                <li>
                      <NavLink style={({isActive}) => isActive ? {color: 'white'} : {color: 'red'}}
                      to="/about">About</NavLink>
                </li>
            </ul>
        </div>

        <h1 className="home-text">Welcome To Warzone Society</h1>
        <p className="home-text">This is a page for Call of Duty Warzone Players To Find Like-minded People</p>
        <div className="COD-pic"> 
             <img  src="https://assets.gamepur.com/wp-content/uploads/2022/09/15141250/Call-of-Duty-Warzone-Mobile-Verdansk.jpg" alt="warzone streamers" height="400px" width="100%"/>
        </div>
        <div className="footer">
            <ul className="footer-list">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Rules of Conduct</a></li>
                <li><a href="#">Advertise on Warzone Society</a></li>
            </ul>
        </div>
        </div>
      
    )
  }

  export default Home;