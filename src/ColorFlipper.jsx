import { useState } from "react";
import './App.css';

function BGChangeButton({onChangeColor, bgColor}) {

	return (
		<div className="text-center">
			<h2 className="bg-[#222] text-[#fff] capitalize tracking-[.25rem] p-4 mb-10 rounded-lg text-[2rem]/[1.25] md:text-[2.5rem]/[1] font-bold">
				background color : 
				<span> {bgColor}</span>
			</h2>
			<button onClick={onChangeColor} className="uppercase bg-transparent text-black tracking-[.25rem] inline-block	font-bold rounded-lg cursor-pointer shadow-level2 px-5 py-3 border-2 border-black transition duration-300 ease-in-out hover:bg-black hover:text-white">click me</button>
		</div>
	);
}

export default function App() {
	const [color, setColor] = useState('white');
	const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];	
	let hexColor = "#";

	function HandleChangeColor() {
		function getRandomNumber() {
			return Math.floor(Math.random() * hex.length);
		}

		for (let i = 0; i < 6; i++) {
			hexColor += hex[getRandomNumber()];
		}

		setColor(hexColor)
		document.body.style.backgroundColor = hexColor;
	}

	return (
		<>
			<nav className="bg-[#fff] h-12 grid items-center shadow-level2">
				<div className="flex items-center justify-between w-[90vw] max-w-[620px] my-0 mx-auto">
					<h4 className="text-sm/[1.25] md:text-base/[1.5] font-bold capitalize text-[#1982CC] tracking-[0.25rem]">color flipper</h4>
					<ul className="flex font-secondary">
						<li><a className="text-sm/[1.25] md:text-base/[1.5] font-bold mr-4 capitalize tracking-[0.25rem]">simple</a></li>
						<li><a className="text-sm/[1.25] md:text-base/[1.5] font-bold mr-4 capitalize tracking-[0.25rem]">hex</a></li>
					</ul>
				</div>
			</nav>
			<main className="grid place-items-center min-h-[calc(100vh-3rem)]">
				<BGChangeButton onChangeColor={HandleChangeColor} bgColor={color}/>
			</main>
		</>
	);
}