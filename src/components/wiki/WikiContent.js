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

    render() {
        return (
            <div>
                <h2 data-book={this.props.content[this.props.match.contentId].bookData} className="text-content">{this.props.content[this.props.match.contentId].title}</h2>
                {Parser(this.props.content[this.props.match.contentId].code)}
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

