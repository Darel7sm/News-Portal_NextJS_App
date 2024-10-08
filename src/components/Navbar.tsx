'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'
import { Switch } from '@/components/ui/switch'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { ThemeContext } from '@/context/themeContext'
import { useState, useContext } from 'react'
import logo from '@/assets/dnn-logo.png'
import gray_logo from '@/assets/logo-gray.png'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import { SignedIn, SignedOut, useUser, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isSignedIn } = useUser()
  const router = useRouter()
  const pathname = usePathname()

  const handleLoginClick = () => {
    router.push('/sign-in')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState)
  }

  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext)

  return (
    <header
      className={`py-4 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md transition-colors duration-300`}>
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-10">
        <div className="text-xl max-sm:w-2/3 max-sm:mb-5">
          <Link href="/">
            {!isDarkMode ? (
              <Image
                src={logo}
                alt="Darel News Network"
                width={200}
                height={100}
                priority
              />
            ) : (
              <Image
                src={gray_logo}
                alt="Darel News Network"
                width={200}
                height={100}
                priority
              />
            )}
          </Link>
        </div>

        {/* desktop navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${
                  pathname === '/careers' ? 'text-red-500 font-semibold' : ''
                } hover: text-gray-600`}>
                News
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2 w-full">
                    <li className="w-full">
                      <NavigationMenuLink
                        href="/za-news"
                        className={`${
                          pathname === '/za-news'
                            ? 'text-red-500 font-semibold'
                            : ''
                        } hover: text-gray-600`}>
                        Local
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink
                        href="/news"
                        className={`${
                          pathname === '/news'
                            ? 'text-red-500 font-semibold'
                            : ''
                        } hover: text-gray-600`}>
                        Global
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/careers"
                className={`${
                  pathname === '/careers' ? 'text-red-500 font-semibold' : ''
                } hover: text-gray-600`}>
                Careers
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === '/about' ? 'text-red-500 font-semibold' : ''
                } hover: text-gray-600`}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === '/contact' ? 'text-red-500 font-semibold' : ''
                } hover: text-gray-600`}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <Button
                variant="default"
                className="px-6"
                onClick={handleLoginClick}>
                Login
              </Button>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none bg-gray-900 p-2 text-white dark:border-2">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          } shadow-md`}>
          <div className="flex flex-col items-center py-4 space-y-4 bg-gray-400 ">
            <Link
              href="/news"
              onClick={toggleMobileMenu}
              className={`${
                pathname === '/news'
                  ? 'text-red-500 font-semibold'
                  : 'text-gray-700'
              }`}>
              Global News
            </Link>
            <Link
              href="/za-news"
              onClick={toggleMobileMenu}
              className={`${
                pathname === '/news'
                  ? 'text-red-500 font-semibold'
                  : 'text-gray-700'
              }`}>
              Local News
            </Link>
            <Link
              href="/careers"
              onClick={toggleMobileMenu}
              className={`${
                pathname === '/careers'
                  ? 'text-red-500 font-semibold'
                  : 'text-gray-700'
              }`}>
              Careers
            </Link>
            <Link
              href="/about"
              onClick={toggleMobileMenu}
              className={`${
                pathname === '/about'
                  ? 'text-red-500 font-semibold'
                  : 'text-gray-700'
              }`}>
              About
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className={`${
                pathname === '/contact'
                  ? 'text-red-500 font-semibold'
                  : 'text-gray-700'
              }`}>
              Contact
            </Link>

            <div
              onClick={toggleTheme}
              className="flex items-center cursor-pointer space-x-2">
              <span>Dark Mode</span>
              <Switch />
            </div>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <Button
                  variant="default"
                  className="px-6"
                  onClick={handleLoginClick}>
                  Login
                </Button>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
