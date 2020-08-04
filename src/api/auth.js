export default async () => {
  const {gapi} = window;
  const authInstance = gapi.auth2.getAuthInstance();
  return await authInstance.signIn();
}
