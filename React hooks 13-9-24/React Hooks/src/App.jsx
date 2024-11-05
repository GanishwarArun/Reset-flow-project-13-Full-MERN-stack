// import React from 'react'

import { useEffect, useState } from "react";
import CountryItem from "./Compontents/CountryItem";

const App = () => {
  const REST_COUNTRIES_API_URL = " https://restcountries.com/v3.1/all";
  const [countriesData, setCountriesData] = useState([]);
  //using sync and await
  const getCountriesData = async () => {
    const res = await fetch(REST_COUNTRIES_API_URL);
    const data = await res.json();
    console.log(countries);
    setCountriesData(countries);
  };

}




import Counter from "./Compontents/Counter"

const App = () => {
  return <Counter />
  
}

export default App