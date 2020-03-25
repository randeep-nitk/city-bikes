import React from "react";

function CountryFlag(props) {
  return (
    <div>
      <img
        src={`https://www.countryflags.io/${props.country.code}/shiny/64.png`}
        alt="logo"
        onClick={() => props.selectCountry(props.country)}
      />
    </div>
  );
}

export default CountryFlag;
