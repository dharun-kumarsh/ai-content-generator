"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, ChevronRight, Copy, MessageCircle, Settings2, User } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function LandingPage() {

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/dashboard')
  }
  return (
    <div className='select-none bg-gradient-to-r from-orange-400 via-white to-green-400 bg-inherit'>
      {/* <div className='inset-0 opacity-10'>
        <Image src={'/hexagon.svg'} alt='pattern' width={100} height={100} />
      </div> */}
      <div className='bg-slate-100 shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
          <Image src={'/logo.svg'} alt='Logo' height={150} width={150} />
          <Button onClick={handleNavigation} className='hover:scale-110 transition-all'><User />Get Started</Button>
        </div>
      </div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-semibold tracking-tight'>AI Content <span className='text-primary'>Generator</span></h1>
        <p className='text-lg text-gray-600 mx-auto max-w-2xl mt-6'>Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.</p> <br />
        <Button size="lg" onClick={handleNavigation} className=' p-6 w-auto text-md font-medium hover:scale-110 transition-all'>Get Started<ChevronRight className='ml-2 h-4 w-4' /></Button>
      </div>
      {/* Features Section */}
      <section className='py-24'>
        <div className=''>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col items-center text-center hover:scale-110 transition-all duration-500 hover:border rounded-2xl p-5 shadow-lg hover:shadow-2xl'>
              <div className='mb-6 rounded-2xl bg-blue-600 p-4 text-white'>
                <Copy className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>25+ Templates</h3>
              <p className="text-gray-600">Responsive, and <br /> mobile-first project templates</p>
            </div>
            <div className='flex flex-col items-center text-center hover:scale-110 transition-all duration-500 rounded-2xl p-5 shadow-lg hover:shadow-2xl'>
              <div className='mb-6 rounded-2xl bg-blue-600 p-4 text-white'>
                <Settings2 className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Customizable</h3>
              <p className="text-gray-600">Components are easily customized <br /> and extendable</p>
            </div>
            <div className='flex flex-col items-center text-center hover:scale-110 transition-all duration-500 hover:shadow-2xl rounded-2xl p-5 shadow-lg'>
              <div className='mb-6 rounded-2xl bg-blue-600 p-4 text-white'>
                <BookOpen className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>Free to Use</h3>
              <p className="text-gray-600">Every component and <br /> plugin is well documented</p>
            </div>
            <div className='flex flex-col items-center text-center hover:scale-110 transition-all duration-500 hover:shadow-2xl rounded-2xl p-5 shadow-lg'>
              <div className='mb-6 rounded-2xl bg-blue-600 p-4 text-white'>
                <MessageCircle className='h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>24/7 Support</h3>
              <p className="text-gray-600">Contact us 24 hours a day, <br /> 7 days a week</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage