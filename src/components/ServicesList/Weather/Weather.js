import React from 'react'
import PropTypes from 'prop-types'
import './Weather.css'

/** Данный компонент выводит информацию о погоде */
function Weather(props) {
    return (
        <div className="Weather">
            <h4 className="Weather-title" >Погода</h4>
            <div className="Weather-content">
                <img className="Weather-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Antu_weather-showers-scattered.svg/200px-Antu_weather-showers-scattered.svg.png" alt="" />
                <p>+17&#176;</p>
                <p>Утром +17, <br /> Днем +20</p>
            </div>
        </div>
    )
}

Weather.propTypes = {

}

export default Weather

