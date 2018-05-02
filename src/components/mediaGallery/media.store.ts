import { action, computed, observable } from 'mobx';
import { MediaTypes } from '../../types/media.types';
import { mediaGalleryProvider } from './mediaGallery.provider';

export class MediaStore {

  @observable
  private _mediaData: Array<MediaTypes> = [];

  @observable
  private _errorMessage: string;

  @computed
  get errorMessage(): string {
    return this._errorMessage;
  }

  @computed
  get media(): Array<MediaTypes> {
    return this._mediaData;
  }

  getData(): void {
    this.fetchMediaData();
  }

  private fetchMediaData(): void {
    mediaGalleryProvider
      .fetchMediaList()
      .then(action((media: Array<MediaTypes>) => {
        this._mediaData = media;
      }))

      .catch(action((e: XMLHttpRequest) => {
        this._errorMessage = e.statusText;
        throw new Error(e.statusText);
      }));
  }
}
export const mediaStore = new MediaStore();