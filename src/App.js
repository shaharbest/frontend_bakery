import React from 'react'
import Header from './Components/Basic/Header'
import Footer from './Components/Basic/Footer'
import { NotFoundPage, HomePage } from './Components/AllPages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './Components/Utils/ProtectedRoute'
import routes from './config/routes'
import './app.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'

const routesFromConfig = routes.map(curRoute =>
  curRoute.isProtected ? (
    <ProtectedRoute
      key={curRoute.path}
      path={curRoute.path}
      component={curRoute.component}
    />
  ) : (
    <Route
      key={curRoute.path}
      path={curRoute.path}
      component={curRoute.component}
    />
  )
)

const routesList = [
  <Route key="/" path="/" exact component={HomePage} />,
  ...routesFromConfig,
  <Route key="notfound" component={NotFoundPage} />,
]

function App() {
  return (
    <Router>
      <div className="App mx-0 h-screen flex flex-col">
        <Header />
        <SkeletonTheme
          baseColor="#d8c4aa"
          highlightColor="#2D1806"
          // borderRadius="0.5rem"
          // duration={4}
        >
          <main className="overflow-y-auto h-full p-2">
            <Switch>{routesList}</Switch>
          </main>
        </SkeletonTheme>
        <Footer />
      </div>
    </Router>
  )
}

export default App
