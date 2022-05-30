import React, { useState, useEffect } from 'react'
import Header from './Header'
import ApiCard from './ApiCard'
import './mainApp.css'

const MainApp = () => {

    const [ApiDat, setApiDat] = useState([])

    const getApiData = async () => {
        const res = await fetch('https://api.github.com/users')
        const NewData = await res.json();
        // console.log(NewData);
        setApiDat(NewData);
    }

    useEffect(() => {
        getApiData();
    }, [])

    return (
        <>
            <div className="mainContainer">
                <Header />

                {ApiDat.map(function getApiinfo(val) {
                    return (
                        <ApiCard 
                         key={val.id}
                         html_url={val.html_url}
                         events_url={val.events_url}
                         avatar_url= {val.avatar_url}/>
                    )
                })}

            </div>
        </>
    )
}

export default MainApp;

// api link 'https://api.github.com/users'