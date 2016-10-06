import React from 'react';
import ReactDOM from 'react-dom';

/* Style */
import style from '../scss/main.scss';

/* Componetns */
import Layout from '../components/Layout.jsx';
import Main from '../components/Main.jsx';
import Blog from '../components/Blog.jsx';
import Archive from '../components/Archive.jsx';

/* libs */
import page from '../lib/page';

/* React router deps */
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'


let entryPoint = document.getElementById('App'),
    router = (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            {/* Main is our home component */}
            <IndexRoute component={Main} />
            <Route path="about" component={Main} />
            <Route path="pixels" component={Blog} category={"words"}>
              <Route path="archive" component={Archive} />
            </Route>
            <Route path="code" component={Blog} category={"code"}>
              <Route path="archive" component={Archive} />
            </Route>
          </Route>

          <Route path="/about/" component={Layout}>
            {/* Main is our home component */}
            <IndexRoute component={Main} />
          </Route>

        </Router>
      </Provider>
    )

ReactDOM.render(router, entryPoint, () => {

  console.log("Entry Point - DONE")

})
