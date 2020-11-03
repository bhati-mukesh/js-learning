import {showLoading} from './toggleLoading.js'


const fetchDrinks = async (url) => {
    showLoading();
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchDrinks;