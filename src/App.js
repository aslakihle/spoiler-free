import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Wiki from './components/pages/Wiki';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Wikis from './components/pages/Wikis';
import NoMatch from './components/pages/NoMatch';
// import Sidebar from './components/layout/Sidebar';


class App extends Component {
  state = {

    bookseries: [
      {
        id: 1,
        title: 'Mistborn',
        books: 3,
        categories: [1, 2, 3],
      },
      {
        id: 2,
        title: 'Stormlight Archive',
        books: 3,
        categories: [1, 2, 3],
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
        name: 'Places',
      },
      {
        id: 3,
        name: 'Things',
      },
    ],
    content: [
      {
        id: 1,
        bookseries_id: 1,
        category: 1,
        title: 'Character name',
        code:
          '<span data-book="1" className="text-content"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<span ref={this.textContent} data-book="2" className="text-content">Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><h2> Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <span ref={this.textContent} data-book="2" className="text-content">Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</span></p><span ref={this.textContent} data-book="3" className="text-content"><h2>Title</h2><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </span><span ref={this.textContent} data-book="2" className="text-content"><h2>Title</h2> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></span></span>',
      }
    ],
    // progress: 1,
  }



  //Create string with class names for current value and below
  classesForProgress = (progress) => {
    let output = '';
    for (var i = progress; i > 0; i--) {
      output += 'b' + i + ' ';
    }
    return output;
  }

  changeProgress = (value) => {
    const spans = document.getElementsByClassName("text-content");
    for (let span of spans) {
      if (span.dataset.book <= value) {
        span.style.display = 'inline';
      }
      else {
        span.style.display = 'none';
      }
    }
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

              <Route path="/wiki/:id"
                render={({ match }) => (
                  <Wiki
                    changeProgress={this.changeProgress}
                    bookseries={this.state.bookseries}
                    books={this.state.books}
                    categories={this.state.categories}
                    content={this.state.content}
                    // progress={this.state.progress}
                    match={match.params}
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
