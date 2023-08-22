

const PostCard = () => {
    return (
        <div className='mx-auto max-w-[900px]'>
            <div className="card w-full lg:card-side bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">List your items for free!</h2>
                    <p>Do you have something to sell? <br /> Post ad for free and make more sell</p>
                    <div className="card-actions justify-end">
                    <label htmlFor="post_ad_modal" className="btn">Post Ad</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;