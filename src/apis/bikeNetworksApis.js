async function getBikeNetworksAsync() {
  try {
    let bikeNetworks = await fetch("http://api.citybik.es/v2/networks");
    return bikeNetworks.json();
  } catch (error) {
    // handle and log error
  }
}
