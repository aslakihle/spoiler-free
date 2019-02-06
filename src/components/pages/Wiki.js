import React, { Component } from 'react'
// import ProgressSlider from '../ProgressSlider';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ProgressRadio from '../wiki/ProgressRadio';
// import ProgressInput from '../ProgressInput';
import ProgressForm from '../wiki/ProgressForm';



class Wiki extends Component {
    constructor(props) {
        super(props);

        // this.textContent = React.createRef();
        // this.myRef = React.createRef();
    }
    state = {
        currentBooks: [],
        currentChecked: 0,
        noCheckedHTML: '<p>Please tell me how many books you have read in the series to the left on the page</p>'
    }


    componentDidMount() {
        this.booksCurrentWiki(this.props.match.id)
        // this.getCurrentChecked()
        // if (this.state.currentChecked < 1) {

        // }
    }

    //Create string with class names for current value and below
    // classesForProgress = (progress) => {
    //     let output = '';
    //     for (var i = progress; i > 0; i--) {
    //         output += 'b' + i + ' ';
    //     }
    //     return output;
    // }

    // Change progress in a bookseries
    // changeProgress = (value) => {
    //     this.setState({ progress: value })
    // }

    //Find books for current wiki
    booksCurrentWiki = (current) => {
        let currentBooks = []
        this.props.books.forEach(book => {
            if (book.bookseries_id === parseInt(current)) {
                currentBooks.push(book);
            }
        });
        console.log(currentBooks)
        this.setState({ currentBooks })
    }

    // getCurrentChecked(runOnMount = false) {
    //     if (runOnMount) {
    //         this.setState({currentChecked})
    //     }
    //     else {
    //         console.log(runOnMount)
    //     }
    // }
    // getCurrentChecked = () => {
    //     const radios = document.getElementsByClassName('book');
    //     for (let radio of radios) {
    //         if (radio.checked) {

    //             // console.log(radio.id)
    //             // this.setState({ currentChecked: radio.id })
    //             // console.log(this.state.currentChecked)
    //             this.setState(state => {
    //                 state.currentChecked = radio.id;
    //             }, () => {
    //                 console.log(this.state.currentChecked)
    //             });
    //         }
    //     }
    // }


    progressChange = () => {
        // console.log(this.state.currentChecked)
        // this.getCurrentChecked();

        const radios = document.getElementsByClassName('book');
        for (let radio of radios) {
            if (radio.checked) {

                // console.log(radio.id)
                // this.setState({ currentChecked: radio.id })
                // console.log(this.state.currentChecked)
                this.setState(state => {
                    state.currentChecked = radio.id;
                }, () => {


                    for (let index = 1; index <= this.props.bookseries[0].books; index++) {
                        // console.log(document.getElementsByClassName('book' + index))
                        let label = document.getElementsByClassName('book' + index)[0]
                        if (index <= this.state.currentChecked) {
                            label.style.backgroundColor = '#325fa8';
                        }
                        else {
                            label.style.backgroundColor = '#777';
                        }
                    }



                });
            }
        }
    }

    progressSubmit = (event) => {
        event.preventDefault();
        // console.log(document.getElementsByClassName('book'))
        const spans = document.getElementsByClassName("text-content");
        for (let span of spans) {
            if (span.dataset.book <= this.state.currentChecked) {
                span.style.display = 'inline';
            }
            else {
                span.style.display = 'none';
            }
        }
    }

    render() {
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
                        changeProgress={this.changeProgress}
                        currentWiki={this.props.match.id}
                        currentBooks={this.state.currentBooks}
                        progressSubmit={this.progressSubmit}
                        progressChange={this.progressChange}
                        getCurrentChecked={this.getCurrentChecked}
                    />
                </div>
                <div className="content">
                    <Link className="prev-page-link" to="/wiki"> &lt;-- Back to all Wikis</Link>
                    {Parser(this.props.content[0].code)}


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
    // changeProgress: PropTypes.func.isRequired,
    // progressChange: PropTypes.func.isRequired,
    // progressSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

export default Wiki


