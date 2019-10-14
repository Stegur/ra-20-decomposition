import React from 'react'
import PropTypes from 'prop-types'
import './NewsItem.css'

/** Данный компонент выводит заголовок новости и лого ресурса */
function NewsItem(props) {
    return (
        <li className="NewsItem">
            {props.children}
        </li>
    )
}

NewsItem.propTypes = {

}

export default NewsItem

