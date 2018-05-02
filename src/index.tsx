import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

// import { AppStore } from './stores/app.store';
// import { UserProvider } from './providers/user.provider';
//
// const userProvider = new UserProvider();
// const appStore = new AppStore(userProvider);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
