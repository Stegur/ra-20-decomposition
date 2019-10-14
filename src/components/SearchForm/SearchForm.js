import React from 'react'
import PropTypes from 'prop-types'
import DirectionItem from './DirectionItem/DirectionItem';
import nanoid from 'nanoid'
import './SearchForm.css'

/** Данный компонент выводит навигацию по разделам и форму поиска */
function SearchForm(props) {

    const handlerSubmit = (event) => {
        event.preventDefault();
    }

    const categories = [
        { name: 'Видео' },
        { name: 'Картинки' },
        { name: 'Новости' },
        { name: 'Карты' },
        { name: 'Маркет' },
        { name: 'Переводчик' },
        { name: 'Эфир' },
        { name: 'ещё' },
    ]

    for (let i = 0; i < categories.length; i++) {
        categories[i].id = nanoid(3);
    }

    return (
        <div className="SearchForm-wrapper">

            <ul className="SearchForm-direction-list">
                {categories.map(category => 
                    <DirectionItem id={category.id}>
                        <a href="#" className="SearchForm-direction-link">{category.name}</a>
                    </ DirectionItem >
                )}
            </ul>

            <form className="SearchForm" onSubmit={handlerSubmit}>
                <img src="https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg" alt="Logo" className="SearchForm-logo" />
                <input type="search" id="search" className="SearchForm-search" />
                <button type="submit" className="SearchForm-search__btn">Найти</button>
                <label htmlFor="search" className="SearchForm-search__lable">Найдется все.</label>
            </form>

        </div>
    )
}

SearchForm.propTypes = {

}

export default SearchForm

