import React from 'react'
import allPic from './images/allSports.jpg'
export const Navbar = () => {
  return (
        <>
        
        
          <div className="cont">
            <div className="logo">
              <h2>LiveSync</h2>
            </div>
            <nav className="nav-items">
              <ul>
                <li>
                <a href="#">NBA</a></li>
                <li><a href="#">NFL</a></li>
                <li><a href="#">MLB</a></li>
                <li><a href="#">Soccer</a></li>
                <li><a href="#">NHL</a></li>
              </ul>
            </nav>
          <div className="sidePic">
            <img src="./images/allSports.jpg" alt="" />
          </div>
          

            </div>
        
       
        </>
  )
}
export default Navbar