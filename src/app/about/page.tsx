import Image from 'next/image'
import React from 'react'
import image from '@/assets/pexels-brotin-biswas-158640-518543.jpg'

const AboutPage = () => {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold py-8">About Us</h1>
      <div className="flex justify-between place-items-center gap-4">
        <div className="mt-5 grid gap-4 w-3/4 max-sm:w-full">
          <p>
            Welcome to Darel News Network(DNN) – your trusted source for the
            latest news and stories that matter, both in South Africa and around
            the world.
          </p>
          <p>
            Founded in the heart of South Africa, DNN is committed to delivering
            accurate, timely, and insightful news to keep you informed and
            engaged. We believe in the power of journalism to shine a light on
            truth and provide a voice to those who need to be heard.
          </p>
          <p>
            At DNN, we aim to bridge local and global perspectives, offering a
            platform that not only reports on the stories of today but also
            provides the context and analysis necessary to understand tomorrow’s
            world. Our dedicated team of journalists and reporters work
            tirelessly to cover a wide range of topics, from politics and
            business to culture and human interest stories, ensuring that you
            stay informed on all fronts.
          </p>
          <p>
            We take pride in our South African roots and embrace our role in the
            global media landscape. Our mission is to empower readers with
            knowledge, promote transparency, and uphold the highest standards of
            integrity in every story we share.
          </p>
          <p>
            <span className='font-bold'>DNN:</span> Your World, Your News.
          </p>
        </div>
        <div className='max-sm:hidden'>
          <Image src={image} width={800} height={1200} alt="Darel News Network Logo" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage