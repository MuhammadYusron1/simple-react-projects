import { useState } from "react";
// import './App.css';

function Question({ questionTitle, questionText}) {
	const [active, setActive] = useState({
		questionOpen: true,
		questionClose: false,
	});

	// if (active.questionOpen === false) {
	// 	console.log(questionText.style);
	// }

	return (
		<article className="px-6 pt-6 pb-0 mb-8 bg-white rounded-lg shadow-level1">
			<div className="flex items-center justify-between pb-4 capitalize">
				<h4 className="mb-0 tracking-[.25rem] text-[var(--color-gray-2)] text-base">{questionTitle}</h4>
				<button className="text-[1.5rem] bg-transparent border-transparent text-[#c59d5f] transition-all duration-300 ease-linear hover:rotate-90">
					<span onClick={() => {setActive({...active, questionOpen: !active.questionOpen}); console.log(active);}} className={active.questionOpen ? "inline" : "hidden"}><i className="uil uil-plus-square"></i></span>
					<span onClick={() => {setActive({...active, questionOpen: !active.questionClose}); console.log(active);}} className={active.questionOpen ? "hidden" : "inline"}><i className="uil uil-minus-square"></i></span>
				</button>
			</div>
			<div className={active.questionOpen ? "hidden pt-4 pr-0 pb-6 pl-0" : "block pt-4 pr-0 pb-6 pl-0 border-solid border-t-[1px]"}>
				<p className="mb-0 text-[var(--color-gray-5)] tracking-[.10rem] text-base">{questionText}</p>
			</div>
		</article>
	);
}

const questions = [
	{
		id: 0,
		title: "do you accept all major credit cards?",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit"
	},
	{
		id: 1,
		title: "do you support local farmers?",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit"
	},
	{
		id: 2,
		title: "do you use organic ingredients?",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit"
	}
];

export default function App() {
	const mappedQuestions = questions.map(({id, title, text}) => {
		return <Question key={id} questionTitle={title} questionText={text} />
	});

	// console.log(mappedQuestions);

	return (
		<section>
			<div className="mt-[15vh] mb-16">
				<h2 className="capitalize mb-3 tracking-[var(--spacing-small)] text-[2rem]/[1.25] md:text-[2.5rem]/[1] text-center">general questions</h2>
			</div>
			<div className="w-[90vw] m-auto max-w-screen-xl md:w-[95vw] md:max-w-screen-md">
				{mappedQuestions}
			</div>
		</section>
	);
}