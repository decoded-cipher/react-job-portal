
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import GeneralLayout from './layouts/GeneralLayout'
import EmptyLayout from './layouts/EmptyLayout'

import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/' element={<GeneralLayout />}>,
        <Route index element={<Home />} />,
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>

      <Route path='*' element={<EmptyLayout />}>
        <Route path='*' element={<NotFound />} />
      </Route>

    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App