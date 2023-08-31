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
    
    // categories 
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState()
    const [subCategories, setSubCategories] = useState([])

    const localUrl = "http://localhost:5000"

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



    // categories
    useEffect(() => {
        fetch(`${localUrl}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    //---------------------------------//
    // user registration with firebase //
    //--------------------------------//
    const [user, setUser] = useState(null)
    const [dbUser, setDbUser] = useState([])
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

    //--------------------//
    // for user observer //
    //------------------//
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])


    // user info from database 
    useEffect(() => {
        const fetchData = async () => {
            const url = (`${localUrl}/user?email=${user.email}`)
            const response = await fetch(url)
            const json = await response.json()
                .catch(error => console.log(error))
            setDbUser(json[0])
        }
        if (user) {
            return fetchData()
        }
    }, [user])


    // -------------------------------------------//
    // post ads function on Dashboard/AdPostModal//
    //------------------------------------------//

    //---------------//
    // get all post //
    //-------------//

    
    const [ads, setAds] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryName, setCategoryName] = useState('')

    const fetchData = async (page = 1) => {
        try {
            const queryParams = new URLSearchParams({
                sortBy: 'createdAt',
                sortOrder: 'desc',
                limit: 10,
                page: page,
            });

            const response = await fetch(`${localUrl}/ads?${queryParams}`);
            const data = await response.json();
            setAds(data.items); // Set the data to ads instead of items
            setTotalPages(data.totalPages);
            setCurrentPage(page);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);








    const authInfo = {
        ads,
        setAds,
        fetchData,
        currentPage,
        totalPages,
        localUrl,
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
        categories, subCategories, setSubCategories,
        categoryId, setCategoryId,
        categoryName, setCategoryName,
        createUser,
        updateUser,
        userLogin,
        googlePopUpLogin,
        user,
        dbUser,
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