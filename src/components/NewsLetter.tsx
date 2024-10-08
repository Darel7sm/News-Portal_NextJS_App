'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

    const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault()

      setShowSuccess(true)
      setEmail('')
      setTimeout(() => setShowSuccess(false), 3000)
    }

  return (
    <section className="bg-gray-800 text-white dark:bg-gray-800 dark:text-white py-12 rounded">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="mt-4 text-lg">
          Subscribe to our newsletter and get the latest updates directly in
          your inbox.
        </p>

        <form onSubmit={handleSubscribe} className="mt-8 sm:max-w-sm mx-auto sm:flex sm:justify-center">
          <div className="flex-1 sm:flex-shrink-0">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-64 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <Button className="w-full sm:w-auto dark:bg-primary dark:hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </form>
        {showSuccess && (
          <div className="mt-4 bg-green-500 text-white p-3 rounded-lg">
            You successfully subscribe to DNN newsletter!
          </div>
        )}
      </div>
    </section>
  )
}

export default NewsLetter