import React from 'react'
import PropTypes from 'prop-types'
import Weather from './Weather/Weather'
import PopularList from './PopularList/PopularList'
import Maps from './Maps/Maps'
import TVProgramList from './TVProgramList/TVProgramList'
import StreamsList from './StreamsList/StreamsList'
import './ServicesList.css'

/** Данный компонент выводит список сервисов */
function ServicesList(props) {

    return (
        <div className="ServicesList-wrapper">
            <div className="ServicesList-column">
                <Weather />
                <PopularList />
            </div>
            <div className="ServicesList-column">
                <Maps />
                <TVProgramList />
            </div>
            <div className="ServicesList-column">
                <StreamsList />
            </div>
        </div>
    )
}

ServicesList.propTypes = {

}

export default ServicesList

