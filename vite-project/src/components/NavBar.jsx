import React from 'react';
function NavBar() {
	return (
		<div className="sticky top-0">
			<nav
				aria-label="Site Nav"
				className="mx-auto flex items-center justify-between p-4 max-w-full "
			>
				<a
					href="/"
					className="flex items-center justify-center"
				>
					<span className="text-3xl font-bold">Pranav Shinde</span>
				</a>

				<ul className="flex items-center gap-3 text-2xl font-medium">
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
							Projects{' '}
						</a>
					</li>

					<li>
						<a
							className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
							href=""
							target="_blank"
						>
							External
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="text-2xl"
							></svg>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
