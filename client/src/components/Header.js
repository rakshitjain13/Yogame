import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/loginButton';
import { logoutUser } from '../redux/ActionCreator';

function Header() {
  const [isuseropen, Setuseropen] = useState(false);
  const [isnavbar, Setnavbar] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('here');
  console.log(state);
  return (
    <div>
      <nav class=''>
        <div class='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div class='relative flex items-center justify-between h-16'>
            <div class='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                class='inline-flex items-center justify-center p-2 rounded-md text-secondary-dark hover:text-secondary hover:bg-secondary-dark focus:outline-none '
                aria-expanded='false'
                onClick={() => Setnavbar(!isnavbar)}
              >
                <span class='sr-only'>Open main menu</span>
                {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  class='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  class='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div class='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <Link to='/' class='flex-shrink-0 flex items-center'>
                <img
                  class='block lg:hidden h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
                <img
                  class='hidden lg:block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                  alt='Workflow'
                />
              </Link>
              <div class='hidden sm:block sm:ml-6'>
                <div class='flex space-x-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link
                    to='/learn'
                    class=' text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300'
                  >
                    Learn
                  </Link>
                  <Link
                    to='/practice'
                    class=' text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300'
                  >
                    Practice
                  </Link>
                  <a
                    href='#'
                    class=' text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300'
                  >
                    Play
                  </a>
                  <a
                    href='#'
                    class=' text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300'
                  >
                    LeaderBoard
                  </a>
                </div>
              </div>
            </div>
            <div class='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              {state.auth.isAuthenticated == true ? (
                <div class='ml-3 relative'>
                  <div>
                    <button
                      class='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      id='user-menu'
                      aria-haspopup='true'
                      onClick={() => Setuseropen(!isuseropen)}
                    >
                      <span class='sr-only'>Open user menu</span>
                      <img
                        class='h-8 w-8 rounded-full'
                        src={state.auth.user.imageUrl}
                        alt=''
                      />
                    </button>
                  </div>
                  <Transition
                    show={isuseropen}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <div
                      class='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu'
                    >
                      <a
                        href='#'
                        class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                        onClick={() => dispatch(logoutUser())}
                      >
                        Sign out
                      </a>
                    </div>
                  </Transition>
                </div>
              ) : (
                <Login />
              )}
            </div>
          </div>
        </div>
        <Transition
          show={isnavbar}
          enter='transition ease-in-out duration-100'
          enterFrom='transform opacity-0 scale-50'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-50'
        >
          <div class='block sm:hidden' onClick={() => Setnavbar(false)}>
            <div class='px-2 pt-2 pb-3 space-y-1'>
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href='#'
                class='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Dashboard
              </a>
              <a
                href='#'
                class='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Team
              </a>
              <a
                href='#'
                class='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Projects
              </a>
              <a
                href='#'
                class='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Calendar
              </a>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
