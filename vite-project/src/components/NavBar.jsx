import React, { useState } from 'react';

function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		// <div className="sticky top-0 bg-white shadow-md text-gray-800 h-16 sm:h-20 flex items-center justify-between px-8 z-10 w-screen">
		// 	<nav
		// 		aria-label="Site Nav"
		// 		className="mx-auto flex items-center justify-between p-4 max-w-full h-full w-full"
		// 	>
		// 		<div className="flex items-center justify-start">
		// 			<a
		// 				href="/"
		// 				className="flex items-center justify-center"
		// 			>
		// 				<span className="text-xl font-bold">Pranav.Shinde</span>
		// 			</a>
		// 		</div>
		// 		<ul
		// 			className={`lg:flex flex-col items-center gap-4 sm:gap-0 text-lg sm:text-xl font-medium justify-end ${
		// 				menuOpen ? 'flex' : 'hidden'
		// 			}`}
		// 		>
		// 			<li>
		// 				<a
		// 					className="rounded-lg px-3 py-2"
		// 					href="/"
		// 				>
		// 					Home
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a
		// 					className="rounded-lg px-3 py-2"
		// 					href="/"
		// 				>
		// 					About
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a
		// 					className="rounded-lg px-3 py-2"
		// 					href="/"
		// 				>
		// 					Projects
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a
		// 					className="rounded-lg px-3 py-2"
		// 					href="/"
		// 				>
		// 					Contact
		// 				</a>
		// 			</li>
		// 		</ul>
		// 		<div className="lg:hidden">
		// 			<button
		// 				className="flex items-center justify-center rounded-lg p-2 text-gray-800 focus:outline-none"
		// 				onClick={toggleMenu}
		// 			>
		// 				<svg
		// 					xmlns="http://www.w3.org/2000/svg"
		// 					className="h-6 w-6"
		// 					fill="none"
		// 					viewBox="0 0 24 24"
		// 					stroke="currentColor"
		// 				>
		// 					{menuOpen ? (
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M6 18L18 6M6 6l12 12"
		// 						/>
		// 					) : (
		// 						<path
		// 							strokeLinecap="round"
		// 							strokeLinejoin="round"
		// 							strokeWidth={2}
		// 							d="M4 6h16M4 12h16M4 18h16"
		// 						/>
		// 					)}
		// 				</svg>
		// 			</button>
		// 		</div>
		// 	</nav>
		// </div>

		<nav class="bg-white border-gray-200 dark:bg-gray-900">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a
					href="/"
					class="flex items-center"
				>
					<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Pranav.Shinde
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
				<div
					class="hidden w-full md:block md:w-auto"
					id="navbar-default"
				>
					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
						<a
								href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#"
								class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
