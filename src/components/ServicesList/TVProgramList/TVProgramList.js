import React from 'react'
import PropTypes from 'prop-types'
import TVProgramItem from './TVProgramItem/TVProgramItem'
import './TVProgramList.css'

/** Компонент выводит список телепрограммы */
function TVProgramList(props) {

    return (
        <div className="TVProgramList">
            <h4 className="TVProgramList-title">Телепрограмма</h4>
            <ul className="TVProgramList-list">
                <TVProgramItem>
                    <span>02:00</span><span>THT.Best</span> <span>THT International</span>
                </TVProgramItem >
                <TVProgramItem>
                    <span>02:15</span><span>Джинглики</span> <span>Карусель INT</span>
                </TVProgramItem >
                <TVProgramItem>
                    <span>02:25</span><span>Наедине со всеми</span> <span>Первый</span>
                </TVProgramItem >
            </ul>
        </div>
    )
}

TVProgramList.propTypes = {

}

export default TVProgramList

