import Axios from "axios";

export function updateCity(city) {
  return {
    type: 'UPDATE_CITY',
    payload: { city }
  }
}

export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    payload: Axios.get(`/search/${city}`)
  }
}
