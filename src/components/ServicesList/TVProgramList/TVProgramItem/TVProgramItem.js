import React from 'react'
import PropTypes from 'prop-types'
import './TVProgramItem.css'

/** Компонент выводит Телепрограму: время, передачу и канал */
function TVProgramItem(props) {
    return (
        <li className="TVProgramItem">
            {props.children}
        </li>
    )
}

TVProgramItem.propTypes = {

}

export default TVProgramItem

