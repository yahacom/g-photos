export default async (body) => {
  try {
    const response = await window.gapi.client.request({
      path: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
      method: 'POST',
      body: JSON.stringify(body)
    });
    const {mediaItems} = await response.result;
    return mediaItems;
  } catch (error) {
    console.error(error);
  }
};
