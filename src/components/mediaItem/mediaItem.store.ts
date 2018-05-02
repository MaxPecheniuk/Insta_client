import { action, computed, observable } from 'mobx';
import { MediaTypes } from '../../types/media.types';
import { commentItemProvider, mediaItemProvider } from './mediaItem.provider';
import { CommentTypes } from '../../types/comment.types';

export class MediaItemStore {
  @observable
  private _mediaItem: MediaTypes;

  @observable
  private _comments: Array<CommentTypes> = [];

  @observable
  private _errorMessage: string;

  @computed
  get mediaItem(): MediaTypes {
    return this._mediaItem;
  }

  @computed
  get comments(): Array<CommentTypes> {
    return this._comments;
  }

  @computed
  get errorMessage(): string {
    return this._errorMessage;
  }

  getData(id: string): void {
    this.fetchMediaItem(id);
    this.fetchComment(id);
  }

  private fetchMediaItem(id: string): void {
    mediaItemProvider
      .fetchMediaItem(id)
      .then(this.updateMediaItem)
      .catch(action((e: XMLHttpRequest) => {
        this._errorMessage = e.statusText;
        throw new Error(e.statusText);
      }));
      }
  private fetchComment(id: string): void {
    commentItemProvider
      .fetchComment(id)
      .then(action((comments: Array<CommentTypes>) => this._comments = comments))
      .catch(action((e: XMLHttpRequest) => {
        this._errorMessage = e.statusText;
        throw new Error(e.statusText);
      }));
  }

  @action
  private updateMediaItem = (mediaItem: MediaTypes) => {
    this._mediaItem = mediaItem;
  }
}

export const mediaItemStore = new MediaItemStore();