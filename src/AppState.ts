import { login } from "./redux/actions/userActions"
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

export interface Gif extends UserState {
  id: string;
  title: string;
  embed_url: string;
}