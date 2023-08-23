import { useContext } from "react";
import LocationOptions from "./LocationOptions";
import { AuthContext } from "../../../context/UserContext";

const SelectLocatoinModal = () => {

const {
    location,
    divisions,
    divisionId,
    districts,
    districtId,
    areas,
    handleChange,
    handleChangeDis,
    handleChangeArea,
    locationIcon
    } = useContext(AuthContext)

    return (
        <div className='text-center'>
            <label htmlFor="location_modal" className="text-2xl font-semibold hover:font-bold flex items-center justify-center">{locationIcon} <span>{location}</span></label>

            <div>
                <input type="checkbox" id="location_modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-full">
                        
                    <div className="my-20">
                            <h4 className="text-2xl font-bold flex items-center justify-center">{locationIcon} <span>{location}</span></h4>
                        </div>

                        <form className={`grid ${divisionId? 'md:grid-cols-2': 'md:grid-cols-1'} ${districtId && 'md:grid-cols-3'} sm:grid-cols-1 gap-2`}>

                            <select className="select select-bordered mx-w-full" name="division" onChange={handleChange}>
                                <option disabled selected>Select Division</option>
                                {
                                    divisions.map(division => <LocationOptions key={division.id} options={division}></LocationOptions>)
                                }
                            </select>

                            {divisionId &&
                            <select className="select select-bordered mx-w-full" onChange={handleChangeDis} >
                                <option disabled selected>Select State</option>
                                {
                                    districts.map(district => <LocationOptions key={district.id} options={district}></LocationOptions>)
                                }
                            </select>}

                            {districtId &&
                            <select className="select select-bordered mx-w-full" name="area" onChange={handleChangeArea}>
                                <option disabled selected>Select Area</option>
                                {
                                    areas.map(area => <option key={area.id} value={area.postOffice}>{area.postOffice +  + area.postCode}</option>)
                                }
                            </select>}

                        </form>
                        
                        <div className="modal-action">
                            <label htmlFor="location_modal" className="btn">Done</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectLocatoinModal;