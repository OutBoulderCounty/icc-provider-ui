import React from 'react';
import { Dialog, Transition } from "@headlessui/react"
import { HomeIcon, XIcon, ClipboardIcon } from "@heroicons/react/outline"
import { Routes, Route, Link } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

import Button from "./button"
import Error from "./error"
import NavBar, { navItem } from "./navBar"
import Forms from "./forms"

const navigation: navItem[] = [
  { name: "Dashboard", path: "/admin", Icon: HomeIcon, Link },
  {
    name: "Forms",
    path: "/admin/forms",
    Icon: ClipboardIcon,
    Link,
  },
]

const Home: React.FC = () => {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main>
  )
}

const queryClient = new QueryClient()

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [userIsAdmin, setUserIsAdmin] = React.useState(true)

  if (userIsAdmin) {
    return (
      <div className="h-screen flex bg-gray-100">
        <Transition.Root show={sidebarOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={React.Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        <div className="flex flex-col w-0 flex-1">
          <NavBar items={navigation} loggedIn={true} />
          <div className="overflow-y-scroll overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />}>
                {/* <Home /> */}
              </Route>
              {/* <Route path="/forms">
                <QueryClientProvider client={queryClient}>
                  <Forms />
                </QueryClientProvider>
              </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    )
  }

  const logoutFn = () => {
    console.log("should be logging out now")
    // TODO: logout
    return null
  }

  return (
    <>
      <Error message="User is not allowed to access the admin dashboard" />
      <div className="mx-auto max-w-lg">
        <div className="justify-around flex">
          <a href={process.env.REACT_APP_ICC_URL}>
            <Button color="violet">Go home</Button>
          </a>
          <Button color="violet" onClick={logoutFn}>
            Logout
          </Button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
