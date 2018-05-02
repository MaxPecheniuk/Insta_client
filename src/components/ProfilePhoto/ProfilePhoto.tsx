import * as React from 'react';
import { observer } from 'mobx-react';
import { AppStore } from '../../stores/app.store';
import './ProfilePhoto.scss';

interface AppProps {
  store: AppStore;
}

@observer
export class ProfilePhoto extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }
  componentDidMount() {
    this.props.store.init();
  }
  render() {
    return(
      <div className="profile-photo">
        <img src={this.props.store.profilePicture} />
      </div>
    );
  }
}