const url = 'https://api.chucknorris.io/jokes/random'
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img')
console.log(img)

btn.addEventListener('click', () => {
    getData(url).then((data) => displayData(data) ).catch((error) => console.log(error))
})

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (xhr.status == 200) {
                resolve(xhr.responseText)
            } else {
                reject({
                    status: xhr.status,
                    text: xhr.statusText
                })
            }
        }
        xhr.send()
    })
}

function displayData(data) {
    img.classList.add('shake-img')
    const { value: joke } = JSON.parse(data)
    content.textContent = joke;
    setTimeout(() => {
        img.classList.remove('shake-img')
    }, Math.random() * 1000);
}