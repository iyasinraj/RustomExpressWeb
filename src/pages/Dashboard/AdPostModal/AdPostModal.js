import { useContext } from "react";
import LocationOptions from "../../Home/SelectLocation/LocationOptions";
import { AuthContext } from "../../../context/UserContext";

const AdPostModal = () => {
    const {
        divisions,
        districts,
        areas,
        handleChange,
        handleChangeDis,
        handleChangeArea,
    } = useContext(AuthContext)
    return (

        <div>
            <input type="checkbox" id="post_ad_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl">
                    <h2 className='text-center text-2xl font-bold'>Post Your Ad</h2>

                    <h2 className='text-xl font-bold my-4'>Select Your Location</h2>
                    <div className='grid md:grid-cols-3 gap-2 md:gap-6'>

                        <select className="select select-bordered w-full" name="division" onChange={handleChange}>
                            <option disabled selected>Select Division</option>
                            {
                                divisions.map(division => <LocationOptions key={division.id} options={division}></LocationOptions>)
                            }
                        </select>

                        {
                            <select className="select select-bordered w-full" onChange={handleChangeDis} >
                                <option disabled selected>Select State</option>
                                {
                                    districts.map(district => <LocationOptions key={district.id} options={district}></LocationOptions>)
                                }
                            </select>}

                        {
                            <select className="select select-bordered w-full" name="area" onChange={handleChangeArea}>
                                <option disabled selected>Select Area</option>
                                {
                                    areas.map(area => <option key={area.id} value={area.postOffice}>{area.postOffice +" "+ area.postCode}</option>)
                                }
                            </select>}
                    </div>


                    <h2 className='text-xl font-bold my-4'>Select Product Category</h2>
                    <div className='grid md:grid-cols-3 gap-2 md:gap-6'>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Product Category</option>
                            <option>Mobiles</option>
                            <option>Electronics</option>
                            <option>Vehicles</option>
                            <option>Pets & Animals</option>
                            <option>Home & Living</option>
                            <option>Property</option>
                            <option>Women's Fashion & Beauty</option>
                            <option>Men's Fashion & Grooming</option>
                            <option>Hobbies, Sports & Kids</option>
                            <option>Business & Industry</option>
                            <option>Essentials</option>
                            <option>Education</option>
                            <option>Agriculture</option>
                            <option>Jobs</option>
                            <option>Services</option>
                            <option>Overseas Jobs</option>
                        </select>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Select Sub Category</option>
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