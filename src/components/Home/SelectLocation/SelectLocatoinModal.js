import { useEffect, useState } from "react";
import LocationOptions from "./LocationOptions";

const SelectLocatoinModal = () => {
    const [location, setLocatoin] = useState('Location')
    const [divisions, setDivisions] = useState([])
    const [divisionId, setDivisionId] = useState()
    const [selectedDivision, setSelectedDivision] = useState()
    const [districts, setDistricts] = useState([])
    const [districtId, setDistrictId] = useState()
    const [areas, setAreas] = useState([])
    const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>


    // division selection part
    useEffect(() => {
        const url = ('http://192.168.0.105:5000/bd')

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setDivisions(json[0].divisions)
        }
        fetchData()
    }, [])
    const handleChange = (e) => {
        const value = e.target.value
        const name = value.split(",")[0]
        const id = value.split(",")[1]
        setDivisionId(id)
        setSelectedDivision(name)
        setLocatoin(name)
    }


    // district selection part
    useEffect(() => {
        const url = (`http://192.168.0.105:5000/bd/${divisionId}`)

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setDistricts(json)
        }
        fetchData()
    }, [divisionId])

    const handleChangeDis = (e) => {
        const value = e.target.value
        const name = value.split(",")[0]
        const id = value.split(",")[1]
        setLocatoin(name)
        setDistrictId(id)
    }


    // area selection part
    useEffect(() => {
        const url = (`http://192.168.0.105:5000/bd/${selectedDivision}/${districtId}`)

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setAreas(json)
        }
        fetchData()
    }, [districtId, selectedDivision])

    const handleChangeArea = (e) => {
        const value = e.target.value
        setLocatoin(value)
    }



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