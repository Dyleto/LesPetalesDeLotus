export default function ({ store, redirect, route }) {
  const user = store.state.users.user
  const publicRoutes = ['/login', '/register']
  if (!user && !publicRoutes.includes(route.path)) {
    redirect('/login')
  } else if (user && publicRoutes.includes(route.path)) {
    redirect('/')
  }
}
