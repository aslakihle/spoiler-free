import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProgressForm from '../wiki/ProgressForm';
import Categories from '../wiki/Categories';
import WikiContent from '../wiki/WikiContent';



class Wiki extends Component {
    state = {
        currentBooks: [],
        currentChecked: 0,
    }

    componentDidMount() {
        this.booksCurrentWiki(this.props.match.params.bookseries_id)
        this.progressChange()
    }


    //Find books for current wiki
    booksCurrentWiki = (current) => {
        let currentBooks = []
        this.props.books.forEach(book => {
            if (book.bookseries_id === parseInt(current)) {
                currentBooks.push(book);
            }
        });
        this.setState({ currentBooks })
    }

    //Starts hover effect for progress input, effect happens on all books up to and including the hovered book
    progressMouseEnter = (e) => {
        const labels = document.querySelectorAll('.progress-ul li:nth-child(-n+' + e.target.id + ') label')
        console.log(labels)
        for (const label of labels) {
            console.log(label)
            label.classList.add('label-hover')
        }
    }
    //Ends hover effect from previous function
    progressMouseLeave = (e) => {
        const labels = document.querySelectorAll('.progress-ul li:nth-child(-n+' + e.target.id + ') label')
        for (const label of labels) {
            console.log(label)
            label.classList.remove('label-hover')
        }
    }

    // run every time the progress radios change, change state and run changeContent() in callback
    progressChange = () => {
        const radios = document.getElementsByClassName('book');
        for (let radio of radios) {
            if (radio.checked) {
                this.setState(state => {
                    state.currentChecked = radio.id;
                }, () => {
                    for (let index = 1; index <= this.props.bookseries[0].books; index++) {
                        let label = document.getElementsByClassName('book' + index)[0]
                        if (index <= this.state.currentChecked) {
                            label.classList.add('progress-checked')
                        }
                        else {
                            label.classList.remove('progress-checked')
                        }
                    }
                    this.changeContent()
                });
            }
        }

    }

    // Change which content is shown based on the currentChecked state
    changeContent = () => {
        const spans = document.getElementsByClassName("text-content");
        for (let span of spans) {
            if (span.dataset.book <= this.state.currentChecked) {
                span.style.display = 'inline';
            }
            else {
                span.style.display = 'none';
            }
        }
        if (this.state.currentChecked > 0) {
            document.getElementById('no-checked').style.display = 'none';
        }
    }


    render() {
        return (
            <div className="wrapper wiki-wrapper">
                <div className="sidebar">
                    <ProgressForm
                        bookseries={this.props.bookseries}
                        books={this.props.books}
                        currentWiki={this.props.match.params.bookseries_id}
                        currentBooks={this.state.currentBooks}
                        progressChange={this.progressChange}
                        progressMouseEnter={this.progressMouseEnter}
                        progressMouseLeave={this.progressMouseLeave}
                    />
                    <Categories
                        bookseries={this.props.bookseries}
                        currentWiki={this.props.match.params.bookseries_id}
                        categories={this.props.categories}
                        content={this.props.content}
                    />
                </div>
                <div className="content">
                    <Link className="prev-page-link" to="/wiki"> Back to all</Link>
                    <p id="no-checked">Please input your progress and topic in the sidebar to the left</p>
                    <Route path={this.props.match.path + '/:contentId'}
                        render={({ match }) => (
                            <WikiContent
                                content={this.props.content}
                                match={match.params}
                                changeContent={this.changeContent}
                            />
                        )} />
                </div>
            </div>
        )
    }
}

Wiki.propTypes = {
    bookseries: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    content: PropTypes.array.isRequired,
    progressChange: PropTypes.func,
    progressMouseEnter: PropTypes.func,
    progressMouseLeave: PropTypes.func,
    match: PropTypes.object.isRequired,
    currentBooks: PropTypes.array,
    currentChecked: PropTypes.number,
};

export default Wiki


