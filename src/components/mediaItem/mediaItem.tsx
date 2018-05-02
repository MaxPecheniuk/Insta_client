import * as React from 'react';
import { match } from 'react-router';
import { observer } from 'mobx-react';
import { mediaItemStore } from './mediaItem.store';
import { CommentItem } from './commentItem';

import './mediaItem.scss';
import { Link } from 'react-router-dom';

interface Props {
  match?: match<{ id: string }>;
}

@observer
export class MediaItems extends React.Component<Props> {
  componentDidMount() {
    const id = this.props.match!.params.id;
    mediaItemStore.getData(id);
  }

  render() {
    // const test = mediaItemStore.comments.map((comment, i) => {
    //   return <div className="test" key={i}>comment={comment.from}</div>;
    // });

    let MediaItemComponent = <div/>;
    if (mediaItemStore.mediaItem !== undefined) {
      MediaItemComponent = (
        <div className="media-item-component">
          <div className="media-img">
            <img src={mediaItemStore.mediaItem.images.standard_resolution.url}/>
          </div>

          <div className="media-details">

            <div className="media-details__user-profile">

              <div className="profile-picture">
                <Link to="/">
                  <img src={mediaItemStore.mediaItem.user.profile_picture} alt=""/>
                </Link>
              </div>

              <div className="media-details__username">
                <div>{mediaItemStore.mediaItem.user.username}</div>
              </div>
            </div>

            <div className="media-details__like-count">
              {mediaItemStore.mediaItem.likes.count} отметок «Нравится»
            </div>

            <div className="media-details__comments">
              {mediaItemStore.comments.map((comment, i) => <CommentItem key={i} comment={comment}/>)}
            </div>

            {/*<CommentItem>*/}
              {/*{test}*/}
            {/*</CommentItem>*/}
          </div>
        </div>
      );
    }
    return (
      <div>
        {MediaItemComponent}
      </div>
    );
  }
}