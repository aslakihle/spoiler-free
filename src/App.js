import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { hashHistory } from 'react-router';
// import {  createBrowserHistory,  createHashHistory,  createMemoryHistory} from 'history'
import './css/App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Wiki from './components/pages/Wiki';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Wikis from './components/pages/Wikis';
import NoMatch from './components/pages/NoMatch';


import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//FA icons

library.add(faBook)



class App extends Component {

  // Using this state as a dummy database for the moment, while I focus on other aspects of React and the project
  state = {

    bookseries: [
      {
        id: 1,
        title: 'Harry Potter',
        books: 7,
        categories: [1, 3],
        author: 'J.K. Rowling',
        description: 'A young-adult fantasy series',
      },
      {
        id: 2,
        title: 'The Lord of the Rings',
        books: 3,
        categories: [1, 2],
        author: 'J.R.R. Tolkien',
        description: 'A epic fantasy series',
      }
    ],
    books: [
      {
        id: 1,
        title: "The Philosopher's Stone",
        bookseries_id: 1,
        number: 1
      },
      {
        id: 2,
        title: 'The Chamber of Secrets',
        bookseries_id: 1,
        number: 2
      },
      {
        id: 3,
        title: 'The Prisoner of Azkaban',
        bookseries_id: 1,
        number: 3
      },
      {
        id: 4,
        title: 'The Goblet of Fire',
        bookseries_id: 1,
        number: 4
      },
      {
        id: 5,
        title: 'The Order of the Phoenix',
        bookseries_id: 1,
        number: 5
      },
      {
        id: 6,
        title: 'The Half-Blood Prince',
        bookseries_id: 1,
        number: 6
      },
      {
        id: 7,
        title: 'The Deathly Hallows',
        bookseries_id: 1,
        number: 7
      },
      {
        id: 8,
        title: 'The Fellowship of the Ring',
        bookseries_id: 2,
        number: 1
      },
      {
        id: 9,
        title: 'The Two Towers',
        bookseries_id: 2,
        number: 2
      },
      {
        id: 10,
        title: 'The Return of the King',
        bookseries_id: 2,
        number: 3
      }
    ],
    categories: [
      {
        id: 1,
        name: 'Characters',
      },
      {
        id: 2,
        name: 'Locations',
      },
      {
        id: 3,
        name: 'Magic',
      },
    ],
    content: [
      {
        id: 0,
        bookseries_id: 1,
        category: 1,
        bookData: 1,
        title: 'Harry Potter',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc et pretium aliquam. Aliquam eu malesuada mi.Morbi vitae nunc quis erat ornare viverra. Curabitur sodales, arcu ut vehicula tincidunt, felis dolor condimentum ante, non faucibus augue dui vitae orci. Donec libero mi, egestas eu ornare vel, auctor vel tortor. Ut pharetra ac turpis ut ornare. Duis aliquam luctus nibh, non sollicitudin erat rhoncus sit amet. Vestibulum eleifend a diam vitae dictum. Quisque imperdiet aliquet sollicitudin. Morbi in placerat purus. Donec varius eros eu ante elementum, a bibendum odio sollicitudin.<span data-book="2" className="text-content"> Sed at sapien quam. Cras sit amet metus eget ligula lacinia laoreet at quis ipsum. Ut nec mollis urna. Quisque lacinia neque ac turpis elementum, eu fermentum sapien gravida. Aenean non nisl purus.</span></p><span data-book="3" className="text-content"><h3>Lorem</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis non ante eu hendrerit. Sed efficitur varius nulla, vitae suscipit mauris posuere sed. Vestibulum vel ligula augue. Pellentesque consequat dui nec pharetra dignissim. Nunc consectetur facilisis sodales. Pellentesque luctus volutpat dui ut bibendum. <span data-book="7" className="text-content"> Phasellus diam ipsum, ultricies at ornare a, fringilla mattis risus. Mauris fringilla, ante id maximus pulvinar, sem magna rutrum erat, vel placerat purus diam eu urna.</span></p></span><span data-book="4" className="text-content"><p>Duis a nunc id nisl auctor maximus. Pellentesque nec mauris at mauris maximus blandit vitae ut mauris. Donec tristique justo enim, vel pellentesque massa mollis a. Sed vel pretium nisi. Vestibulum in sagittis elit. Curabitur nunc lectus, vehicula vitae dui eu, hendrerit suscipit arcu. </p></span><span data-book="6" className="text-content"><h3>Ipsum</h3><p>Nam mauris ipsum, malesuada sed volutpat non, pellentesque eget neque. Curabitur mauris nulla, dapibus eu consectetur ut, iaculis eu metus. Vestibulum diam dui, facilisis ac tristique vitae, mattis et leo. Nunc sed ligula tincidunt, volutpat arcu et, semper orci. Phasellus dignissim viverra nibh in iaculis.</p></span><span data-book="5" className="text-content"><p>Vestibulum ac nisi convallis, vulputate orci sit amet, efficitur lectus. Quisque dictum, mauris vitae sagittis mattis, ex mauris laoreet dui, sed imperdiet quam lacus sit amet augue. Quisque nisi sem, finibus sed risus sed, tincidunt luctus velit. Nam ut velit eu ligula gravida porttitor. Mauris non ligula commodo, tincidunt ante vel, porttitor purus. Maecenas sed auctor turpis. Donec urna purus, commodo in nibh in, placerat tincidunt elit. Sed gravida pharetra commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer efficitur commodo fringilla.</p></span></span>',

      },
      {
        id: 1,
        bookseries_id: 1,
        category: 1,
        bookData: 1,
        title: 'Hermione Granger',
        code: '<span data-book="1" className="text-content"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis non ante eu hendrerit. Sed efficitur varius nulla, vitae suscipit mauris posuere sed. Vestibulum vel ligula augue. Pellentesque consequat dui nec pharetra dignissim. Nunc consectetur facilisis sodales. Pellentesque luctus volutpat dui ut bibendum. <span data-book="2" className="text-content"> Sed at sapien quam. Cras sit amet metus eget ligula lacinia laoreet at quis ipsum. Ut nec mollis urna. Quisque lacinia neque ac turpis elementum, eu fermentum sapien gravida. Aenean non nisl purus.</span></p><span data-book="3" className="text-content"><h3>Lorem</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc et pretium aliquam. Aliquam eu malesuada mi.Morbi vitae nunc quis erat ornare viverra. Curabitur sodales, arcu ut vehicula tincidunt, felis dolor condimentum ante, non faucibus augue dui vitae orci. Donec libero mi, egestas eu ornare vel, auctor vel tortor. Ut pharetra ac turpis ut ornare. Duis aliquam luctus nibh, non sollicitudin erat rhoncus sit amet. Vestibulum eleifend a diam vitae dictum. Quisque imperdiet aliquet sollicitudin. Morbi in placerat purus. Donec varius eros eu ante elementum, abibendum odio sollicitudin. <span data-book="7" className="text-content"> Phasellus diam ipsum, ultricies at ornare a, fringilla mattis risus. Mauris fringilla, ante id maximus pulvinar, sem magna rutrum erat, vel placerat purus diam eu urna.</span></p></span><span data-book="4" className="text-content"><p>Duis a nunc id nisl auctor maximus. Pellentesque nec mauris at mauris maximus blandit vitae ut mauris. Donec tristique justo enim, vel pellentesque massa mollis a. Sed vel pretium nisi. Vestibulum in sagittis elit. Curabitur nunc lectus, vehicula vitae dui eu, hendrerit suscipit arcu. </p></span><span data-book="6" className="text-content"><h3>Ipsum</h3><p>Nam mauris ipsum, malesuada sed volutpat non, pellentesque eget neque. Curabitur mauris nulla, dapibus eu consectetur ut, iaculis eu metus. Vestibulum diam dui, facilisis ac tristique vitae, mattis et leo. Nunc sed ligula tincidunt, volutpat arcu et, semper orci. Phasellus dignissim viverra nibh in iaculis.</p></span><span data-book="5" className="text-content"><p>Vestibulum ac nisi convallis, vulputate orci sit amet, efficitur lectus. Quisque dictum, mauris vitae sagittis mattis, ex mauris laoreet dui, sed imperdiet quam lacus sit amet augue. Quisque nisi sem, finibus sed risus sed, tincidunt luctus velit. Nam ut velit eu ligula gravida porttitor. Mauris non ligula commodo, tincidunt ante vel, porttitor purus. Maecenas sed auctor turpis. Donec urna purus, commodo in nibh in, placerat tincidunt elit. Sed gravida pharetra commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer efficitur commodo fringilla.</p></span></span>'
      },
      {
        id: 8,
        bookseries_id: 1,
        category: 1,
        bookData: 3,
        title: 'Sirius Black',
        code: '<span data-book="3" className="text-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc et pretium aliquam. Aliquam eu malesuada mi.Morbi vitae nunc quis erat ornare viverra. Curabitur sodales, arcu ut vehicula tincidunt, felis dolor condimentum ante, non faucibus augue dui vitae orci. Donec libero mi, egestas eu ornare vel, auctor vel tortor. Ut pharetra ac turpis ut ornare. Duis aliquam luctus nibh, non sollicitudin erat rhoncus sit amet. Vestibulum eleifend a diam vitae dictum. Quisque imperdiet aliquet sollicitudin. Morbi in placerat purus. Donec varius eros eu ante elementum, a bibendum odio sollicitudin. Sed at sapien quam. Cras sit amet metus eget ligula lacinia laoreet at quis ipsum. Ut nec mollis urna. Quisque lacinia neque ac turpis elementum, eu fermentum sapien gravida. Aenean non nisl purus.</p><span data-book="3" className="text-content"><h3>Lorem</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis non ante eu hendrerit. Sed efficitur varius nulla, vitae suscipit mauris posuere sed. Vestibulum vel ligula augue. Pellentesque consequat dui nec pharetra dignissim. Nunc consectetur facilisis sodales. Pellentesque luctus volutpat dui ut bibendum. <span data-book="7" className="text-content"> Phasellus diam ipsum, ultricies at ornare a, fringilla mattis risus. Mauris fringilla, ante id maximus pulvinar, sem magna rutrum erat, vel placerat purus diam eu urna.</span></p></span><span data-book="4" className="text-content"><p>Duis a nunc id nisl auctor maximus. Pellentesque nec mauris at mauris maximus blandit vitae ut mauris. Donec tristique justo enim, vel pellentesque massa mollis a. Sed vel pretium nisi. Vestibulum in sagittis elit. Curabitur nunc lectus, vehicula vitae dui eu, hendrerit suscipit arcu. </p></span><span data-book="6" className="text-content"><h3>Ipsum</h3><p>Nam mauris ipsum, malesuada sed volutpat non, pellentesque eget neque. Curabitur mauris nulla, dapibus eu consectetur ut, iaculis eu metus. Vestibulum diam dui, facilisis ac tristique vitae, mattis et leo. Nunc sed ligula tincidunt, volutpat arcu et, semper orci. Phasellus dignissim viverra nibh in iaculis.</p></span><span data-book="5" className="text-content"><p>Vestibulum ac nisi convallis, vulputate orci sit amet, efficitur lectus. Quisque dictum, mauris vitae sagittis mattis, ex mauris laoreet dui, sed imperdiet quam lacus sit amet augue. Quisque nisi sem, finibus sed risus sed, tincidunt luctus velit. Nam ut velit eu ligula gravida porttitor. Mauris non ligula commodo, tincidunt ante vel, porttitor purus. Maecenas sed auctor turpis. Donec urna purus, commodo in nibh in, placerat tincidunt elit. Sed gravida pharetra commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer efficitur commodo fringilla.</p></span></span>',

      },
      {
        id: 2,
        bookseries_id: 1,
        category: 3,
        bookData: 1,
        title: 'Dark Magic',
        code: '<span data-book="1" className="text-content"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis non ante eu hendrerit. Sed efficitur varius nulla, vitae suscipit mauris posuere sed. Vestibulum vel ligula augue. Pellentesque consequat dui nec pharetra dignissim. Nunc consectetur facilisis sodales. Pellentesque luctus volutpat dui ut bibendum. <span data-book="2" className="text-content"> Sed at sapien quam. Cras sit amet metus eget ligula lacinia laoreet at quis ipsum. Ut nec mollis urna. Quisque lacinia neque ac turpis elementum, eu fermentum sapien gravida. Aenean non nisl purus.</span></p><span data-book="3" className="text-content"><h3>Lorem</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc et pretium aliquam. Aliquam eu malesuada mi.Morbi vitae nunc quis erat ornare viverra. Curabitur sodales, arcu ut vehicula tincidunt, felis dolor condimentum ante, non faucibus augue dui vitae orci. Donec libero mi, egestas eu ornare vel, auctor vel tortor. Ut pharetra ac turpis ut ornare. Duis aliquam luctus nibh, non sollicitudin erat rhoncus sit amet. Vestibulum eleifend a diam vitae dictum. Quisque imperdiet aliquet sollicitudin. Morbi in placerat purus. Donec varius eros eu ante elementum, abibendum odio sollicitudin. <span data-book="7" className="text-content"> Phasellus diam ipsum, ultricies at ornare a, fringilla mattis risus. Mauris fringilla, ante id maximus pulvinar, sem magna rutrum erat, vel placerat purus diam eu urna.</span></p></span><span data-book="4" className="text-content"><p>Duis a nunc id nisl auctor maximus. Pellentesque nec mauris at mauris maximus blandit vitae ut mauris. Donec tristique justo enim, vel pellentesque massa mollis a. Sed vel pretium nisi. Vestibulum in sagittis elit. Curabitur nunc lectus, vehicula vitae dui eu, hendrerit suscipit arcu. </p></span><span data-book="6" className="text-content"><h3>Ipsum</h3><p>Nam mauris ipsum, malesuada sed volutpat non, pellentesque eget neque. Curabitur mauris nulla, dapibus eu consectetur ut, iaculis eu metus. Vestibulum diam dui, facilisis ac tristique vitae, mattis et leo. Nunc sed ligula tincidunt, volutpat arcu et, semper orci. Phasellus dignissim viverra nibh in iaculis.</p></span><span data-book="5" className="text-content"><p>Vestibulum ac nisi convallis, vulputate orci sit amet, efficitur lectus. Quisque dictum, mauris vitae sagittis mattis, ex mauris laoreet dui, sed imperdiet quam lacus sit amet augue. Quisque nisi sem, finibus sed risus sed, tincidunt luctus velit. Nam ut velit eu ligula gravida porttitor. Mauris non ligula commodo, tincidunt ante vel, porttitor purus. Maecenas sed auctor turpis. Donec urna purus, commodo in nibh in, placerat tincidunt elit. Sed gravida pharetra commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer efficitur commodo fringilla.</p></span></span>',
      },
      {
        id: 3,
        bookseries_id: 1,
        category: 3,
        bookData: 1,
        title: 'Spells',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nunc et pretium aliquam. Aliquam eu malesuada mi.Morbi vitae nunc quis erat ornare viverra. Curabitur sodales, arcu ut vehicula tincidunt, felis dolor condimentum ante, non faucibus augue dui vitae orci. Donec libero mi, egestas eu ornare vel, auctor vel tortor. Ut pharetra ac turpis ut ornare. Duis aliquam luctus nibh, non sollicitudin erat rhoncus sit amet. Vestibulum eleifend a diam vitae dictum. Quisque imperdiet aliquet sollicitudin. Morbi in placerat purus. Donec varius eros eu ante elementum, a bibendum odio sollicitudin.<span data-book="2" className="text-content"> Sed at sapien quam. Cras sit amet metus eget ligula lacinia laoreet at quis ipsum. Ut nec mollis urna. Quisque lacinia neque ac turpis elementum, eu fermentum sapien gravida. Aenean non nisl purus.</span></p><span data-book="3" className="text-content"><h3>Lorem</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis non ante eu hendrerit. Sed efficitur varius nulla, vitae suscipit mauris posuere sed. Vestibulum vel ligula augue. Pellentesque consequat dui nec pharetra dignissim. Nunc consectetur facilisis sodales. Pellentesque luctus volutpat dui ut bibendum. <span data-book="7" className="text-content"> Phasellus diam ipsum, ultricies at ornare a, fringilla mattis risus. Mauris fringilla, ante id maximus pulvinar, sem magna rutrum erat, vel placerat purus diam eu urna.</span></p></span><span data-book="4" className="text-content"><p>Duis a nunc id nisl auctor maximus. Pellentesque nec mauris at mauris maximus blandit vitae ut mauris. Donec tristique justo enim, vel pellentesque massa mollis a. Sed vel pretium nisi. Vestibulum in sagittis elit. Curabitur nunc lectus, vehicula vitae dui eu, hendrerit suscipit arcu. </p></span><span data-book="6" className="text-content"><h3>Ipsum</h3><p>Nam mauris ipsum, malesuada sed volutpat non, pellentesque eget neque. Curabitur mauris nulla, dapibus eu consectetur ut, iaculis eu metus. Vestibulum diam dui, facilisis ac tristique vitae, mattis et leo. Nunc sed ligula tincidunt, volutpat arcu et, semper orci. Phasellus dignissim viverra nibh in iaculis.</p></span><span data-book="5" className="text-content"><p>Vestibulum ac nisi convallis, vulputate orci sit amet, efficitur lectus. Quisque dictum, mauris vitae sagittis mattis, ex mauris laoreet dui, sed imperdiet quam lacus sit amet augue. Quisque nisi sem, finibus sed risus sed, tincidunt luctus velit. Nam ut velit eu ligula gravida porttitor. Mauris non ligula commodo, tincidunt ante vel, porttitor purus. Maecenas sed auctor turpis. Donec urna purus, commodo in nibh in, placerat tincidunt elit. Sed gravida pharetra commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer efficitur commodo fringilla.</p></span></span>'
      },
      {
        id: 4,
        bookseries_id: 2,
        category: 1,
        bookData: 1,
        title: 'Frodo Baggins',
        code: '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h2> Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h2>Title</h2><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h2>Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',
      },
      {
        id: 5,
        bookseries_id: 2,
        category: 1,
        bookData: 1,
        title: 'Legolas',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, te sed modus vocent epicurei. Id possit assentior eum, his ubique fabulas nusquam id. Pro oportere referrentur id, cum et dicam nominavi accusata.<span data-book="3" className="text-content"> Mel id assum libris fierent, id ius menandri democritum, nam voluptua scripserit ea.Nulla congue oportere an cum, vis choro tractatos ne.</span ></p><h4>Lorem</h4>  <p>Mundi scriptorem ut est. Ea dolore prompta intellegam sea. Has partiendo molestiae ad. Iusto facilisis cu sit, ut minimum accusam pro. An ius primis similique, eos ei meis noluisse deserunt, mei ex amet conceptam reprehendunt. Nusquam adipisci pertinacia nam te, habeo temporibus ad duo. </p><span data-book="2" className="text-content"><p>Mel id habeo euismod delectus. Eu dolor ignota audiam his. Qui et stet possim appetere, scaevola suscipiantur at has. Usu id everti melius habemus. Meis maiestatis argumentum id vel, prima maiorum postulant ius et,omnes audiam labores quo an.</p></span></span>'
      },
      {
        id: 6,
        bookseries_id: 2,
        category: 2,
        bookData: 1,
        title: 'The Shire',
        code: '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h2> Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h2>Title</h2><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h2>Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',
      },
      {
        id: 7,
        bookseries_id: 2,
        category: 2,
        bookData: 1,
        title: 'Mordor',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, te sed modus vocent epicurei. Id possit assentior eum, his ubique fabulas nusquam id. Pro oportere referrentur id, cum et dicam nominavi accusata.<span data-book="3" className="text-content"> Mel id assum libris fierent, id ius menandri democritum, nam voluptua scripserit ea.Nulla congue oportere an cum, vis choro tractatos ne.</span ></p><h4>Lorem</h4>  <p>Mundi scriptorem ut est. Ea dolore prompta intellegam sea. Has partiendo molestiae ad. Iusto facilisis cu sit, ut minimum accusam pro. An ius primis similique, eos ei meis noluisse deserunt, mei ex amet conceptam reprehendunt. Nusquam adipisci pertinacia nam te, habeo temporibus ad duo. </p><span data-book="2" className="text-content"><p>Mel id habeo euismod delectus. Eu dolor ignota audiam his. Qui et stet possim appetere, scaevola suscipiantur at has. Usu id everti melius habemus. Meis maiestatis argumentum id vel, prima maiorum postulant ius et,omnes audiam labores quo an.</p></span></span>'
      },

    ],
    // progress: 1,
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" render={props => (
                <Home
                />
              )} />
              <Route exact path="/wiki" render={props => (
                <Wikis
                  bookseries={this.state.bookseries}
                />
              )} />

              <Route path="/wiki/:bookseries_id"
                render={({ match }) => (
                  <Wiki
                    bookseries={this.state.bookseries}
                    books={this.state.books}
                    categories={this.state.categories}
                    content={this.state.content}
                    match={match}
                  />
                )} />
              <Route path="/about" render={props => (
                <About

                />
              )} />
              <Route exact component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
