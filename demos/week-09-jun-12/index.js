const appid = '7e3f21edee540e6110af347b55eb1ab2';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather( city ) {
    fetch( `${baseUrl}?q=${city}&appid=${appid}&units=metric` )
        .then( response => {
            console.log( response );

            // throw error is server returns 4xx response
            if( !response.ok ) {
                throw new Error( response.statusText );
            }

            return response.json();
        })
        .then( data => {
            console.log( data );

            // display weather data
        })
        .catch( error => console.log( error.message ) );
}

getWeather( 'Bangalore' );