import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Wiki from './components/pages/Wiki';
// import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Wikis from './components/pages/Wikis';
import NoMatch from './components/pages/NoMatch';
// import Sidebar from './components/layout/Sidebar';


class App extends Component {

  // Using this state as a dummy database for the moment, while I focus on other aspects of React and the project
  state = {

    bookseries: [
      {
        id: 1,
        title: 'Mistborn',
        books: 3,
        categories: [1, 3],
      },
      {
        id: 2,
        title: 'Stormlight Archive',
        books: 3,
        categories: [1, 2],
      }
    ],
    books: [
      {
        id: 1,
        title: 'The Final Empire',
        bookseries_id: 1,
        number: 1
      },
      {
        id: 2,
        title: 'The Well of Ascension',
        bookseries_id: 1,
        number: 2
      },
      {
        id: 3,
        title: 'The Hero of Ages',
        bookseries_id: 1,
        number: 3
      },
      {
        id: 4,
        title: 'The Way of Kings',
        bookseries_id: 2,
        number: 1
      },
      {
        id: 5,
        title: 'Words of Radiance',
        bookseries_id: 2,
        number: 2
      },
      {
        id: 6,
        title: 'Oathbringer',
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
        title: 'Kelsier',
        code: '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h4> Title</h4> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h4>Title</h4><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h4>Title</h4> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',

      },
      {
        id: 1,
        bookseries_id: 1,
        category: 1,
        title: 'Vin',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, te sed modus vocent epicurei. Id possit assentior eum, his ubique fabulas nusquam id. Pro oportere referrentur id, cum et dicam nominavi accusata.<span data-book="3" className="text-content"> Mel id assum libris fierent, id ius menandri democritum, nam voluptua scripserit ea.Nulla congue oportere an cum, vis choro tractatos ne.</span ></p><h4>Lorem</h4>  <p>Mundi scriptorem ut est. Ea dolore prompta intellegam sea. Has partiendo molestiae ad. Iusto facilisis cu sit, ut minimum accusam pro. An ius primis similique, eos ei meis noluisse deserunt, mei ex amet conceptam reprehendunt. Nusquam adipisci pertinacia nam te, habeo temporibus ad duo. </p><span data-book="2" className="text-content"><p>Mel id habeo euismod delectus. Eu dolor ignota audiam his. Qui et stet possim appetere, scaevola suscipiantur at has. Usu id everti melius habemus. Meis maiestatis argumentum id vel, prima maiorum postulant ius et,omnes audiam labores quo an.</p></span></span>'
      },
      {
        id: 2,
        bookseries_id: 1,
        category: 3,
        title: 'Allomancy',
        code: '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h4> Title</h4> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h4>Title</h4><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h4>Title</h4> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',
      },
      {
        id: 3,
        bookseries_id: 1,
        category: 3,
        title: 'Feruchemy',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, te sed modus vocent epicurei. Id possit assentior eum, his ubique fabulas nusquam id. Pro oportere referrentur id, cum et dicam nominavi accusata.<span data-book="3" className="text-content"> Mel id assum libris fierent, id ius menandri democritum, nam voluptua scripserit ea.Nulla congue oportere an cum, vis choro tractatos ne.</span ></p><h4>Lorem</h4>  <p>Mundi scriptorem ut est. Ea dolore prompta intellegam sea. Has partiendo molestiae ad. Iusto facilisis cu sit, ut minimum accusam pro. An ius primis similique, eos ei meis noluisse deserunt, mei ex amet conceptam reprehendunt. Nusquam adipisci pertinacia nam te, habeo temporibus ad duo. </p><span data-book="2" className="text-content"><p>Mel id habeo euismod delectus. Eu dolor ignota audiam his. Qui et stet possim appetere, scaevola suscipiantur at has. Usu id everti melius habemus. Meis maiestatis argumentum id vel, prima maiorum postulant ius et,omnes audiam labores quo an.</p></span></span>'
      },
      {
        id: 4,
        bookseries_id: 2,
        category: 1,
        title: 'Kaladin',
        code: '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h2> Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h2>Title</h2><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h2>Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',
      },
      {
        id: 5,
        bookseries_id: 2,
        category: 1,
        title: 'Dalinar Kholin',
        code: '<span data-book="1" className="text-content"><p>Lorem ipsum dolor sit amet, te sed modus vocent epicurei. Id possit assentior eum, his ubique fabulas nusquam id. Pro oportere referrentur id, cum et dicam nominavi accusata.<span data-book="3" className="text-content"> Mel id assum libris fierent, id ius menandri democritum, nam voluptua scripserit ea.Nulla congue oportere an cum, vis choro tractatos ne.</span ></p><h4>Lorem</h4>  <p>Mundi scriptorem ut est. Ea dolore prompta intellegam sea. Has partiendo molestiae ad. Iusto facilisis cu sit, ut minimum accusam pro. An ius primis similique, eos ei meis noluisse deserunt, mei ex amet conceptam reprehendunt. Nusquam adipisci pertinacia nam te, habeo temporibus ad duo. </p><span data-book="2" className="text-content"><p>Mel id habeo euismod delectus. Eu dolor ignota audiam his. Qui et stet possim appetere, scaevola suscipiantur at has. Usu id everti melius habemus. Meis maiestatis argumentum id vel, prima maiorum postulant ius et,omnes audiam labores quo an.</p></span></span>'
      },
      {
        id: 6,
        bookseries_id: 2,
        category: 2,
        title: 'Alethkar',
        code: '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h2> Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h2>Title</h2><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h2>Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',
      },
      {
        id: 7,
        bookseries_id: 2,
        category: 2,
        title: 'Shinovar',
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
                <Wikis
                  bookseries={this.state.bookseries}
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
