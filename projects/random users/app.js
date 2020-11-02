import getElement from '/utils/getElement.js'
import getUser from './utils/fetchUser.js'
import displayUser from './utils/displayUser.js'
const btn = getElement('.btn');


const showUser = async () => {
    const user = await getUser()
    console.log(user)
    displayUser(user)
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)