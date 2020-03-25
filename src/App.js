import React, { useState, useEffect } from "react";
import CountryFlag from "./components/countryFlag";
import CountryView from "./components/countryView";
import { getDistinctCountries } from "./apis/bikeNetworksApis";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    async function getCountries() {
      let _countries = await getDistinctCountries();
      setCountries(_countries);
      if (_countries.length > 0) {
        setSelectedCountry(_countries[0]);
      }
    }
    getCountries();
  }, []);

  return (
    <>
      <CountryView country={selectedCountry} />
      {countries.map(country => {
        return (
          <CountryFlag
            key={country.code}
            country={country}
            selectCountry={setSelectedCountry}
          />
        );
      })}
    </>
  );
}

export default App;
