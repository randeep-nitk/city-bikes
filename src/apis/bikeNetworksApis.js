async function getBikeNetworksAsync() {
  try {
    let bikeNetworks = await fetch("http://api.citybik.es/v2/networks");
    return bikeNetworks.json();
  } catch (error) {
    // handle and log error
  }
}

export async function getDistinctCountries() {
  let bikeNetworks = await getBikeNetworksAsync();
  let countries = [];

  bikeNetworks.networks.forEach(network => {
    let countryIndex = countries.filter(
      c => c.code === network.location.country
    );
    if (countryIndex.length === 0) {
      let country = {};
      country.code = network.location.country;

      let city = {};
      city.name = network.location.city;
      city.networks = [];
      city.networks.push(network);

      if (country.cities === undefined) {
        country.cities = [];
      }

      country.cities.push(city);
      countries.push(country);
    } else {
      if (countryIndex[0].cities === undefined) {
        let city = {};
        city.name = network.location.city;
        city.networks = [];
        city.networks.push(network);

        countryIndex[0].cities.push(city);
      } else {
        let filteredCity = countryIndex[0].cities.filter(
          city => city.name === network.location.city
        );
        if (filteredCity.length === 0) {
          let city = {};
          city.name = network.location.city;
          city.networks = [];
          city.networks.push(network);

          countryIndex[0].cities.push(city);
        } else {
          if (filteredCity[0].networks === undefined) {
            filteredCity[0].networks = [];
          }
          filteredCity[0].networks.push(network);
        }
      }
    }
  });

  return countries;
}
