const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const url = 'https://icanhazdadjoke.com'

btn.addEventListener('click', ()=>{
    showJoke()
})


const showJoke = async ()=>{
try {
    result.textContent = 'Loading...'
    const response = await fetch(url,{
        headers: {
            Accept:'application/json',
            'User-Agent':'learning pp',
        },
    });
    if(!response.ok){
    throw new Error('ERROR')
    } 
    const data = await response.json();
    result.textContent = data.joke

} catch (error) {
    result.textContent = 'There was an error..'
}
}
