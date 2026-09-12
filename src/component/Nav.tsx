import React from 'react';
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className=' '>
            
            
            <div className='container mx-auto flex justify-between'>

            <div>
               <img src={Logo}alt="" />
 
            </div>

            <ul className='flex gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
                
                

            </ul>



            <div>
                <button className="btn btn-active rounded-4xl ">Sign in</button>
               <button className="bg-pink-500 ... rounded-4xl">Sign Up</button>
                
               
               
               

            </div>

</div>

       </nav>
    );
};

export default Nav;