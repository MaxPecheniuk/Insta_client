import * as React from 'react';
import { MediaTypes } from '../../types/media.types';
import { Link } from 'react-router-dom';

interface MediaItemProps {
  mediaItem: MediaTypes;
}

export class MediaList extends React.Component<MediaItemProps> {

  render() {
    return (
      <div className="media-gallery__media-item">
        <Link to={'/details/' + this.props.mediaItem.id}>
          <img src={this.props.mediaItem.images.low_resolution.url} alt=""/>
        </Link>
      </div>
    );
  }
}