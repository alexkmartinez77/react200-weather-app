export function updateCity(city) {
  return {
    type: 'UPDATE_CITY',
    payload: { city }
  }
}