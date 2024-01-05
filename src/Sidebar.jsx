import { useState } from "react";
// import './App.css';

export default function App() {
	const [active, setActive] = useState({
		navbar: true,
		navbarClose: false
	});

	return (
		<>
			<button onClick={() => setActive({...active, navbar: !active.navbar})} className="fixed text-[2rem] top-8 right-12 bg-transparent border-transparent text-[var(--color-primary-dark)] transition-all duration-300 ease-linear cursor-pointer"><i className="uil uil-bars"></i></button>
			<aside className={active.navbar ? "transition-all duration-300 ease-linear fixed top-0 left-0 w-full h-full bg-white grid grid-rows-layout gap-y-4 shadow-[red] -translate-x-full md:w-[400px]" : "transition-all duration-300 ease-linear fixed top-0 left-0 w-full h-full bg-white grid grid-rows-layout gap-y-4 shadow-[red] translate-x-0 md:w-[400px]"}>
				<div className="flex items-center justify-between px-6 py-4">
					<a className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 capitalize md:text-2xl lg:text-3xl dark:text-white">coding <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">addict</mark></a>
					<button onClick={() => setActive({...active, navbar: !active.navbarClose})} className="text-3xl bg-transparent border-transparent text-[red] transition-all duration-300 ease-linear"><i className="fa-solid fa-xmark fa-shake"></i></button>
				</div>
				<ul>
					<li className="text-[1.5rem] capitalize py-4 px-6 text-[var(--color-primary-dark)] transition-all duration-300 ease-linear hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-light)] hover:pl-7 cursor-pointer"><a>home</a></li>
					<li className="text-[1.5rem] capitalize py-4 px-6 text-[var(--color-primary-dark)] transition-all duration-300 ease-linear hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-light)] hover:pl-7 cursor-pointer"><a>about</a></li>
					<li className="text-[1.5rem] capitalize py-4 px-6 text-[var(--color-primary-dark)] transition-all duration-300 ease-linear hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-light)] hover:pl-7 cursor-pointer"><a>projects</a></li>
					<li className="text-[1.5rem] capitalize py-4 px-6 text-[var(--color-primary-dark)] transition-all duration-300 ease-linear hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-light)] hover:pl-7 cursor-pointer"><a>contact</a></li>
				</ul>
				<ul className="flex pb-8 justify-self-center">
					<li className="mx-2 my-0 text-2xl text-[var(--color-primary)]"><a><i className="uil uil-facebook"></i></a></li>
					<li className="mx-2 my-0 text-2xl text-[var(--color-primary)]"><a><i className="uil uil-instagram-alt"></i></a></li>
					<li className="mx-2 my-0 text-2xl text-[var(--color-primary)]"><a><i className="uil uil-twitter"></i></a></li>
					<li className="mx-2 my-0 text-2xl text-[var(--color-primary)]"><a><i className="uil uil-youtube"></i></a></li>
					<li className="mx-2 my-0 text-2xl text-[var(--color-primary)]"><a><i className="uil uil-linkedin"></i></a></li>
				</ul>
			</aside>
		</>
	);
}