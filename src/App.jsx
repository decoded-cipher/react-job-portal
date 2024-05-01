
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import GeneralLayout from './layouts/GeneralLayout'
import EmptyLayout from './layouts/EmptyLayout'

import Home from './views/Home'
import Jobs from './views/Jobs'
import AddJob from './views/AddJob'
import SingleJob from './views/SingleJob'
import NotFound from './views/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route element={<GeneralLayout />}>,
        <Route index element={<Home />} />,
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/add-job' element={<AddJob />} />
        <Route path='/job/:id' element={<SingleJob />} />
      </Route>

      <Route element={<EmptyLayout />}>
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