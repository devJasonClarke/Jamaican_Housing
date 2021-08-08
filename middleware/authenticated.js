export default function({/*  store, */ app, redirect }) {

  // If the user is not authenticated
 /*  if (store.state.authentication.user === null) {
    console.log(store.state.authentication.user);
    return redirect("/login");
  }  */

  app.$fireModule.auth().onAuthStateChanged(user => {
    if (user) {
  //   console.log(`Middleware auth checker ${user}`)
    } else {
      return redirect("/login");
    }
  });

}
