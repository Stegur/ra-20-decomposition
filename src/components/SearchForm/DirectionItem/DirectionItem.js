import React from 'react'
import PropTypes from 'prop-types'
import './DirectionItem.css'

/** Данный компонент выводит ссылки разделов */
function DirectionItem(props) {
    return (
        <li className="DirectionItem" key={props.id}>
            {props.children}
        </li>
    )
}

DirectionItem.propTypes = {
    id: PropTypes.string.isRequired
}

export default DirectionItem

