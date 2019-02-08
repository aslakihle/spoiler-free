import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Wikis(props) {
    const bookseries = props.bookseries.map((x) =>
        <Link key={x.id} className="wiki-button" to={'wiki/' + x.id} >{x.title}</Link>
    )
    return (
        <div className="content">
            <h2>All</h2>
            {bookseries}
        </div>
    )
}
Wikis.propTypes = {
    bookseries: PropTypes.array.isRequired,
};


