export default async () => {
  const {gapi} = window;
  const authInstance = gapi.auth2.getAuthInstance();
  await authInstance.signIn();
  const user = await authInstance.currentUser.get().getBasicProfile();
  return {
    name: user.getName(),
    email: user.getEmail(),
  };
}
