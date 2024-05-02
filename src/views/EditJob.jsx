
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditJob = ({ editJob }) => {

  const { id } = useParams();
  const navigate = useNavigate()

  let jobTypes = [
    { id: 1, name: 'Full-Time' },
    { id: 2, name: 'Part-Time' },
    { id: 3, name: 'Remote' },
    { id: 4, name: 'Internship' }
  ]

  let salaryRanges = [
    { id: 1, name: 'Under $50K' },
    { id: 2, name: '$50K - 60K' },
    { id: 3, name: '$60K - 70K' },
    { id: 4, name: '$70K - 80K' },
    { id: 5, name: '$80K - 90K' },
    { id: 6, name: '$90K - 100K' },
    { id: 7, name: '$100K - 125K' },
    { id: 8, name: '$125K - 150K' },
    { id: 9, name: '$150K - 175K' },
    { id: 10, name: '$175K - 200K' },
    { id: 11, name: 'Over $200K' }
  ]

  useEffect(() => {
    try {
      fetch(`/api/jobs/${id}`)
        .then(response => response.json())
        .then(data => setData({
          title: data.title,
          type: data.type,
          description: data.description,
          salary: data.salary,
          location: data.location,
          company_name: data.company.name,
          company_description: data.company.description,
          company_contactEmail: data.company.contactEmail,
          company_contactPhone: data.company.contactPhone
        }))
    } catch (error) {
      console.error(error)
    }
  }, [id])

  const [data, setData] = useState({

    title: '',
    type: '',
    description: '',
    salary: '',
    location: '',
    company_name: '',
    company_description: '',
    company_contactEmail: '',
    company_contactPhone: ''
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editJob({ ...data }, id)
    navigate('/')
  }
  

  return (
    <>

      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div
            className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
          >
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">Add New Job</h2>

              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
                >
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  value={data.type}
                  onChange={handleChange}
                  required
                >
                  {jobTypes.map((type) => (
                    <option key={type.id} value={type.name}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
                >
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  value={data.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >Description</label
                >
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={data.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
                >
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  value={data.salary}
                  onChange={handleChange}
                  required
                >
                  {salaryRanges.map((salary) => (
                    <option key={salary.id} value={salary.name}>{salary.name}</option>
                  ))}
                </select>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='Company Location'
                  value={data.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
                >
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={data.company_name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >Company Description</label
                >
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={data.company_description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
                >
                <input
                  type="email"
                  id="company_contactEmail"
                  name="company_contactEmail"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  value={data.company_contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
                >
                <input
                  type="tel"
                  id="company_contactPhone"
                  name="company_contactPhone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={data.company_contactPhone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default EditJob