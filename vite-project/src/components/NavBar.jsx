import React from 'react';
function NavBar() {
	return (
		<div className="sticky top-0 bg-white shadow-md text-gray-800 h-22 flex-1 items-center justify-center px-8 z-10">
			<nav
				aria-label="Site Nav"
				class="mx-auto flex items-center justify-between p-4 max-w-full h-full"
			>
				<a
					href="/"
					class="flex items-center justify-center"
				>
					<span class="text-2xl font-bold">Pranav.Shinde</span>
				</a>
				<ul class="flex items-center gap-2 text-xl font-semibold justify-center">
					<li class="hidden lg:block">
						<a
							class="rounded-lg px-3 py-2"
							href="/"
						>
							{' '}
							Home{' '}
						</a>
					</li>
					<li>
						<a
							class="rounded-lg px-3 py-2"
							href=""
						>
							{' '}
							About{' '}
						</a>
					</li>
					<li>
						<a
							class="rounded-lg px-3 py-2"
							href=""
						>
							{' '}
							Projects{' '}
						</a>
					</li>
					<li>
						<a
							class="rounded-lg px-3 py-2"
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
