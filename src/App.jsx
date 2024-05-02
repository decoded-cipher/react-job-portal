
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import GeneralLayout from './layouts/GeneralLayout'
import EmptyLayout from './layouts/EmptyLayout'

import Home from './views/Home'
import Jobs from './views/Jobs'
import AddJob from './views/AddJob'
import SingleJob from './views/SingleJob'
import NotFound from './views/NotFound'

const App = () => {

  const addJob = async (data) => {

    let newJob = {
      title: data.title,
      type: data.type,
      location: data.location,
      description: data.description,
      salary: data.salary,
      company: {
        name: data.company_name,
        description: data.company_description,
        contactEmail: data.company_contactEmail,
        contactPhone: data.company_contactPhone
      }
    }

    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
  
        <Route element={<GeneralLayout />}>,
          <Route index element={<Home />} />,
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
          <Route path='/job/:id' element={<SingleJob />} />
        </Route>
  
        <Route element={<EmptyLayout />}>
          <Route path='*' element={<NotFound />} />
        </Route>
  
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App