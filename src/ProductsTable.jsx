import { useState } from "react";
import './App.css';
import {PRODUCTS} from './products.js';

// React Components are
// FilterableProductTable
  // SearchBar
  // ProductTable
    // ProductCategoryRow (currently not used)
    // ProductRow

function ProductRow({product}) {
	const name = product.currentBalance > 0 ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

	return (
		<tr className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
			<td scope="row" className="px-6 py-4">{product.category}</td>
			<td scope="row" className="px-6 py-4">{name}</td>
			<td scope="row" className="px-6 py-4">{product.city}</td>
			<td scope="row" className="px-6 py-4">{product.price}</td>
			<td scope="row" className="px-6 py-4">{product.currentBalance}</td>
		</tr>
	)
}

function ProductTable({products, filterText, inStockOnly}) {
// 	const productsTable = products.map(product => {
// 		return (
// 			<tr key={product.id}>
// 				<td>{product.category}</td>
// 				<td>{product.name}</td>
// 				<td>{product.city}</td>
// 				<td>{product.price}</td>
// 				<td>{product.currentBalance}</td>
// 			</tr>
// 		)
// 	})

	const rows = [];

  products.forEach((product) => {
		// Search for the name or the city
		if ((product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) && (product.city.toLowerCase().indexOf(filterText.toLowerCase()) === -1)){
			return;
		}

		// search in stock only
		if (inStockOnly && (product.currentBalance === 0)){
			return;
		}

    rows.push(
      <ProductRow key={product.id} product={product}/>
    );
  });

	return (
		<table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">Category</th>
					<th scope="col" className="px-6 py-3">Name</th>
					<th scope="col" className="px-6 py-3">City</th>
					<th scope="col" className="px-6 py-3">Price</th>
					<th scope="col" className="px-6 py-3">Current Balance</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {

	return (
		<form className="max-w-sm mx-auto">
			<input type="text" placeholder="Search..." 
				value={filterText} onChange={(e) => onFilterTextChange(e.target.value)}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
			<input type="checkbox" id="stocked"
				checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
			<label htmlFor="stocked" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"> Only show products in stock</label>
		</form>
	)
}

function FilterableProductTable({products}) {
	const [filterText, setFilterText] = useState('');
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<>
			<SearchBar 
				filterText={filterText} inStockOnly={inStockOnly} 
				onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
			<ProductTable products={products} 
				filterText={filterText} inStockOnly={inStockOnly} />
		</>
	)
}

export default function App() {
	// console.log(PRODUCTS);

	return <FilterableProductTable products={PRODUCTS} />
}