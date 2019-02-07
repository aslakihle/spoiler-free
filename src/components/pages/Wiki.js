import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProgressForm from '../wiki/ProgressForm';
import Categories from '../wiki/Categories';
import WikiContent from '../wiki/WikiContent';



class Wiki extends Component {
    // constructor(props) {
    //     super(props);

    // this.textContent = React.createRef();
    // this.myRef = React.createRef();
    // }
    state = {
        currentBooks: [],
        currentChecked: 0,
    }

    componentDidMount() {
        this.booksCurrentWiki(this.props.match.params.bookseries_id)
        // this.getCurrentChecked()
        // if (this.state.currentChecked < 1) {
        this.progressChange()
        // }
    }


    //Find books for current wiki
    booksCurrentWiki = (current) => {
        let currentBooks = []
        this.props.books.forEach(book => {
            if (book.bookseries_id === parseInt(current)) {
                currentBooks.push(book);
            }
        });
        // console.log(currentBooks)
        this.setState({ currentBooks })
    }

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
                            label.style.backgroundColor = '#325fa8';
                        }
                        else {
                            label.style.backgroundColor = '#777';
                        }
                    }
                    this.changeContent()
                });
            }
        }

    }

    changeContent = () => {
        const spans = document.getElementsByClassName("text-content");
        for (let span of spans) {
            console.log('in span for')
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

    progressSubmit = (event) => {
        // event.preventDefault();
        // // console.log(document.getElementsByClassName('book'))
        // const spans = document.getElementsByClassName("text-content");
        // for (let span of spans) {
        //     if (span.dataset.book <= this.state.currentChecked) {
        //         span.style.display = 'inline';
        //     }
        //     else {
        //         span.style.display = 'none';
        //     }
        // }
        // if (this.state.currentChecked > 0) {
        //     document.getElementById('no-checked').style.display = 'none';
        // }
    }

    render() {
        // console.log(this.props.match)
        return (
            <div className="wrapper wiki-wrapper">

                <div className="sidebar">
                    {/* <ProgressSlider
                        bookseries={this.props.bookseries}
                        changeProgress={this.changeProgress}
                    /> */}
                    <ProgressForm
                        bookseries={this.props.bookseries}
                        books={this.props.books}
                        currentWiki={this.props.match.params.bookseries_id}
                        currentBooks={this.state.currentBooks}
                        // progressSubmit={this.progressSubmit}
                        progressChange={this.progressChange}
                    />
                    <Categories
                        bookseries={this.props.bookseries}
                        currentWiki={this.props.match.params.bookseries_id}
                        categories={this.props.categories}
                        content={this.props.content}

                    />
                </div>
                <div className="content">
                    <Link className="prev-page-link" to="/wiki"> &lt;-- Back to all Wikis</Link>
                    <p id="no-checked">Please input your progress in the sidebar to the left</p>
                    {/* {Parser(this.props.content[0].code)} */}
                    <Route path={this.props.match.path + '/:contentId'}
                        render={({ match }) => (
                            <WikiContent
                                content={this.props.content}
                                match={match.params}
                                changeContent={this.progressChange}
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
    progressSubmit: PropTypes.func,
    match: PropTypes.object.isRequired,
    currentBooks: PropTypes.array,
    currentChecked: PropTypes.number,
};

export default Wiki


