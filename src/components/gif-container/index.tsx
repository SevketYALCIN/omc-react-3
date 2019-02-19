import * as React from 'react';
import { Gif } from '../../AppState';
import { Button } from '../../../node_modules/semantic-ui-react';
import { connect } from 'react-redux';
import { UserState, UsersAction } from '../../redux/reducers/userReducer';
import { addToLibrary } from '../../redux/actions/userActions';
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
    {props.user && <Button onClick={() => props.addToLibrary(props.embed_url)}>Add to library</Button>}
  </div>
);

export const mapDispatchToProps = (dispatch: Dispatch<UsersAction>) =>
bindActionCreators(
  {
    addToLibrary: addToLibrary
  },
  dispatch
);

const mapStateToProps = (state: UserState) => ({
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(GifContainer);
