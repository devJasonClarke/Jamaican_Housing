export default async function({ store, redirect }) {
console.log(store.state.profile);
    if (store.state.profile.profile.role != 'admin' || !store.state.profile.profile.verified) {
        return redirect("/dashboard");
    } 
  }
  