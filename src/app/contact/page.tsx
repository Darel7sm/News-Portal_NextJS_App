'use client'

import React, { useState } from 'react'

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setShowSuccess(true)

    setName('')
    setEmail('')
    setMessage('')

    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-900 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-900 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send
        </button>
      </form>

      {showSuccess && (
        <div className="mt-4 bg-green-500 text-white p-3 rounded-lg">
          Message sent successfully!
        </div>
      )}
    </div>
  )
}

export default ContactPage
