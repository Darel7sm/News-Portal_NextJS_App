'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai'
import logo from '@/assets/logo-gray.png'
import { useState } from 'react'
import { Input } from './ui/input'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const current_year = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    setShowSuccess(true)
    setEmail('')
    setTimeout(() => setShowSuccess(false), 3000)
  }
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-8 text-white px-10">
      <div className="grid">
        <div className="flex justify-between max-lg:grid">
          <div className="max-lg:items-start max-lg:justify-start">
            <Image
              src={logo}
              alt="Darel News Network"
              width={180}
              height={180}
              priority
            />
          </div>

          <div className="flex space-x-6 text-gray-600 dark:text-gray-400 max-lg:grid max-lg:space-x-0 max-lg:py-5 ">
            <a
              href="/about"
              className="hover:text-gray-100 dark:hover:text-white">
              {' '}
              About Us
            </a>
            <a
              href="/careers"
              className="hover:text-gray-100 dark:hover:text-white">
              {' '}
              Careers
            </a>
            <a
              href="/contact"
              className="hover:text-gray-100 dark:hover:text-white">
              {' '}
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-gray-100 dark:hover:text-white">
              {' '}
              Privacy Policy
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-100 dark:hover:text-white">
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-100 dark:hover:text-white">
              <AiOutlineInstagram size={24} />
            </a>
            <a
              href="https://github.com"
              aria-label="Github"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-100 dark:hover:text-white">
              <AiOutlineGithub size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between max-lg:grid">
          <div className="flex-1 sm:flex-shrink-0 max-lg:grid max-lg:gap-1">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-64 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
            <Button
              variant="outline"
              className="mt-4 text-gray-900 hover:text-red-600 dark:bg-gray-900 dark:text-white flex justify-end text-center max-lg:w-fit"
              disabled={!email}
              onClick={handleSubscribe}>
              Subscribe
            </Button>
          </div>
          <div>
            {showSuccess && (
              <div className="max-sm:mb-5 mt-4 bg-green-500 text-white p-3 rounded-lg">
                You successfully subscribe to DNN newsletter!
              </div>
            )}
          </div>
        </div>
        <p className="text-white text-center pt-5">
          &copy; {current_year} | Darel News Network. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
