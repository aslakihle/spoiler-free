import React from 'react'
import PropTypes from 'prop-types';

export default function ProgressRadio(props) {
    return (
        <li>
            <input type="radio" id={props.book.number} name="book" className="book" value={'book' + props.book.number} onChange={props.progressChange} />
            <label onMouseEnter={props.progressMouseEnter} onMouseLeave={props.progressMouseLeave} htmlFor={props.book.number} id={props.book.number} className={'progress-label progress-not-checked book' + props.book.number} >{props.book.title}</label>
        </li>


    )
}

ProgressRadio.propTypes = {
    bookseries: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    progressChange: PropTypes.func,
    progressMouseEnter: PropTypes.func,
    progressMouseLeave: PropTypes.func,
    currentChecked: PropTypes.number,
};
