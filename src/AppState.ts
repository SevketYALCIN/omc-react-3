import { login, addToLibrary } from "./redux/actions/userActions"
import { UserState } from "./redux/reducers/userReducer";

export interface AppState {
	searchText: string;
  gifs: Gif[];
  user?: string;
  userInput?: string;
  modalOpen: boolean;
}

export interface AppProps {
  login: typeof login
  user: string
}

export interface Gif {
  id: string;
  title: string;
  embed_url: string;
  readonly user: string;
  readonly addToLibrary: typeof addToLibrary;
}