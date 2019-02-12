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
        const labels = document.querySelectorAll('.progress-ul li:nth-child(-n+' + e.currentTarget.id + ') label')
        for (const label of labels) {
            label.classList.add('label-hover')
        }
    }
    //Ends hover effect from previous function
    progressMouseLeave = (e) => {
        const labels = document.querySelectorAll('.progress-ul li:nth-child(-n+' + e.currentTarget.id + ') label')
        for (const label of labels) {
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
                    const labels = document.getElementsByClassName('book-label');
                    const checkboxes = document.getElementsByClassName('progress-checkbox');
                    for (const label of labels) {
                        // label.classList.add('label-hover')
                        if (label.id <= this.state.currentChecked) {
                            label.classList.add('progress-checked')
                        }
                        else {
                            label.classList.remove('progress-checked')
                        }
                    }
                    for (const checkbox of checkboxes) {
                        if (checkbox.id <= this.state.currentChecked) {
                            checkbox.classList.add("progress-checkbox-checked")
                            checkbox.firstChild.classList.add("progress-checkbox-mark")
                        }
                        else {
                            checkbox.classList.remove("progress-checkbox-checked")
                            checkbox.firstChild.classList.remove("progress-checkbox-mark")
                        }
                    }
                    this.changeContent()
                    // this.props.updateCategories()
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
            if (this.state.currentChecked > 0) {
                document.getElementById('no-checked').style.display = 'none';
            }
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
                        currentChecked={this.state.currentChecked}
                        updateCategories={this.updateCategories}
                    />
                </div>
                <div className="content">
                    <Link className="prev-page-link" to="/wiki"> Back to all</Link>
                    <p id="no-checked">Select the books you have read and choose a topic</p>
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
    // updateCategories: PropTypes.func.isRequired,
};

export default Wiki


