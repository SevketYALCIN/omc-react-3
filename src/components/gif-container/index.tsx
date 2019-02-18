import * as React from 'react';
import { Gif } from '../../AppState';
import { Button } from '../../../node_modules/semantic-ui-react';
import { connect } from 'react-redux';
import { UserState } from '../../redux/reducers/userReducer';

const GifContainer = (props: Gif) => (
  <div>
    <h2>{props.title}</h2>
    <iframe
      src={props.embed_url}
      width="480"
      height="360"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    />
    <AddButton user={props.user || ""}/>
  </div>
);

const AddButton = (props: {user: string}) => {
  return (props.user ? <Button>Add to library</Button> : null);
};

const mapStateToProps = (state: UserState) => ({
  user: state.user
});

export default connect(mapStateToProps)(GifContainer);
