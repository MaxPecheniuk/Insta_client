import * as React from 'react';
import { observer } from 'mobx-react';

import './ProfileControlPanel.scss';
import { UserProfileResponse } from '../../types/user.types';

interface AppProps {
  data: UserProfileResponse;
}

@observer
export class ProfileControlPanel extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }
  renderLoader() {
    return <div className="loader">Loading...</div>;
  }

  renderComponent() {
    const {username} = this.props.data;
    return(
      <div className="profile-control-panel">
        <div className="profile-control-panel__user-nickName">
          {username}
        </div>
        <div className="profile-control-panel__edit-profile">
          Редактировать профиль
        </div>
        <div className="profile-control-panel__profile-settings">
          &#9881;
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