import React from 'react'
import PropTypes from 'prop-types'
import './Map.css'

/** Компонент выводит карту */
function Maps(props) {
    return (
        <div className="Map">
            <h4 className="Map-title">Карта Германии</h4>
            <p>Расписания</p>
        </div>
    )
}

Maps.propTypes = {

}

export default Maps

