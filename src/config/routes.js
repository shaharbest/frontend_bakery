import * as Pages from '../Components/AllPages'

const routes = [
  {
    path: '/about',
    component: Pages.AboutPage,
  },
  {
    path: '/contact',
    component: Pages.ContactPage,
  },
  {
    path: '/store',
    component: Pages.Store,
  },
  {
    path: '/store2',
    component: Pages.Store2,
  },
  {
    path: '/blog',
    component: Pages.BlogPage,
  },
  {
    path: '/login',
    component: Pages.LoginScreen,
  },
  {
    path: '/register',
    component: Pages.RegisterScreen,
  },
  {
    path: '/product/:id',
    component: Pages.Product,
  },
  {
    path: '/cart',
    component: Pages.CartPage,
  },
  {
    path: '/pay',
    component: Pages.PayPage,
    isProtected: true,
  },
  {
    path: '/admin',
    component: Pages.AdminPage,
    isProtected: true,
  },
  {
    path: '/profile',
    component: Pages.ProfileScreen,
    isProtected: true,
  },
]

export default routes
