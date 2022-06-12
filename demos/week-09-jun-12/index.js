const appid = '7e3f21edee540e6110af347b55eb1ab2';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather( city ) {
    fetch( `${baseUrl}?q=${city}&appid=${appid}&units=metric` )
        .then( response => console.log( response ) )
        .catch( error => console.log( error.message ) );
}

getWeather( 'Bangalore' );