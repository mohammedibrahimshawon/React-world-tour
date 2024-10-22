import React, { useEffect, useState } from 'react';




const Countries = () => {

    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data));
    },[])


    return (
        <div>
            <h1>Countries</h1>
        </div>
    );
};

export default Countries;