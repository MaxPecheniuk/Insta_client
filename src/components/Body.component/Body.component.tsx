import * as React from 'react';
import { observer } from 'mobx-react';
import { AppStore } from '../../stores/app.store';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { ProfileCounts } from '../ProfileCounts/ProfileCounts';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { ProfileControlPanel } from '../ProfileControlPanel/ProfileControlPanel';
import './Body.component.scss';
import { MediaGalleryComponent } from '../mediaGallery/mediaGallery.component';
// import { HashRouter as Router, Route } from 'react-router-dom';

interface AppProps {
  store: AppStore;
}

@observer
export class BodyComponent extends React.Component <AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.store.init();
  }

  render() {
    const {userData} = this.props.store;
    return (
      <div className="profile-component">
        <div className="profile-data">
          <ProfilePhoto store={this.props.store}/>
          <div className="profile-details">
            <ProfileControlPanel data={userData}/>
            <ProfileCounts data={userData}/>
            <ProfileInfo data={userData}/>
          </div>
        </div>
        <MediaGalleryComponent />
      </div>

    );
  }
}