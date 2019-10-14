import React from 'react'
import PropTypes from 'prop-types'
import CurrencyItem from './CurrencyItem'
import './CurrencyList.css'

/** Данный компонент выводит списки валют, пепередавая им параметры */
function CurrencyList(props) {

    return (
        <ul className="CurrencyList">
            <CurrencyItem >
                <strong>USD MOEX 62.52</strong>
            </ CurrencyItem >
            <CurrencyItem >
                <strong>EUR MOEX 70.86</strong>
            </ CurrencyItem >
            <CurrencyItem >
                <strong>НЕФТЬ 64.90</strong>
            </ CurrencyItem >
        </ul>

    )
}

CurrencyList.propTypes = {

}

export default CurrencyList

