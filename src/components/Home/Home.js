import React from 'react';

const Home = () => {
    return (
        <section className='w-screen h-screen bg-home-bg bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-multiply' >
            <div className='h-full flex justify-center items-center'>
                <h1 className='text-white text-8xl font-light'>
                    Welcome To
                    <br />
                    <span className='block mt-4 font-semibold text-meals-panda-light'>Meals Panda</span>
                </h1>
            </div>
        </section >
    );
};

export default Home;