import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-accessible-accordion/dist/minimal-example.css';

export class Categories extends Component {


    // componentDidMount() {
    //     this.getCategoriesForCurrent()
    // }

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

    getBodyContentForCurrent = (category_id) => {
        let bodyContent = []
        this.props.content.forEach(c => {
            if (c.bookseries_id === parseInt(this.props.currentWiki) && c.category === category_id) {
                // console.log('in if')
                bodyContent.push([c.id, c.title])
            }
        });
        // console.log(bodyContent)
        return bodyContent
    }



    render() {
        // console.log(this.props.match)
        const categoriesOutput = this.getCategoriesForCurrent().map((category) =>


            <AccordionItem key={category[0]}>
                <AccordionItemTitle>
                    <h3>{category[1]}</h3>
                    <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody>
                    {
                        this.getBodyContentForCurrent(category[0]).map((bodyContent) =>
                            <Link className="category-link" key={bodyContent[0]} to={'/wiki/' + this.props.currentWiki + '/' + bodyContent[0]}>{bodyContent[1]}</Link>

                        )
                    }

                </AccordionItemBody>
            </AccordionItem>

        )
        return (
            <span data-book="1" className="text-content">
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

};





 // isCurrentBookSeries = (n) => {

    // }


    // getBodyContent = (bookseries_id, category) => {
    //     const bodyContent = []
    //     this.props.content.forEach(content => {
    //         if (content.id == bookseries_id && content.category == category) {
    //             return (
    //                 bodyContent.push(<AccordionItemBody > {content.title}</AccordionItemBody >)
    //             )
    //         }
    //     })
    //     console.log(bodyContent)
    //     return bodyContent
    // }

    // getBodyContent = (bookseries_id, category) => {
    //     const bodyContent = this.props.content.map((content) => {
    //         if (content.id == bookseries_id && content.category == category) {
    //             return (
    //                 <AccordionItemBody > {content.title}</AccordionItemBody >
    //             )

    //         }
    //     })
    //     // { bodyContent }
    // }

    // categoryItems = () => {
    //     const items = this.props.bookseries.forEach(bookserie => {
    //         if (bookserie.id === parseInt(this.props.currentWiki)) {
    //             return (
    //                 this.props.categories.forEach(category => {
    //                     if (bookserie.categories.includes(category.id)) {
    //                         return (
    //                             <AccordionItem> <AccordionItemTitle>{category.name} </AccordionItemTitle> <AccordionItemBody>{this.getBodyContent(bookserie.id, category.id)}</AccordionItemBody> </AccordionItem>

    //                         )
    //                     }
    //                 })

    //             )
    //         }
    //     })
    //     // { items }
    // }




    // accordion = () => {

    //     const accordion = this.props.bookseries.map((bookserie) => {
    //         console.log('in 1st foreach' + this.props.currentWiki)
    //         if (bookserie.id === parseInt(this.props.currentWiki)) {
    //             console.log('in 1st if')
    //             this.props.categories.map((category) => {
    //                 {
    //                     bookserie.categories.includes(category.id)
    //                         ? (

    //                             <AccordionItem>
    //                                 <AccordionItemTitle>
    //                                     {category.name}
    //                                 </AccordionItemTitle>
    //                                 <AccordionItemBody>
    //                                     {this.props.content.map((c) => {
    //                                         if (c.category === category.id && c.bookseries_id === bookserie.id) {

    //                                             <h5>{c.title}</h5>

    //                                         }
    //                                     })}
    //                                 </AccordionItemBody>
    //                             </AccordionItem>)
    //                         : console.log('else')
    //                 }
    //             });
    //         }
    //     })
    // }
