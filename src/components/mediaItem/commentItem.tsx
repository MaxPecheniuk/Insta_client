import * as React from 'react';
import { CommentTypes } from '../../types/comment.types';
// import { ReactNode } from 'react';

interface CommentItemProps {
  comment: CommentTypes;
  // children?: ReactNode;
}

export class CommentItem extends React.Component<CommentItemProps> {
  render() {
    return(
      <div className="media-details__comments_item">
        <div className="comments_item__author">{this.props.comment.from.username}</div>
        <div className="comments_item__message">{this.props.comment.text}</div>
      </div>

    );
  }
}

// export const CommentItem: React.SFC<CommentItemProps> = (props: CommentItemProps) =>{
//   const children = React.Children.map(props.children, () => {
//     return React.cloneElement<any, CommentItemProps>(child as any, props);
//   });
//   retutn (
//     <div>
//       {children}
//     </div>
//   );
// };