import { MediaTypes } from '../../types/media.types';
import { appConfigs } from '../../configs/configs';
import { BaseProvider } from '../../providers/base.provider';

export class MediaGalleryProvider extends BaseProvider {
  fetchMediaList(): Promise<Array<MediaTypes>> {
    return this.get<Array<MediaTypes>>(`users/self/media/recent/?access_token=${appConfigs.token}`);
  }
}

export const mediaGalleryProvider = new MediaGalleryProvider();