export default function({app, redirect }) {

  app.$fireModule.auth().onAuthStateChanged(user => {
    if (user) {
 
    } else {
      return redirect("/login");
    }
  });

}
