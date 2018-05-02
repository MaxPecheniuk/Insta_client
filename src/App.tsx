import * as React from 'react';
import './App.scss';
import { BodyComponent } from './components/Body.component/Body.component';

import { AppStore } from './stores/app.store';
import { UserProvider } from './providers/user.provider';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { MediaItems } from './components/mediaItem/mediaItem';
// import { Test } from './components/mediaItem/mediaItem';

const userProvider = new UserProvider();
const appStore = new AppStore(userProvider);

class App extends React.Component {

  render() {
    return (
      <Router>
        <main className="App">
          <Switch>
            <Route exact={true} path={'/'} render={({...props}) => <BodyComponent {...props} store={appStore}/>}/>
            <Route exact={true} path={'/galleryItem'}/>
            <Route path={'/details/:id'} render={({...props}) => <MediaItems {...props} />}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;