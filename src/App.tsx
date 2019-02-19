import * as React from 'react';
import './App.css';
import {
  Container,
  Header,
  Input,
  Button,
  Modal
} from '../node_modules/semantic-ui-react';
import { AppState, Gif, AppProps } from './AppState';
import { ChangeEvent } from 'react';
import GifContainer from './components/gif-container';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

const apiKey = `5o7PjsuezPxksXHSm0Vp2QFTM34L50Pp`;

import { login } from './redux/actions/userActions';
import { UsersAction, UserState } from './redux/reducers/userReducer';

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchText: '',
      gifs: [],
      modalOpen: false
    };
  }

  updateSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.target.value });
  };

  fetchGifs = async () => {
    const request = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        this.state.searchText
      }&api_key=${apiKey}&limit=10`,
      {
        method: 'GET'
      }
    );
    const results = await request.json();
    this.setState({ gifs: results.data });
  };

  updateUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: e.target.value });
  };

  updateUser = () => {
    this.props.login(this.state.userInput || '');
    this.handleClose();
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Container>
        <Container className="header">
          <h1>GIF Library</h1>
          {!this.props.user && (
            <Modal
              trigger={<Button onClick={this.handleOpen}>Log-in</Button>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
            >
              <Modal.Header>Select a name</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Input
                    type="text"
                    onChange={this.updateUserInput}
                    value={this.state.userInput}
                  />
                  <Button
                    primary
                    style={{ marginLeft: '10px' }}
                    onClick={this.updateUser}
                  >
                    Log-in
                  </Button>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          )}
          {this.props.user && <div>Hello {this.props.user}</div>}
        </Container>
        <Container>
          <Input
            type="text"
            onChange={this.updateSearchText}
            value={this.state.searchText}
          />
          <Button
            primary
            style={{ marginLeft: '10px' }}
            onClick={this.fetchGifs}
          >
            Search
          </Button>
        </Container>
        <Container className="gifs">
          {this.state.gifs.map(gif => (
            <GifContainer
              key={gif.id}
              id={gif.id}
              title={gif.title}
              embed_url={gif.embed_url}
            />
          ))}
        </Container>
      </Container>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<UsersAction>) =>
  bindActionCreators(
    {
      login: login
    },
    dispatch
  );

export const mapStateToProps = (state: UserState, ownProps: {}) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
