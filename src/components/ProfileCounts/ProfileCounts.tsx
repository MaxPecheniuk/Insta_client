import * as React from 'react';
import { observer } from 'mobx-react';
import './ProfileCounts.scss';
import { UserProfileResponse } from '../../types/user.types';

interface AppProps {
  data: UserProfileResponse;
}

@observer
export class ProfileCounts extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  renderLoader() {
    return <div className="loader">Loading...</div>;
  }
  renderComponent() {
    const {counts} = this.props.data;
    return(
      <div className="profile-counts">

        <div className="profile-counts__container">
          <span className="profile-counts__container__counter">
            {counts.media + ' '}
            </span>публикаций
        </div>

        <div className="profile-counts__container">
          <span className="profile-counts__container__counter">
            {counts.followed_by + ' '}
          </span>подписчиков
        </div>

          <div className="profile-counts__container">
            Подписки:
            <span className="profile-counts__container__counter">
            {' ' + counts.follows}
            </span>

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