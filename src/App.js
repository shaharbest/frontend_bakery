import React from 'react'
import Header from './Components/Basic/Header'
import Footer from './Components/Basic/Footer'
import { NotFoundPage, Dashboard, HomePage } from './Components/AllPages'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './Components/Utils/ProtectedRoute'
import routes from './config/routes'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="text-l2 App mx-0 h-screen flex flex-col">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Switch>
              <Route path="/" exact component={HomePage} />
              {routes.map((curRoute) => (
                <Route
                  key={curRoute.path}
                  path={curRoute.path}
                  component={curRoute.component}
                />
              ))}
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
