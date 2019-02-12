import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBook } from '@fortawesome/free-solid-svg-icons'


export default function Wikis(props) {
    const bookseries = props.bookseries.map((bookserie) =>
        <Link key={'wikis-card' + bookserie.id} className="wikis-card" to={'wiki/' + bookserie.id}>
            <h2>{bookserie.title}</h2>
            <p>{bookserie.description}</p>
            <h3>{bookserie.author}</h3>
            <h4><FontAwesomeIcon className="wikis-book-icon" icon="book" /> {bookserie.books}</h4>
        </Link>
    )
    return (
        <div className="content">
            <h1> Select book series</h1>
            <div className="all-wikis-wrapper">
                {bookseries}
            </div>
        </div>
    )
}
Wikis.propTypes = {
    bookseries: PropTypes.array.isRequired,
};


