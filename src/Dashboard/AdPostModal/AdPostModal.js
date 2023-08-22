const AdPostModal = () => {
    
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="post_ad_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl">
                    <h2 className='text-center text-2xl font-bold'>Post Your Ad</h2>

                    <h2 className='text-xl font-bold my-4'>Select Your Location</h2>
                    <div className='grid md:grid-cols-3 gap-2 md:gap-6'>
                        <select  className="select select-bordered w-full">
                            <option disabled selected>Select Division</option>
                            
                        </select>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select State</option>
                            <option>Dhaka</option>
                            <option>Narayanganj</option>
                            <option>Gazipur</option>
                            <option>Narshingdi</option>
                            <option>Rajbari</option>
                        </select>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Area</option>
                            <option>Rampura</option>
                            <option>Tejgaon</option>
                            <option>Badda</option>
                            <option>Gulistan</option>
                            <option>Mohammadpur</option>
                        </select>
                    </div>


                    <h2 className='text-xl font-bold my-4'>Select Product Category</h2>
                    <div className='grid md:grid-cols-3 gap-2 md:gap-6'>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Division</option>
                            <option>Mobile</option>
                            <option>Mobiles</option>
                            <option>Electronics</option>
                            <option>Vehicles</option>
                            <option>Pets & Animals</option>
                            <option>Home & Living</option>

                        </select>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Brand</option>
                            <option>Iphone</option>
                            <option>Samsung</option>
                            <option>Nokia</option>
                            <option>HTC</option>
                            <option>Citycell</option>
                        </select>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Area</option>
                            <option>Rampura</option>
                            <option>Tejgaon</option>
                            <option>Badda</option>
                            <option>Gulistan</option>
                            <option>Mohammadpur</option>
                        </select>
                    </div>



                    <h2 className='text-xl font-bold my-4'>Condition</h2>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Select Condition</option>
                        <option>New</option>
                        <option>Used</option>
                    </select>


                    <h2 className='text-xl font-bold my-4'>Product Title</h2>
                    <input type="text" placeholder="Title" className="input input-bordered w-full" />
                    <h2 className='text-xl font-bold my-4'>Product Description</h2>
                    <textarea className="textarea w-full textarea-bordered" placeholder="Description"></textarea>

                    <h2 className='text-xl font-bold my-4'>Price</h2>
                    <input type="text" placeholder="Price" className="input input-bordered w-full" />

                    <h2 className='text-xl font-bold my-4'>Upload Images (Maximum 5 images)</h2>
                    <input type="file" multiple className="file-input file-input-bordered w-full" />

                    <h2 className='text-xl font-bold my-4'>Mobile Number</h2>
                    <input type="text" placeholder="Mobile Number" className="input input-bordered w-full" />

                    <h2 className='text-xl font-bold my-4'>Additional Link (Optional)</h2>
                    <input type="text" placeholder="Additonal Link" className="input input-bordered w-full" />

                    <div className="my-4">
                        <label className="cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="ms-4 label-text">I have read and accept the Terms and Conditions</span>
                        </label>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="post_ad_modal" className="btn">Cancel</label>
                        <label htmlFor="post_ad_modal" className="btn">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdPostModal;