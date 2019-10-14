import React from 'react'
import PropTypes from 'prop-types'
import './CurrencyItem.css'

/** Данный компонент выводит валюты, параметры принимаются от "родителя" */
function CurrencyItem(props) {
    return (
        <li className="CurrencyItem">
            {props.children}
        </li>
    )
}

CurrencyItem.propTypes = {

}

export default CurrencyItem

