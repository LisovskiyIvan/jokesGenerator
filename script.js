const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('text');
btnEl.addEventListener('click', getJoke);

const apiKey = 'bcCXAafaaVY+jb94CCxHog==GfI9vDTO8hdnDMxw';
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },

}
const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1';

async function getJoke() {
    try {
        jokeEl.innerText = 'Падажжи...';
        btnEl.disabled = true;
        btnEl.innerText = 'Загрузка';
        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeEl.innerText = data[0].joke;

        btnEl.disabled = false;
        btnEl.innerText = 'Получить анекдот';
    } catch (error) {
        console.log('ERROR');
    }

}