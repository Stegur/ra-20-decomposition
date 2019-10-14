import React from 'react'
import PropTypes from 'prop-types'
import StreamItem from './StreamItem/StreamItem'
import './StreamsList.css'

/** Компонент выводит список доступных прямых эфиров */
function StreamsList(props) {

    return (
        <div className="StreamsList">
            <h4 className="StreamsList-title">Эфир</h4>
            <ul className="StreamsList-list">
                <StreamItem >
                    <span>Управление как искусство</span><span>Успех</span>
                </StreamItem >
                <StreamItem >
                    <span>Ночь. Мир в это время</span><span>earthTV</span>
                </StreamItem >
                <StreamItem >
                    <span>Андрей Возн...</span><span>Совершенно секретно</span>
                </StreamItem >
            </ul>
        </div>
    )
}

StreamsList.propTypes = {

}

export default StreamsList

