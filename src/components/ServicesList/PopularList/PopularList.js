import React from 'react'
import PropTypes from 'prop-types'
import PopularItem from './PopularItem/PopularItem'
import './Popular.css'

/** Данный компонент выводит список популярных сервисов */
function PopularList(props) {

    return (
        <div className="Popular">
            <h4 className="Popular-title">Посещаемое</h4>
            <ul className="Popular-list">
                <PopularItem >
                    <span><strong>Недвидимость</strong> - о сталинках</span>
                </PopularItem >
                <PopularItem >
                    <span><strong>Маркет</strong> - люстры и светильники</span>
                </PopularItem >
                <PopularItem >
                    <span><strong>Авто.ру</strong> - привод 4х4 до 500 000</span>
                </PopularItem >
            </ul>
        </div>
    )
}

PopularList.propTypes = {

}

export default PopularList

