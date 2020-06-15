import axios from 'axios'
import {gkey} from './gkey';

const gmapServer = axios.create({
    baseURL:'http://maps.googleapis.com/'

})


export const getMap = async (item, callback) => {
    const response = await gmapServer.get(
        `maps/api/geocode/json?address=${defaultAddress}&key=${gkey}`
    ); 
    callback(response.data)
};