import { useState } from "react";
// import './App.css';

export default function App() {
	const [active, setActive] = useState({
		modal: true,
		modalClose: false
	});

	return (
		<>
			<header className="grid min-h-screen place-items-center">
				<div className="px-0 py-16 text-center bg-white rounded-lg shadow-level1 w-[90vw] max-w-screen-sm">
					<h1 className="tracking-[var(--spacing-small)] capitalize mb-3 text-[3rem]/[1.25rem] md:text-[4rem]/[1rem] font-bold">modal project</h1>
					<button onClick={() => setActive({...active, modal: !active.modal})} className="uppercase py-[.375rem] px-3 tracking-[var(--spacing-small)] mt-8 text-[.875] rounded-lg text-white bg-[var(--color-primary)] border-2 border-[var(--color-primary)] border-solid shadow-level2">open modal</button>
				</div>
			</header>
			<div className={active.modal ? "fixed top-0 left-0 w-full h-full bg-[var(--color-modal-bg)] grid place-items-center -z-10 invisible" : "fixed top-0 left-0 w-full h-full bg-[var(--color-modal-bg)] grid place-items-center z-10 visible"}>
				<div className="bg-white rounded-lg w-[90vw] h-[30vh] max-w-screen-sm text-center grid place-items-center relative">
					<h4 className="tracking-[var(--spacing-small)] capitalize mb-3 text-[1.25rem]/[1.25rem] md:text-[1.75rem]/[1rem] font-medium">modal title</h4>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At esse blanditiis omnis eos sint labore, obcaecati ipsam explicabo assumenda dolorum? Mollitia quia consectetur facere eligendi nisi consequuntur voluptas ab est!</p>
					<button onClick={() => setActive({...active, modal: !active.modalClose})} className="absolute top-4 right-1 text-[2rem] text-[var(--color-red)]"><i className="uil uil-times"></i></button>
				</div>
			</div>
		</>
	);
}