const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

import showDrinks from './src/presentDrinks.js'
import './src/searchForm.js'

window.addEventListener('DOMContentLoaded',()=>{
    showDrinks(URL)

});