'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Success = () => {
  const router = useRouter()

  return (
    <div className="text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center max-sm:text-center">
      <h1 className="text-4xl font-bold mb-4 max-sm:text-2xl">
        Application Sent Successfully!
      </h1>
      <p className="text-lg mb-6 py-3 max-sm:py-7">
        Thank you for applying. We will review your application and get back to
        you soon.
      </p>
      <button
        className="px-4 py-2 bg-gray-900 dark:bg-gray-600 hover:bg-gray-950 dark:hover:bg-gray-950 text-white rounded"
        onClick={() => router.push('/careers')}>
        Back to Careers
      </button>
    </div>
  )
}

export default Success
