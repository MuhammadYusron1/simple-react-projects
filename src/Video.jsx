import { useState } from "react";
import './App.css';

export default function App() {
	const [video, setVideo] = useState(true);

	function handleVideoClick() {
		setVideo(!video); 

		if (video === false) {
			document.getElementById("bgVideo").play();
		}
		else {
			document.getElementById("bgVideo").pause();
		}
	}

	window.onload = () => {
		document.getElementById("preloaderImage").classList.add("invisible");
	};

	return (
		<>
			<div>
				<img src="https://vannilla-js-basic-project-9-video-preloader.netlify.app/preloader.gif" alt="preloader" id="preloaderImage"></img>
			</div>
			<header>
				<video muted autoPlay loop id="bgVideo" >
					<source src="https://vannilla-js-basic-project-9-video-preloader.netlify.app/video.mp4" type="video/mp4"></source>
				</video>
				<h1>video project</h1>
				<button onClick={handleVideoClick}>
					<span>play</span>
					<span>pause</span>
					<span></span>
				</button>
			</header>
		</>
	);
}