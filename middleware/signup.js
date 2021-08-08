export default function({ app, redirect }) {
  app.$fireModule.auth().onAuthStateChanged(user => {
    if (user) {
         return redirect({ name: "dashboard" });
    }
  });
}
