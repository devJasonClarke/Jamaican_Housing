export default async function({ app, redirect }) {
  let user = localStorage.getItem("loggedIn");
  if (user == "false") {
    return redirect("/login");
  }

  /*   app.$fireModule.auth().onAuthStateChanged(user => {
    if (user) {
 
    } else {
      return redirect("/login");
    }
  }); */
}
