import React from "react";
import CityView from "./cityView";

function CountryView(props) {
  return (
    <>
      <h1>{props.country.code}</h1>
      {props.country.cities !== undefined &&
        props.country.cities.map(city => {
          return <CityView key={city.name} city={city}></CityView>;
        })}
    </>
  );
}

export default CountryView;
