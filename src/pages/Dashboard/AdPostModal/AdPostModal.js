import { useContext, useState } from "react";
import LocationOptions from "../../Home/SelectLocation/LocationOptions";
import { AuthContext } from "../../../context/UserContext";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";

const AdPostModal = () => {
    const {
        localUrl,
        divisions,
        selectedDivision,
        districts,
        areas,
        user,
        dbUser,
        handleChange,
        handleChangeDis,
        handleChangeArea,
        categories,
        subCategories,
        setSubCategories,
        setCategoryId,
    } = useContext(AuthContext)
    const imageApiKey = process.env.REACT_APP_imageApiKey
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const [agree, setAgree] = useState(false)
    const handleAgree = () => {
        setAgree(!agree)
    }

    const subCatChange = async (e) => {
        const value = await e.target.value
        // const name = await value.split(",")[0]
        const id = await parseInt(value.split(",")[1])
        setCategoryId(id)
        const subcat = await categories.filter(category => category.id === id)
        await setSubCategories(subcat[0].subCategories)
    }
    // image limit validation maximum 10 images
    const validateImages = (files) => {
        if (files.length > 10) {
            return 'Image is required and a maximum of 10 images are allowed.';
        }
        return true;
    }
    const handlePostAd = async (data) => {
        toast('wait few moments')

        try {

            const imageUrls = []; // Array to store image URLs

            // Loop through each image in the images array
            for (const image of data.images) {
                // Create a FormData instance and append the current image to it
                const formData = new FormData();
                formData.append('image', image);

                // Construct the URL with the API key
                const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

                // Make the POST request using fetch
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Image upload failed');
                }

                const imgData = await response.json();
                imageUrls.push(imgData.data.display_url);
                // Save the image URL this for low quality image(display_url) this for original size(url)
            }

            const title = data.title
            const description = data.description
            const price = data.price
            const condition = data.condition
            const link = data.link
            const images = imageUrls
            const division = selectedDivision
            const state = data.state.split(",")[0]
            const area = data.area
            const category = data.category.split(",")[0]
            const subCategory = data.subCategory
            const model = data.model
            const name = dbUser ? dbUser.name : user.displayName
            const email = user.email
            const number = data.number
            postAd(title, description, price, condition, link, images, division, state, area, category, subCategory, model, name, email, number)
        } catch (error) {
            console.error('Error uploading images:', error);
        }

    }
    const postAd = (title, description, price, condition, link, images, division, state, area, category, subCategory, model, name, email, number) => {
        const post = {
            title: title,
            description: description,
            price: price,
            condition: condition,
            postStatus: "available",
            additionalLink: link,
            images: images,
            location: [
                { division: division },
                { state: state },
                { area: area }
            ],
            category: [
                { category: category },
                { subCategory: subCategory },
                { model: model }
            ],
            author: [
                { name: name },
                { email: email },
                { mobile: number },

            ],
            createdAt: Date.now()
        }
        fetch(`${localUrl}/ads`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // close modal
                    const modalCheckbox = document.getElementById('post_ad_modal');
                    if (modalCheckbox) {
                        modalCheckbox.checked = false;
                    }
                    reset()
                    toast.success('Post Successfull')
                }
            })
    }

    return (

        <div>
            <input type="checkbox" id="post_ad_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl">
                    <h2 className='text-center text-2xl font-bold'>Post Your Ad</h2>

                    <form id="adsForm" onSubmit={handleSubmit(handlePostAd)}>

                        <h2 className='text-xl font-bold my-4'>Select Your Location</h2>
                        <div className='grid md:grid-cols-3 gap-2 md:gap-6'>

                            <select className="select select-bordered w-full" {...register("division", { required: true })} onChange={handleChange}>
                                <option disabled selected>Select Division</option>
                                {
                                    divisions.map(division => <LocationOptions key={division.id} options={division}></LocationOptions>)
                                }
                            </select>
                            {errors.division?.type === 'required' && <p role="alert">Division is required</p>}


                            <select {...register("state", { required: true })} className="select select-bordered w-full" onChange={handleChangeDis} >
                                <option disabled selected>Select State</option>
                                {
                                    districts.map(district => <LocationOptions key={district.id} options={district}></LocationOptions>)
                                }
                            </select>


                            <select {...register("area", { required: true })} className="select select-bordered w-full" name="area" onChange={handleChangeArea}>
                                <option disabled selected>Select Area</option>
                                {
                                    areas.map(area => <option key={area.id} value={area.postOffice}>{area.postOffice + " " + area.postCode}</option>)
                                }
                            </select>
                        </div>


                        <h2 className='text-xl font-bold my-4'>Select Product Category</h2>
                        <div className='grid md:grid-cols-3 gap-2 md:gap-6'>
                            <select {...register("category", { required: true })} className="select select-bordered w-full" onChange={subCatChange}>
                                <option disabled selected >Select Product Category</option>

                                {
                                    categories.map(category => <option key={category.id} value={[category.name, category.id]}>{category.name}</option>)
                                }
                            </select>
                            <select {...register("subCategory", { required: true })} className="select select-bordered w-full">
                                <option disabled selected >Select Sub Category</option>

                                {
                                    subCategories.map((subCategory, i) => <option key={i} value={subCategory.name}>{subCategory.name}</option>)
                                }
                            </select>
                            <input {...register("model")} placeholder="Model No. or Serial No." className="input input-bordered w-full" />
                        </div>

                        <h2 className='text-xl font-bold my-4'>Condition</h2>
                        <select {...register("condition", { required: true })} className="select select-bordered w-full">
                            <option disabled>Select Condition</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>


                        <h2 className='text-xl font-bold my-4'>Product Title</h2>
                        <input type="text" {...register("title", { required: true })} placeholder="Title" className="input input-bordered w-full" />
                        {errors.title?.type === 'required' && <p className="text-red-600" role="alert">title is required</p>}

                        <h2 className='text-xl font-bold my-4'>Product Description</h2>
                        <textarea {...register("description", { required: true })} className="textarea w-full textarea-bordered" placeholder="Description"></textarea>
                        {errors.description?.type === 'required' && <p className="text-red-600" role="alert">Description is required</p>}

                        <h2 className='text-xl font-bold my-4'>Price</h2>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        {errors.price?.type === 'required' && <p className="text-red-600" role="alert">Price is required</p>}

                        <h2 className='text-xl font-bold my-4'>Upload Images (Maximum 10 images)</h2>
                        <input type="file"
                            {...register("images", { required: true, validate: validateImages })}
                            multiple className="file-input file-input-bordered w-full" />
                        {errors.images && <p className="text-red-600">{errors.images.message}</p>}

                        <h2 className='text-xl font-bold my-4'>Mobile Number</h2>
                        <input type="number" {...register("number", { required: true })} defaultValue={dbUser?.mobile} placeholder="Mobile Number" className="input input-bordered w-full" />
                        {errors.number && <p className="text-red-600" role="alert">Number is required</p>}

                        <h2 className='text-xl font-bold my-4'>Additional Link (Optional)</h2>
                        <input type="url" placeholder="https://example.com" pattern="https://.*" {...register("link")} className="input input-bordered w-full" />

                        <div className="my-4">
                            <label className="cursor-pointer">
                                <input type="checkbox" onClick={handleAgree} className="checkbox" />
                                <span className="ms-4 label-text">I have read and accept the <Link className="text-blue-600 font-bold">Terms</Link> and <Link className="text-blue-600 font-bold">Conditions</Link></span>
                            </label>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="post_ad_modal" className="btn">Cancel</label>
                            <button type="submit" disabled={!agree} className="btn" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AdPostModal;