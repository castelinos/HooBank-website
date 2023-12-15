import {useState} from 'react';
import { close, logo, menu } from '../assets';

import { navLinks } from '../constants';

function Navbar() {

    const [toggle, setToggle] = useState(false);
    

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="Hoobank" className='w-[124px] h-[32px]' />

            <ul className='list-none justify-end items-center sm:flex hidden flex-1'>
                {
                    navLinks.map((navItem,index)=>{
                        return(
                            <li key={navItem.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${ index === navLinks.length-1 ? 'mr-0':'mr-10'}`}>
                                <a href={`#${navItem.id}`}> { navItem.title } </a>
                            </li>
                        )
                    })
                }
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={ toggle ? close : menu } alt="menu" className='w-[28px] h-[28px] object-contain' onClick={ ()=>{ setToggle( (prev) => !prev )}} />
                
                <div className={ `${ toggle ? 'flex' : 'hidden'} bg-black-gradient absolute p-6 top-20 right-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
                    <ul className='list-none justify-end items-center flex flex-col flex-1'>
                        {
                            navLinks.map((navItem,index)=>{
                                return(
                                    <li key={navItem.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${ index === navLinks.length-1 ? 'mb-0':'mb-4'}`}>
                                        <a href={`#${navItem.id}`}> { navItem.title } </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;