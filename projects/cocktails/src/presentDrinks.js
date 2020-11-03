
import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'
import setDrink from './setDrink.js'

const showDrinks = async(url)=>{
    // fetch drinks
    console.log('loading drinks')
    const data = await fetchDrinks(url)
    console.log(data)

    // display drinks
    const section = await displayDrinks(data)
    if(section){
        setDrink(section)
    }
}

export default showDrinks