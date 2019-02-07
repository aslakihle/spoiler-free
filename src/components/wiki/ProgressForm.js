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
        />

    )
    return (
        <form onSubmit={props.progressSubmit} className="progress-form">
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
    // progressSubmit: PropTypes.func,
    currentBooks: PropTypes.array,
    currentChecked: PropTypes.number,
};
