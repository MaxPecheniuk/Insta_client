import * as React from 'react';
import { observer } from 'mobx-react';
import './ProfileInfo.scss';
import { UserProfileResponse } from '../../types/user.types';

interface AppProps {
  data: UserProfileResponse;

}

@observer
export class ProfileInfo extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }
  renderLoader() {
    return <div className="loader">Loading...</div>;
  }
  renderComponent() {
    const {full_name, bio, website} = this.props.data;
    return(
      <div className="profile-info">
        <div className="profile-info__full-name">
          {full_name}
        </div>
        <div className="profile-info_profile-bio">
          {bio}
        </div>
        <div className="profile-info__websait">
          {website}
        </div>
      </div>
    );
  }
  render() {
    if (!this.props.data) {
      return this.renderLoader();
    }

    return this.renderComponent();
  }
}