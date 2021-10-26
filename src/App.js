import React from 'react'
import Header from './Components/Basic/Header'
import Footer from './Components/Basic/Footer'
import { NotFoundPage, Dashboard, HomePage } from './Components/AllPages'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './Components/Utils/ProtectedRoute'
import routes from './config/routes'
import './app.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'

const routesFromConfig = routes.map((curRoute) => (
  <Route
    key={curRoute.path}
    path={curRoute.path}
    component={curRoute.component}
  />
))

const routesList = [
  <Route key="/" path="/" exact component={HomePage} />,
  ...routesFromConfig,
  <ProtectedRoute key="/dashboard" path="/dashboard" component={Dashboard} />,
  <Route key="notfound" component={NotFoundPage} />,
]

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="text-l2 App mx-0 h-screen flex flex-col">
          <Header />
          <SkeletonTheme
            baseColor="#d8c4aa"
            highlightColor="#2D1806"
            // borderRadius="0.5rem"
            // duration={4}
          >
            <main className="flex-1 overflow-y-auto z-30">
              <Switch>{routesList}</Switch>
            </main>
          </SkeletonTheme>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
