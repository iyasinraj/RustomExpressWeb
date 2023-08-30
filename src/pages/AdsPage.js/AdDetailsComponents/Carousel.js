import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ModalImage from 'react-modal-image';


const Carousel = ({ images }) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const settings = {
        // Configure your carousel settings here
        dots: true,
        arrows: false,
    };

    const openLightbox = async (index) => {
        setLightboxIndex(index);
        const dialog = document.getElementById('my_modal_3');
        if (dialog) {
            await dialog.showModal();
        }
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    return (
        <div>
            <div >
                <Slider {...settings} className=''>
                    {images.map((link, index) => (
                        <div key={index} onClick={() => openLightbox(index)}>
                            <img className='h-[350px] w-full' src={link} alt={`carousalImage ${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>

            {lightboxIndex !== null && (
                <div>{/* You can open the modal using ID.showModal() method */}
                    {/* <button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button> */}
                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box w-screen h-fit">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <ModalImage
                                hideDownload={true}
                                hideZoom={true}
                                small={images[lightboxIndex]}
                                large={images[lightboxIndex]}
                                alt={`Image ${lightboxIndex}`}
                                onClose={closeLightbox}
                            />
                        </form>
                    </dialog>
                </div>
            )}
        </div>
    );
};

export default Carousel;