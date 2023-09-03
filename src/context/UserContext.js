import React, { createContext, useCallback, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config'
import { toast } from 'react-hot-toast';

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
    const [selectedState, setSelectedState] = useState()
    const [districtId, setDistrictId] = useState()
    const [areas, setAreas] = useState([])

    // categories 
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState()
    const [subCategories, setSubCategories] = useState([])

    const localUrl = "http://192.168.0.103:5000"

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
        setSelectedState(name)
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
            .then(data => {
                setCategories(data)
            })
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
            setDbUser(json[0])
        }
        if (user) {
            fetchData()
        }
    }, [user])


    // -------------------------------------------//
    // post ads function on Dashboard/AdPostModal//
    //------------------------------------------//

    //---------------//
    // get all post //
    //-------------//
    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }

    const [ads, setAds] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryName, setCategoryName] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [selectedArea, setSelectedArea] = useState('')
    const [search, setSearch] = useState('')
    const [adsLoading, setAdsLoading] = useState(true)
    const fetchData = useCallback(async (page = 1) => {
        setAdsLoading(true)
        try {
            const queryParams = new URLSearchParams({
                sortBy: 'createdAt',
                sortOrder: 'desc',
                limit: 10,
                page: page,
            });
            
            if (subCategory) {
                setCategoryName('')
                queryParams.append('subCategory', subCategory);
            }
            if (categoryName) {
                setSubCategory('')
                queryParams.append('category', categoryName);
            }
            if (selectedDivision) {
                setSelectedState('')
                setSelectedArea('')
                queryParams.append('division', selectedDivision);
            }
            if (selectedState) {
                setSelectedDivision('')
                queryParams.append('state', selectedState);
            }
            if (selectedArea) {
                setSelectedDivision('')
                setSelectedState('')
                queryParams.append('area', selectedArea);

            }
            if (search) {
                setCategoryName('')
                setSubCategory('')
                setSelectedDivision('')
                setSelectedState('')
                setSelectedArea('')
                queryParams.append('search', search);
            }


            const response = await fetch(`${localUrl}/ads?${queryParams}`);
            const data = await response.json();
            setAds(data.items); // Set the data to ads instead of items
            setTotalPages(data.totalPages);
            setCurrentPage(page);
            setAdsLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [localUrl, categoryName, setAds, setTotalPages, setCurrentPage, subCategory, selectedDivision, selectedState, selectedArea, search]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // delete post
    
    const [deleteId, setDeleteId] = useState()
    const [remainingMyAds, setRemainingMyAds] = useState()
    // console.log(deleteId)
    const handleDeletePost = async () => {
        try {
             const res = await fetch(`${localUrl}/ad/${deleteId}` , {
                method: 'DELETE'
             });
             const data = await res.json();
             console.log(deleteId, data)
             if(data.deletedCount > 0){
                const modalCheckbox = document.getElementById('deleteModal');
                    if (modalCheckbox) {
                        modalCheckbox.checked = false;
                    }
                 toast.success('Post Deleted Successfully')
             }
        } catch (error) {
            console.error(error)
        }
    }




    const authInfo = {
        ads,
        setAds,
        deleteId, setDeleteId,
        handleDeletePost,
        remainingMyAds, setRemainingMyAds,
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
        categories,
        subCategories,
        setSubCategories,
        categoryId, setCategoryId,
        categoryName, setCategoryName,
        subCategory, setSubCategory,
        setSearch,
        handleSearch,
        createUser,
        updateUser,
        userLogin,
        googlePopUpLogin,
        user,
        setUser,
        dbUser,
        loading,
        adsLoading,
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