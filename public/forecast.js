const key = "qZKrLGe1fHOVcvdDrmeFjJH7xq31lc0i";

const getCity = async (city) => {
  const url = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await axios.get(url + query);
  const data = response.data;

  return data[0];
};

const getWeather = async (id) => {
  const url = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await axios.get(url + query);
  const data = response.data;

  return data[0];
};
