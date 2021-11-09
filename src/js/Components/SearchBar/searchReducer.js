const defaultState = {
  city: '',
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
    
    default: {
      return state;
    }
  }
}