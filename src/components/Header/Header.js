import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='absolute w-full bg-meals-panda-base flex justify-between items-center px-10 py-5 text-white'>
            <div>
                <Link className='hover:text-meals-panda-light duration-300' to='/'>
                    <h4 className='text-2xl font-thin'>Meals<span className='text-4xl font-semibold'>Panda</span></h4>
                </Link>
            </div>
            <div className='text-lg'>
                <Link className='hover:text-meals-panda-light duration-300' to='/restaurant'>Restaurant</Link>
                <Link className='ml-7 hover:text-meals-panda-light duration-300' to='/about'>About Us</Link>
            </div>
        </header>
    );
};

export default Header;