import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)


const UserContext = ({ children }) => {


    // location area start
    // Location States
    const [location, setLocatoin] = useState('Location')
    const [divisions, setDivisions] = useState([])
    const [divisionId, setDivisionId] = useState()
    const [selectedDivision, setSelectedDivision] = useState()
    const [districts, setDistricts] = useState([])
    const [districtId, setDistrictId] = useState()
    const [areas, setAreas] = useState([])

    const localUrl = "http://192.168.0.105:5000"

    const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>

    // division selection part
    useEffect(() => {
        const url = (`${localUrl}/bd`)

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
        const url = (`${localUrl}/bd/${divisionId}`)

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
        const url = (`${localUrl}/bd/${selectedDivision}/${districtId}`)

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
    // location area end


    // user registration with firebase
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)

    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlePopUpLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // for user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])






    const authInfo = {
        locationIcon,
        location,
        setLocatoin,
        divisions,
        setDivisions,
        divisionId,
        setDivisionId,
        selectedDivision,
        setSelectedDivision,
        districts,
        setDistricts,
        districtId,
        setDistrictId,
        areas,
        setAreas,
        handleChange,
        handleChangeDis,
        handleChangeArea,
        createUser,
        updateUser,
        userLogin,
        googlePopUpLogin,
        user,
        loading,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;