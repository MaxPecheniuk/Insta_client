import { MediaTypes } from '../../types/media.types';
import { appConfigs } from '../../configs/configs';
import { BaseProvider } from '../../providers/base.provider';
import { CommentTypes } from '../../types/comment.types';

export class MediaItemProvider extends BaseProvider {
  fetchMediaItem(id: string): Promise<MediaTypes> {
    return this.get<MediaTypes>(`media/${id}?access_token=${appConfigs.token}`);
  }
}

export class CommentItemProvider extends BaseProvider {
  fetchComment(id: string): Promise<Array<CommentTypes>> {
    return this.get<Array<CommentTypes>>(`media/${id}/comments?access_token=${appConfigs.token}`);
  }
}
export const mediaItemProvider = new MediaItemProvider();
export const commentItemProvider = new CommentItemProvider();