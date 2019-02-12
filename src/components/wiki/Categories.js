import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

export class Categories extends Component {



    // Returns array with all the category data needed for the current bookseries
    getCategoriesForCurrent = () => {
        let currentCategories = []
        this.props.bookseries.forEach(bookserie => {
            if (bookserie.id === parseInt(this.props.currentWiki)) {
                this.props.categories.forEach(category => {
                    if (bookserie.categories.includes(category.id)) {
                        // currentCategories[category.id] = category.name
                        currentCategories.push([category.id, category.name])
                    }
                })
            }
        })
        // console.log(currentCategories)
        return currentCategories
    }

    // Returns array with content title based on current bookseries and category
    getBodyContentForCurrent = (category_id) => {
        let bodyContent = []
        this.props.content.forEach(c => {
            if (c.bookseries_id === parseInt(this.props.currentWiki) && c.category === category_id) {
                bodyContent.push([c.id, c.title, c.bookData])
            }
        });
        return bodyContent
    }


    render() {
        const categoriesOutput = this.getCategoriesForCurrent().map((category) =>
            <AccordionItem key={'category' + category[0]}>
                <AccordionItemTitle>
                    <h3>{category[1]}</h3>
                    <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody>
                    {
                        this.getBodyContentForCurrent(category[0]).map((bodyContent) =>
                            <span key={bodyContent[0]} data-book={bodyContent[2]} className="text-content" ><Link className="category-link" to={'/wiki/' + this.props.currentWiki + '/' + bodyContent[0]}>{bodyContent[1]}</Link></span>
                        )
                    }
                </AccordionItemBody>
            </AccordionItem >
        )
        return (
            <span data-book="1" className="text-content">
                <h4 className="sidebar-title" >Topics</h4>
                <Accordion accordion={false}>
                    {categoriesOutput}
                </Accordion>
            </span>
        )
    }
}

export default Categories


Categories.propTypes = {
    bookseries: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    currentWiki: PropTypes.string.isRequired,
    // updateCategories: PropTypes.func.isRequired,

};