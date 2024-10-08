import React, { useState } from 'react'

interface ModalProps {
  closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    if (
      selectedFile &&
      (selectedFile.type === 'application/pdf' ||
        selectedFile.type.includes('msword'))
    ) {
      setFile(selectedFile)
    } else {
      setFile(null)
      alert('Only .pdf or .doc files are allowed.')
    }
  }

  const handleSubmit = () => {
    if (file) {
      closeModal()
      window.location.href = '/success'
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-gray-900 p-8 rounded-lg w-96 max-sm:w-11/12">
        <h2 className="text-xl font-semibold mb-4">Apply for the Job</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4"
          accept=".pdf, .doc, .docx"
        />
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 rounded ${
            file ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
          } text-white`}
          disabled={!file}>
          Send Application
        </button>
        <button
          onClick={closeModal}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Modal
