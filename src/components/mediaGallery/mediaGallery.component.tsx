import * as React from 'react';
import { observer } from 'mobx-react';
import { mediaStore } from './media.store';
import { MediaList } from './mediaList';

import './mediaGallery.scss';

@observer
export class MediaGalleryComponent extends React.Component {
  componentDidMount() {
    mediaStore.getData();
  }

  render() {
    return (
      <div className="media-gallery">
        {mediaStore.media.map((media) => <MediaList key={media.id} mediaItem={media}/>)}
      </div>

    );
  }
}