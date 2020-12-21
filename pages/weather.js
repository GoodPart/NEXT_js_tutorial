import axios from 'axios'

const APIKey = '9f29bfeff669ca53c38be5f0d9acbca5';
const cityName = 'Seoul';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`


function getWeatherDATA({ props }) {
return (
    <div>
    {props}
    </div>
)
}


export async function getServerSideProps() {
    const res = await axios.get(url);
    const data = await res.data;


    console.log(`Show data fetched. Count: ${res}`)

    return {
        props: {
            data
        }
    }
}

export default getWeatherDATA;