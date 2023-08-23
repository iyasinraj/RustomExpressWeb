

const PostCard = () => {
    return (
        <div className='mx-auto rounded-md max-w-[900px]'>
            <div className="w-full md:grid grid-cols-2 gap-3 bg-base-100 shadow-xl">
                <img className="rounded-l" src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" alt="Album" />
                <div className="h-full p-4 flex flex-col justify-between">
                    <h2 className="card-title">List Unlimited items for free!</h2>
                    <p>Do you have something to sell? <br /> Post ad for free and make more sell</p>
                    <div className="flex justify-end">
                        <div>                 
                            <label htmlFor="post_ad_modal" className="btn">Post Ad</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;