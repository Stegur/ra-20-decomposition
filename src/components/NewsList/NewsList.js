import React from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem/NewsItem'
import CurrencyList from '../NewsList/CurrencyList/CurrencyList'
import './NewsList.css'

/** Данный компонент выводит списки новостей и курсов валют*/
function NewsList(props) {

    return (
        <div className="NewsList-container">
            <p className="NewsList-title"><a href="#" className="NewsList-title-link">Сейчас в СМИ</a></p>
            <ul className="NewsList">
                <NewsItem >
                    <img className="NewsItem-img" src="https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square" alt="" />
                    <p className="NewsItem-text">
                        <a href="#" className="NewsItem-link">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a>
                    </p>
                </NewsItem >
                <NewsItem >
                    <img className="NewsItem-img" src="https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square" alt="" />
                    <p className="NewsItem-text">
                        <a href="#" className="NewsItem-link">Doloremque voluptates nulla perferendis, voluptatum illum animi.</a>
                    </p>
                </NewsItem >
                <NewsItem >
                    <img className="NewsItem-img" src="https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square" alt="" />
                    <p className="NewsItem-text">
                        <a href="#" className="NewsItem-link">Necessitatibus doloremque adipisci placeat iusto recusandae earum, ea non quo culpa.</a>
                    </p>
                </NewsItem >
                <NewsItem >
                    <img className="NewsItem-img" src="https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square" alt="" />
                    <p className="NewsItem-text">
                        <a href="#" className="NewsItem-link">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a>
                    </p>
                </NewsItem >
                <NewsItem >
                    <img className="NewsItem-img" src="https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square" alt="" />
                    <p className="NewsItem-text">
                        <a href="#" className="NewsItem-link">Doloremque voluptates nulla perferendis, voluptatum illum animi.</a>
                    </p>
                </NewsItem >

            </ul>

            <CurrencyList />
        </div>
    )
}

NewsList.propTypes = {

}

export default NewsList

