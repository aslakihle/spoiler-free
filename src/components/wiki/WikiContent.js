import React, { Component } from 'react'
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

export class WikiContent extends Component {

    //Make sure the correct text content is shown if you only jump between topics
    componentDidMount() {
        this.props.changeContent()
    }
    componentDidUpdate() {
        this.props.changeContent()
    }


    // Get the current content for content output
    getCurrentContent = () => {
        let currentContent = []
        this.props.content.forEach(c => {
            if (c.id === parseInt(this.props.match.contentId)) {
                console.log(c)
                currentContent = c
            }
        })
        return currentContent
    }


    render() {
        return (
            <div>
                <h2 data-book={this.getCurrentContent().bookData} className="text-content">{this.getCurrentContent().title}</h2>
                {Parser(this.getCurrentContent().code)}
            </div>
        )

    }
}

export default WikiContent


WikiContent.propTypes = {
    content: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    changeContent: PropTypes.func.isRequired,
};

