'use client'

import React, { useState } from 'react'
import { jobOpenings } from '@/app/jobs'
import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'

interface JobPostProps {
  params: { id: string }
}

const JobPost = ({ params }: JobPostProps) => {
  const router = useRouter()
  const { id } = params
  const job = jobOpenings[Number(id)]

  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="text-gray-900 min-h-screen p-8 w-3/4 max-sm:w-full dark:text-white">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="mt-4">{job.description}</p>
      <h3 className="text-xl font-bold pt-8 pb-2">Education</h3>
      <p>{job.education}</p>
      <h3 className="text-xl font-bold pt-8 pb-2">Experience</h3>
      <p>{job.experience}</p>
      <h3 className="text-xl font-bold pt-8 pb-2">Skills</h3>
      <p>
        {job.hardSkills}
        <br /><br />
        {job.softSkills}
      </p>
      <button
        className="mt-6 px-4 py-2 bg-gray-900 dark:border-2 hover:bg-gray-500 text-white rounded"
        onClick={openModal}>
        Apply Now
      </button>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default JobPost
