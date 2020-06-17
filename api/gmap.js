import axios from 'axios'
import {gkey} from './gkey';

const gmapServer = axios.create({
    baseURL:'http://maps.googleapis.com/'

})


export const getMap = async (callback) => {
    const response = await gmapServer.get(
        `maps/api/place/textsearch/json?query=speech+pathologists&key=${gkey}`
    ); 
    callback(response)
};