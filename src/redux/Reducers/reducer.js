import { GET_WEATHER_SUCCESS } from "../Actions/actions";

const initialState = {
    weather: [] 
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_SUCCESS:
            return { ...state, weather: action.weather }
        default:
            return state
    }
};
export default weatherReducer;