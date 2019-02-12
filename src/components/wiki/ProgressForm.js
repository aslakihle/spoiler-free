import React from 'react'
import ProgressRadio from './ProgressRadio';
import PropTypes from 'prop-types';

export default function ProgressForm(props) {
    const radios = props.currentBooks.map((book) =>

        <ProgressRadio
            key={book.id}
            book={book}
            bookseries={props.bookseries}
            currentWiki={props.currentWiki}
            progressChange={props.progressChange}
            progressMouseEnter={props.progressMouseEnter}
            progressMouseLeave={props.progressMouseLeave}

        />

    )
    return (
        <form onSubmit={props.progressSubmit} className="progress-form">
            <h3 className="sidebar-title">Progress</h3>
            <ul className="progress-ul">
                {radios}
            </ul>
            {/* <input type="submit" value="Save progress" /> */}
        </form>
    )
}


ProgressForm.propTypes = {
    bookseries: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    progressChange: PropTypes.func,
    progressMouseEnter: PropTypes.func,
    progressMouseLeave: PropTypes.func,
    currentBooks: PropTypes.array,
    currentChecked: PropTypes.number,
};
