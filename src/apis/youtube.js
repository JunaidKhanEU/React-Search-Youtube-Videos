import axios from 'axios';
const KEY = 'AIzaSyAF4nx7XAZE21ThK9Fb9a0bNQeDvNIJ0vQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',

    params:{
        part:'snippet',
        maxResults:5,
        key:KEY

    }

})
