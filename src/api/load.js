import {store} from '../store';
import {initializeActions} from '../ducks/initialize';
export default async () => {
  await window.gapi && window.gapi.load('auth2:client', initGAPI);
}

const initGAPI = async () => {
  const {gapi} = window;
  await gapi.client.init({
    apiKey: process.env.REACT_APP_API_KEY,
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: 'https://www.googleapis.com/auth/photoslibrary'
  });
  store.dispatch(initializeActions.initializeSuccess());
};
