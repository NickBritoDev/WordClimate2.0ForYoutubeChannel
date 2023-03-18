const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const searchInput = document.querySelector('.search-box input')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

const image = document.querySelector('.weather-box img')
const temperature = document.querySelector('.weather-box .temperature')
const description = document.querySelector('.weather-box .description')
const humidity = document.querySelector('.weather-details .humidity span')
const wind = document.querySelector('.weather-details .wind span')

search.addEventListener('click', async () => {
    apiRequestExecutor()
    searchInput.value = ''
})

searchInput.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        apiRequestExecutor()
        searchInput.value = ''
    }
})

async function apiRequestExecutor() {
    const apiKey = '31c84243a77727cf5ea54e93b100b3fb'
    const city = searchInput.value
    const urlFetchApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    const res = await fetch(urlFetchApi)
    const data = await res.json()

    if (city === '')
        return

    fetch(`${urlFetchApi}`).then(response => response.json()).then(json => {
        if (json.cod === '404') {
            container.style.height = '600px'
            weatherBox.style.display = 'none'
            weatherDetails.style.display = 'none'
            error404.style.display = 'block'
            error404.classList.add('fade-in')
            return
        }
        error404.style.display = 'none'
        error404.classList.remove('fade-in')

        temperature.innerHTML = `${parseInt(data.main.temp)}<span>ºC</span>`
        description.innerHTML = `${data.weather[0].description}`
        humidity.innerHTML = `${data.main.humidity}%`
        wind.innerHTML = `${parseInt(data.wind.speed)}KM/H`

        weatherBox.style.display = ''
        weatherDetails.style.display = ''
        weatherBox.classList.add('fade-in')
        weatherDetails.classList.add('fade-in')
        image.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        container.style.height = '600px'


    })
}
