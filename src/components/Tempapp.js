import React, {useEffect, useState} from 'react'
import './css/style.css';

const Tempapp = () => {
    // use state is a Hook function that allows you to have state  variables in functional components.You pass the initial state
    // to this function,and it returns a variable with the current state value(not necessary the initial state) and another function to update this value
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");
    
    //By using useEffect() Hook ,you tell React that your components needs to do something after render.React will remember the
    //  function you passed (we will refer to it as our "effect"),and call it later after performing the DOM updateds
    useEffect( () =>{
        const fetchApi = async () => {
            const url= `http://api.openweathermap.org/data/2.5/weather?q= ${search}&units=metric&appid=511e3223526a09e9ad93efd77afb6e65`
            const response=await fetch(url);
            const resJson =await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
        {/* Box is for outside the whole box */}
            <div className='box'>
                <div className='inputData'>
                {/* input data is for taking input from users of different city */}
                    <input type='search' className='inputField' value={search}
                    // on change is a handler ,whenever you search it will get it
                        onChange={ (event) => {
                            setSearch(event.target.value);
                        } }
                    />
                </div>

                        {/* use ternary operator,not operator */}
                {!city ? (
                    <p className='errorMsg'>No Such City Found</p>
                ):(
                    <div>
                    <div className='info'>
                <h2 className='location'>
                <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className='temp'>
                      {city.temp}°Cel
                </h1>
                <br/>
                <br/>
                <h3 className='Humidity'>humidity:{city.humidity}</h3>
                <h3 className='tempmin_max'>Min:{city.temp_min}°Cel || Max:{city.temp_max}°Cel</h3>
            </div>

            {/* for wave */}
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Tempapp;