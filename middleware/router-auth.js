export default function ({ store, redirect, route }) {
  const isLogged = store.getters['users/isLogged']
  const publicRoutes = ['login', 'register']
  if (!isLogged && !publicRoutes.includes(route.name)) {
    redirect('/login')
  } else if (isLogged && publicRoutes.includes(route.name)) {
    redirect('/')
  }
}
