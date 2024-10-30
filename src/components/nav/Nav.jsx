import { useState } from "react";
import Link from "./Link";
import { IoMdMenu  } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
const Nav = () => {
    
    const [open, setOpen] = useState(true)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' } // 404 page
      ];



    return (
        <nav className="p-3 bg-yellow-300" >
            <div className="z-20 cursor-pointer text-3xl md:hidden" onClick={() =>setOpen( !open)}>
                {
                    open === true ? <IoMdMenu  /> : <IoClose />
                }
            
            </div>
            <ul className={`z-10 absolute duration-1000 md:static md:flex bg-yellow-300 ${open ? '-top-52': 'top-14 shadow-md '}`}>
                    {
                        routes.map(route =><Link key={route.id} route={route}></Link> )
                    }
            </ul>
        </nav>
    );
};

export default Nav;