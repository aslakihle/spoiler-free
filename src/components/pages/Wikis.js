import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBook } from '@fortawesome/free-solid-svg-icons'


export default function Wikis(props) {
    const bookseries = props.bookseries.map((x) =>
        <Link key={'wikis-card' + x.id} className="wikis-card" to={'wiki/' + x.id}>
            <h2>{x.title}</h2>
            <p>{x.description}</p>
            <h3>{x.author}</h3>
            <h4><FontAwesomeIcon className="wikis-book-icon" icon="book" /> {x.books}</h4>
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


