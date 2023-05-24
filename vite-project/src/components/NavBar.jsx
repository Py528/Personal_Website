import React from 'react';
function NavBar() {
	return (
		<div className="sticky top-0 bg-white shadow-md text-gray-800 h-20 flex-1 items-center justify-center px-8 z-10">
			<nav
				aria-label="Site Nav"
				className="mx-auto flex items-center justify-between p-4 max-w-full h-full"
			>
				<a
					href="/"
					className="flex items-center justify-center"
				>
					<span className="text-xl font-bold">Pranav.Shinde</span>
				</a>
				<ul className="flex items-center gap-0 text-xl font-medium justify-center">
					<li className="hidden lg:block">
						<a
							className="rounded-lg px-3 py-2"
							href="/"
						>
							{' '}
							Home{' '}
						</a>
					</li>
					<li>
						<a
							className="rounded-lg px-3 py-2"
							href=""
						>
							{' '}
							About{' '}
						</a>
					</li>
					<li>
						<a
							className="rounded-lg px-3 py-2"
							href=""
						>
							{' '}
							Projects{' '}
						</a>
					</li>
					<li>
						<a
							className="rounded-lg px-3 py-2"
							href=""
						>
							{' '}
							Contact{' '}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
