import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import Login from '../components/loginButton';
import { logoutUser } from '../redux/ActionCreator';

function Header({state}) {
  const [isuseropen, Setuseropen] = useState(false);
  const [isnavbar, Setnavbar] = useState(false);
  
  const dispatch = useDispatch();
  // console.log('here');
  // console.log(state);
  return (
		<div>
			<nav className="">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* <!-- Mobile menu button--> */}
							<button
								className="inline-flex items-center justify-center p-2 rounded-md text-secondary-dark hover:text-secondary hover:bg-secondary-dark focus:outline-none "
								aria-expanded="false"
								onClick={() => Setnavbar(!isnavbar)}
							>
								<span className="sr-only">Open main menu</span>
								{/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								{/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<Link to="/" className="flex-shrink-0 flex items-center">
								<img
									className="block lg:hidden h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/>
								<img
									className="hidden lg:block h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
									alt="Workflow"
								/>
							</Link>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
									<Link
										to="/learn"
										className=" text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300"
									>
										Learn
									</Link>
									<Link
										to="/practice"
										className=" text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300"
									>
										Practice
									</Link>
									<a
										href="#"
										className=" text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300"
									>
										Play
									</a>
									<a
										href="#"
										className=" text-secondary-dark font-bold px-3 py-2  text-xl font-jost hover:bg-secondary-dark hover:text-primary-light rounded-3xl transition ease-in-out duration-300"
									>
										LeaderBoard
									</a>
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{state.auth.isAuthenticated == true ? (
								<div className="ml-3 relative">
									<div>
										<button
											className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											id="user-menu"
											aria-haspopup="true"
											onClick={() => Setuseropen(!isuseropen)}
										>
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												src={state.auth.user.imageUrl}
												alt=""
											/>
										</button>
									</div>
									<Transition
										show={isuseropen}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<div
											className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-20"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu"
										>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
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
					enter="transition ease-in-out duration-100"
					enterFrom="transform opacity-0 scale-50"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-50"
				>
					<div className="block sm:hidden" onClick={() => Setnavbar(false)}>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
							<Link
								to="/learn"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Learn
							</Link>
							<Link
								to="/practice"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Practice
							</Link>
							<Link
								href="/play"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Play
							</Link>
							<Link
								to="/"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Calendar
							</Link>
						</div>
					</div>
				</Transition>
			</nav>
		</div>
	);
}

export default Header;
