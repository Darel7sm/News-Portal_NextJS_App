import React from 'react'
import Link from 'next/link'
import { jobOpenings } from '@/app/jobs'

const Careers = () => {
  return (
    <div className="text-gray-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 max-sm:text-xl dark:text-white">Welcome to DNN Careers</h1>
      <div className="mt-8">
        {jobOpenings.map((job, index) => (
          <div key={index} className="mb-8 w-2/4 max-sm:w-full border-2 rounded-md p-3">
            <h2 className="text-xl font-semibold dark:text-white">{job.title}</h2>
            <p className="mt-2 dark:text-white">{job.description.slice(0, 300)}...</p>
            <Link href={`/careers/job/${index}`} legacyBehavior>
              <a className="text-gray-400 hover:text-gray-900 mt-2 inline-block text-center">Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Careers
