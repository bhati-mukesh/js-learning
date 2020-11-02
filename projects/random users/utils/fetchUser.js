const URL = 'https://randomuser.me/api/';

const getUser = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        // destruction
        const person = data.results[0];
        console.log(person)
        const { phone, email, picture: { large: image }, login: { password }, name: { first, last }, dob: { age }, location: { postcode, city } } = person;
        return {
            phone,
            image,
            password,
            age,
            email,
            street: `${postcode} ${city}`,
            name: `${first} ${last}`
        }
    }
    catch (error) {
        console.log(error)
    }
}

export default getUser;