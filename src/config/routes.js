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
    path: '/email_login',
    component: Pages.SimpleEmailLogin,
  },
  {
    path: '/login',
    component: Pages.LoginScreen,
  },
  {
    path: '/signup',
    component: Pages.SignupPage,
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
  },
  {
    path: '/admin',
    component: Pages.AdminPage,
  },
  {
    path: '/profile',
    component: Pages.Profile,
  },
]

export default routes
