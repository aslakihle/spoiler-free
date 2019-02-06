import React from 'react'
import ProgressRadio from './ProgressRadio';

export default function ProgressForm(props) {
    const radios = props.currentBooks.map((book) =>

        <ProgressRadio
            key={book.id}
            book={book}
            bookseries={props.bookseries}
            currentWiki={props.currentWiki}
            progressChange={props.progressChange}
            getCurrentChecked={props.getCurrentChecked}
        />

    )
    return (
        <form onSubmit={props.progressSubmit} className="progress-form">
            <ul className="progress-ul">
                {radios}
            </ul>
            <input type="submit" value="Save progress" />
        </form>
    )
}
