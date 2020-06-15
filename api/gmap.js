import axios from 'axios'
import {gkey} from './gkey';

const gmapServer = axios.create({
    baseURL:'http://maps.googleapis.com/maps/'

})

/*
export const getWeather = async (item, callback) => {
    const response = await WeatherServer.get(
        `?lat=${item.lat}&lon=${item.lon}&appid=${WKey}&units=imperial`
    ); 
    callback(response.data)
};*/