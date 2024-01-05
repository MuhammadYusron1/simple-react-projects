import { useState } from "react";
import './App.css';
import {MENUS} from './menu.js';

// React components are
	// SearchBar
	// CategoryFilter
	// ProductsMenu
		// ProductItem

function ProductItem({menu}) {

	return (
		<article>
			<img src={menu.img}></img>
			<div>
				<header>
					<h4>{menu.title}</h4>
					<h4>{menu.price}</h4>
				</header>
				<p>{menu.desc}</p>
			</div>
		</article>
	);
}

function ProductsMenu({menus, filterText, categoryFilter}) {
	const products = [];

	menus.forEach(item => {
		// search for the item title
		if (item.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
			return;
		}

		// search in category only
		if ((categoryFilter !== item.category) && (categoryFilter !== "all")) {
			return;
		}
		
		// console.log(categoryFilter);
		products.push(
			<ProductItem key={item.id} menu={item} />
		);
	});

	// console.log(menus.categoryFilter);

	return products;
}

function CategoryFilter({onCategoryFilterChange, text}) {

	return (
		<button onClick={() => {onCategoryFilterChange(text)}}>{text}</button>
	);
}

function SearchBar({filterText, onFilterTextChange}) {

	return (
		<form>
			<input type="text" placeholder="Search..."
				value={filterText} onChange={e => onFilterTextChange(e.target.value)} ></input>
		</form>
	);
}

export default function App() {
	const [filterText, setFilterText] = useState('');
	const [categoryFilter, setCategoryFilter] = useState('all');

	return (
		<section>
			<div>
				<h2>our menu</h2>
				<div>underline</div>
			</div>
			<div>
				<SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
				<CategoryFilter categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter} text="all" />
				<CategoryFilter categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter} text="breakfast" />
				<CategoryFilter categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter} text="lunch" />
				<CategoryFilter categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter} text="shakes" />
				<CategoryFilter categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter} text="dinner" />
			</div>
			<div>
				<ProductsMenu menus={MENUS} filterText={filterText} categoryFilter={categoryFilter} />
			</div>
		</section>
	);
}