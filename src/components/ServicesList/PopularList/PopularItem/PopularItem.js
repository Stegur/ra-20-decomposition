import React from 'react'
import PropTypes from 'prop-types'

/** Компонент выводит популярный сервис и информацию о нет */
function PopularItem(props) {
    return (
        <li className="PopularItem">
            {props.children}
        </li>
    )
}

PopularItem.propTypes = {

}

export default PopularItem

