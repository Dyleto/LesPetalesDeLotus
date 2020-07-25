export default function ({ store, route, redirect }) {
  const user = store.state.users.user
  console.log(user)
  const publicRoutes = ['/signin', '/signup']

  if (!user && !publicRoutes.includes(route.path)) {
    redirect('/signin')
  }
}
