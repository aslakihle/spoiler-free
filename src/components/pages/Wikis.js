import React from 'react'
import { Link } from 'react-router-dom';

export default function Wikis(props) {
    const bookseries = props.bookseries.map((x) =>

        <Link key={x.id} className="wiki-button" to={'wiki/' + x.id} >{x.title}</Link>

    )
    return (
        <div className="content">
            <h2>All Wikis</h2>
            {bookseries}
        </div>
    )
}

