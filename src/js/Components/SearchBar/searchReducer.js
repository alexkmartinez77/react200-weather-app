const defaultState = {
  city:'',
  cityData: {
    name:'',
    coord: {lon:'', lat: ''},
    main: {temp:'',pressure:'', humidity:'', temp_min:'', temp_max:'', humidity:''},
    wind: {speed:''}
  },
}

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type){
    case 'UPDATE_CITY': {
      return {
        ...state,
        city: payload.city
      }
    }

    case 'GET_WEATHER_PENDING': {
      return {
        ...state,
        pending: true
      }
    }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        cityData: payload.data
      }
    }
    
    default: {
      return state;
    }
  }
}