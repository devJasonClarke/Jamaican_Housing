export default async function({ redirect }) {
  let user = localStorage.getItem("loggedIn");
  if (user == "false") {
    return redirect("/login");
  }
}
