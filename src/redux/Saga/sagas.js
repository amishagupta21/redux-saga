import { call, put, takeEvery } from "redux-saga/effects";
import { GET_WEATHER_FETCH, GET_WEATHER_SUCCESS } from "../Actions/actions"


function weatherFetch() {
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m").then(response => response.json())
}

function* workGetWeatherFetch() {
    const weather = yield call(weatherFetch);
    yield put({ type: GET_WEATHER_SUCCESS, weather })
}

function* mySaga() {
    yield takeEvery(GET_WEATHER_FETCH, workGetWeatherFetch);
}
export default mySaga;