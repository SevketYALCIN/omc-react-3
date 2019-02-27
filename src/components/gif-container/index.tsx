import * as React from 'react';
import { Gif } from '../../AppState';
import { Button } from '../../../node_modules/semantic-ui-react';
import { connect } from 'react-redux';
import { UserState, UsersAction } from '../../redux/reducers/userReducer';
import { addToLibrary, removeFromLibrary } from '../../redux/actions/userActions';
import { Dispatch, bindActionCreators } from '../../../node_modules/redux';

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
    {(props.user && !props.gifs.includes(props.embed_url)) && <Button onClick={() => props.addToLibrary(props.embed_url)}>Add to library</Button>}
    {(props.user && props.gifs.includes(props.embed_url)) && <Button onClick={() => props.removeFromLibrary(props.embed_url)}>Remove from library</Button>}
  </div>
);

export const mapDispatchToProps = (dispatch: Dispatch<UsersAction>) =>
bindActionCreators(
  {
    addToLibrary: addToLibrary,
    removeFromLibrary: removeFromLibrary
  },
  dispatch
);

const mapStateToProps = (state: UserState) => ({
  user: state.user,
  gifs: state.gifs
});

export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);
