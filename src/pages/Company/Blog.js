import React from 'react';

const Blog = () => {
    return (
        <div className='my-8 text-justify px-4'>
            <div className='flex justify-center my-4'>
                <h1 className='text-center uppercase font-bold text-2xl border-b-2 w-1/2'>RustomExpress Blogs</h1>
            </div>
            <div className='w-full h-[400px] flex justify-center items-center'>
                <p className='text-center text-2xl'>
                    No blog posted yet
                </p>
            </div>
        </div>
    );
};

export default Blog;