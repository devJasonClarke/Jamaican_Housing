export default async function({ redirect }) {
  let role = localStorage.getItem("role");

  if (role !== "admin") {
    return redirect("/dashboard");
  }
}
