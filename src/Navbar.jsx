import { useState } from "react";
// import './App.css';

export default function App() {
	const [navbar, setNavbar] = useState({
		list1: false,
		list2: false,
		list3: false
	});

	return (
		<nav className="bg-white shadow-level1">
			<div className="md:flex md:items-center md:justify-between md:p-4 md:mx-auto md:my-0 md:max-w-screen-lg">
				<div className="flex items-center justify-between p-4 md:p-0">
					<a className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 capitalize md:text-2xl lg:text-3xl dark:text-white h-[40px]">coding <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">addict</mark></a>
					<button onClick={() => setNavbar({...navbar, list1: !navbar.list1})} className="text-2xl text-[var(--color-primary)] bg-transparent border-transparent cursor-pointer md:hidden"><i className="uil uil-bars"></i></button>
					{/* <button onClick={() => setNavbar({...navbar, list2: !navbar.list2})}><i className="uil uil-bars"></i></button>
					<button onClick={() => setNavbar({...navbar, list3: !navbar.list3})}><i className="uil uil-bars"></i></button> */}
				</div>
				<ul className={navbar.list1 ? "h-40 overflow-hidden md:h-auto md:flex transition-all duration-300 ease-linear cursor-pointer" : "cursor-pointer h-0 overflow-hidden md:h-auto md:flex transition-all duration-300 ease-linear"}>
					<li className="text-[var(--color-gray-3)] text-base capitalize block py-2 px-4 md:p-0 md:my-0 md:mx-2 hover:text-[var(--color-primary-light)] hover:pl-6 hover:bg-[var(--color-primary)] md:hover:p-0 md:hover:bg-transparent tracking-[var(--spacing-small)] transition-all duration-300 ease-linear"><a>home</a></li>
					<li className="text-[var(--color-gray-3)] text-base capitalize block py-2 px-4 md:p-0 md:my-0 md:mx-2 hover:text-[var(--color-primary-light)] hover:pl-6 hover:bg-[var(--color-primary)] md:hover:p-0 md:hover:bg-transparent tracking-[var(--spacing-small)] transition-all duration-300 ease-linear"><a>about</a></li>
					<li className="text-[var(--color-gray-3)] text-base capitalize block py-2 px-4 md:p-0 md:my-0 md:mx-2 hover:text-[var(--color-primary-light)] hover:pl-6 hover:bg-[var(--color-primary)] md:hover:p-0 md:hover:bg-transparent tracking-[var(--spacing-small)] transition-all duration-300 ease-linear"><a>projects</a></li>
					<li className="text-[var(--color-gray-3)] text-base capitalize block py-2 px-4 md:p-0 md:my-0 md:mx-2 hover:text-[var(--color-primary-light)] hover:pl-6 hover:bg-[var(--color-primary)] md:hover:p-0 md:hover:bg-transparent tracking-[var(--spacing-small)] transition-all duration-300 ease-linear"><a>contact</a></li>
				</ul>
				{/* <div className="flex justify-around"> */}
					<ul className="hidden md:flex">
						<li className="md:my-0 md:mx-2 text-[var(--color-primary)] text-base"><a><i className="uil uil-facebook"></i></a></li>
						<li className="md:my-0 md:mx-2 text-[var(--color-primary)] text-base"><a><i className="uil uil-instagram-alt"></i></a></li>
						<li className="md:my-0 md:mx-2 text-[var(--color-primary)] text-base"><a><i className="uil uil-twitter"></i></a></li>
						<li className="md:my-0 md:mx-2 text-[var(--color-primary)] text-base"><a><i className="uil uil-youtube"></i></a></li>
						<li className="md:my-0 md:mx-2 text-[var(--color-primary)] text-base"><a><i className="uil uil-linkedin"></i></a></li>
					</ul>			
					{/* <ul className={navbar.list2 ? "invisible" : "visible text-[#214421] text-3xl"}>
						<li><a><i className="uil uil-facebook"></i></a></li>
						<li><a><i className="uil uil-instagram-alt"></i></a></li>
						<li><a><i className="uil uil-twitter"></i></a></li>
						<li><a><i className="uil uil-youtube"></i></a></li>
						<li><a><i className="uil uil-linkedin"></i></a></li>
					</ul>	
					<ul className={navbar.list3 ? "invisible" : "visible text-[#214421] text-3xl"}>
						<li><a><i className="uil uil-facebook"></i></a></li>
						<li><a><i className="uil uil-instagram-alt"></i></a></li>
						<li><a><i className="uil uil-twitter"></i></a></li>
						<li><a><i className="uil uil-youtube"></i></a></li>
						<li><a><i className="uil uil-linkedin"></i></a></li>
					</ul>	 */}
				{/* </div> */}
			</div>
		</nav>
	);
}