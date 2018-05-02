import { action, observable } from 'mobx';
import { UserProvider } from '../providers/user.provider';
import { UserProfileResponse } from '../types/user.types';

export class AppStore {
  @observable
  userData: UserProfileResponse;

  // @observable
  // userName: string;
  //
  // @observable
  // mediaCount: number;
  //
  // @observable
  // followCount: number;
  //
  // @observable
  // followByCount: number;
  //
  @observable
  profilePicture: string;

  @observable
  fullName: string;

  @observable
  profileBio: string;

  @observable
  profileWebsite: string;

  private _provider: UserProvider;

  constructor(provider: UserProvider) {
    this._provider = provider;
  }

  public init(): void {
    const resp = this._provider.getUserInfo();
    resp
      .then(this.updateUserData.bind(this))
      .catch((e) => {
       console.error(e);
      });

  }

  @action
  private updateUserData(userProfile: UserProfileResponse) {
    this.userData = userProfile;
    // this.userName = userProfile.username;
    // this.followByCount = userProfile.counts.followed_by;
    // this.followCount = userProfile.counts.follows;
    this.profilePicture = userProfile.profile_picture;
    this.fullName = userProfile.full_name;
    this.profileBio = userProfile.bio;
    this.profileWebsite = userProfile.website;
    // this.mediaCount = userProfile.counts.media;

  }
}