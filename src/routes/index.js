import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage, FilmPage } from '../pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route render={(props) => <FilmPage {...props} />} path={`/film/:id`} />
          <Route render={(props) => <HomePage {...props} />} path={`/`} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
