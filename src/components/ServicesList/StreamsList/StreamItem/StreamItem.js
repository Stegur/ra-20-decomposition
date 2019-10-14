import React from 'react'
import PropTypes from 'prop-types'
import './StreamItem.css'

/** Компонент выводит информацию о прямом эфире: название и его источник */
function StreamItem(props) {
    return (
        <li className="StreamItem">
            {props.children}
        </li>
    )
}

StreamItem.propTypes = {

}

export default StreamItem

