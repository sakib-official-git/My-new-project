import React from 'react';
import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-5xl font-bold'>Buidl Your Ideal </h1>
                <h1 className='text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</h1>
                <p>Explore frontend,backend,database and tooling
                    options,<br />compare them side by side,and put together the stack that fits
                    your <br /> next project.
                </p>
                <div className='flex gap-4'>
                <button className='bg-gradient-to-r from-orange-500 to bg-pink-500     text-white px-3 py-1 rounded-lg front-medium '>Explore Tecnology</button>
                <button className='border border-gray-300 text-gray-700 px-4 py-1 rounded-lg font-medium'>Learn More</button>
                </div>


            </div>

            <div>
                <img src={BannerImage} alt="" />



            </div>
        </div>
    );
};

export default Banner;