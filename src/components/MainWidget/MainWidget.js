import React from 'react'
import PropTypes from 'prop-types'
import NewsList from '../NewsList/NewsList'
import SearchForm from '../SearchForm/SearchForm'
import Banner from '../Banner/Banner'
import ServicesList from '../ServicesList/ServicesList'
import "./MainWidget.css"

/** Главный компонет, выводит коспоненты новостей, форму поиска, баннер и список сервисов */
function MainWidget(props) {

    return (
        <div className="MainWidget-container">
            <NewsList />
            <SearchForm />
            <Banner />
            <ServicesList />
        </div>

    )
}

MainWidget.propTypes = {

}

export default MainWidget

