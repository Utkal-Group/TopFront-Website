'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

export default function Jobapplication() {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    dateOfBirth: '',
    currentLocation: '',
    totalWorkExperience: '',
    currentAnnualSalary: '',
    jobLookingFor: '',
    resume: null as File | null,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-5xl mx-auto p-5 overflow-hidden  bg-white shadow rounded-lg mt-5">
      <h2 className="text-lg font-bold text-center mb-6 text-gray-800">
        {`Didn't`} find what you were looking for? We are always on the lookout for talented folks to join our team. Fill the form given below and we will get back to you when there is a relevant vacancy.
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone/Mobile*</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              placeholder="Telephone/Mobile"
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              placeholder="Your email ID"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date Of Birth*</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              required
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>

          {/* Current Location */}
          <div>
            <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700">Current Location</label>
            <input
              type="text"
              id="currentLocation"
              required
              name="currentLocation"
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              placeholder="Current Location"
              value={formData.currentLocation}
              onChange={handleInputChange}
            />
          </div>

          {/* Total Work Experience */}
          <div>
            <label htmlFor="totalWorkExperience" className="block text-sm font-medium text-gray-700">Total Work Experience*</label>
            <select
              id="totalWorkExperience"
              name="totalWorkExperience"
              required
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              value={formData.totalWorkExperience}
              onChange={handleInputChange}
            >
              <option value="">Select the experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          {/* Current Annual Salary */}
          <div>
            <label htmlFor="currentAnnualSalary" className="block text-sm font-medium text-gray-700">Current Annual Salary</label>
            <input
              type="text"
              id="currentAnnualSalary"
              required
              name="currentAnnualSalary"
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              placeholder="Current Annual Salary"
              value={formData.currentAnnualSalary}
              onChange={handleInputChange}
            />
          </div>

          {/* Job Looking For */}
          <div>
            <label htmlFor="jobLookingFor" className="block text-sm font-medium text-gray-700">Job Looking For</label>
            <input
              type="text"
              id="jobLookingFor"
              required
              name="jobLookingFor"
              className="mt-2 block w-full rounded-lg border-green-600 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out"
              placeholder="Enter the Job you are looking for"
              value={formData.jobLookingFor}
              onChange={handleInputChange}
            />
          </div>

          {/* Resume */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume*</label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
              className="mt-2 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-green-50 file:text-green-700
                hover:file:bg-green-100 transition-all duration-300 ease-in-out"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}