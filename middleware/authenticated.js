export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user.authenticated) {
    console.log(store.state.user.authenticated);
    return redirect("/login");
  } else {
    console.log(store.state.user.authenticated + " error");
  }
}
