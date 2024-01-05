import { useState } from "react";
import './App.css';

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// set current reviews array
let currentPerson = 0;

function PersonButton({onClick, text}) {
  return (
    <button onClick={onClick} className="text-[var(--color-primary)] text-[1.25rem] bg-transparent border-transparent mx-2 my-0">{text}</button>
  )
}

function allPerson() {
  let personn = {
                  id: reviews[currentPerson].id,
                  name: reviews[currentPerson].name,
                  job: reviews[currentPerson].job,
                  img: reviews[currentPerson].img,
                  text: reviews[currentPerson].text
  }
  return personn;
}

export default function App() {
	const [person, setPerson] = useState(allPerson);

  function incrementPerson() {
    currentPerson++;
    if (currentPerson >= reviews.length) {
      currentPerson = 0;
    }

    setPerson({
      ...person,
      id: reviews[currentPerson].id,
      name: reviews[currentPerson].name,
      job: reviews[currentPerson].job,
      img: reviews[currentPerson].img,
      text: reviews[currentPerson].text
    });
    console.log(currentPerson);
  }

  function decrementPerson() {
    currentPerson--;
    if (currentPerson < 0) {
      currentPerson = reviews.length - 1;
    }

    setPerson({
      ...person,
      id: reviews[currentPerson].id,
      name: reviews[currentPerson].name,
      job: reviews[currentPerson].job,
      img: reviews[currentPerson].img,
      text: reviews[currentPerson].text
    });
    console.log(currentPerson);
  }

  function randomizePerson() {
    currentPerson = Math.floor(Math.random() * reviews.length);

    setPerson({
      ...person,
      id: reviews[currentPerson].id,
      name: reviews[currentPerson].name,
      job: reviews[currentPerson].job,
      img: reviews[currentPerson].img,
      text: reviews[currentPerson].text
    });
    console.log("random " + currentPerson);
  }

	return (
		<main className="grid min-h-screen place-items-center md:text-base ">
			<section className="w-[80vw] max-w-screen-sm">
				<div className="mb-16 text-center">
					<h2 className="tracking-[.25rem] capitalize text-[2rem]/[1.25] md:text-[2.5rem]/[1] font-primary mb-3">our reviews</h2>
					<div className="w-20 h-1 bg-[var(--color-primary)] mx-auto"></div>
				</div>
				<article className="px-8 py-6 transition-all ease-linear bg-white rounded-lg shadow-level1 delay-[.3s] text-center">
					<div className="mb-6 relative w-[150px] h-[150px] rounded-[50%] my-0 mx-auto before:content-[''] before:w-full before:h-full before:bg-[var(--color-primary)] before:absolute before:top-[-0.25rem] before:right-[-0.5rem] before:rounded-[50%]">
						<img src={person.img} className="object-cover h-full rounded-[50%] relative w-full"></img>
					</div>
					<h4 className="mb-1 capitalize tracking[var(--spacing-small)] md:text-base/[1]">{person.name}</h4>
					<p className="mb-2 uppercase text-[var(--color-primary-light)] text-[.85rem]">{person.job}</p>
					<p className="text-[var(--color-gray-3)] mb-3">{person.text}</p>
					<div>
            <PersonButton onClick={decrementPerson} text={<i className="uil uil-angle-left"></i>} />
            <PersonButton onClick={incrementPerson} text={<i className="uil uil-angle-right"></i>} />
					</div>
          <PersonButton onClick={randomizePerson} text="surprise me" />
				</article>
			</section>
		</main>
	);
}