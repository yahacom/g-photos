export default async () => {
  try {
    const response = await window.gapi.client.request({
      path: 'https://photoslibrary.googleapis.com/v1/albums',
      method: 'GET'
    });
    const {albums} = await response.result;
    return albums;
  } catch (error) {
    console.error(error);
  }
};
