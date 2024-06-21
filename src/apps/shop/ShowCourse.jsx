import React from "react";

export default function ShowCourse({ courses, filterCourse, addCourseToCartFunction }) {
    return (
	<div>
		{filterCourse.length === 0 ? (
			<p>Sorry Geek, No matching Product found </p>
		) : (
		filterCourse.map((product) => (
			<div key={product.id}>
				<img src={product.image} alt={product.name} />
				<h2>{product.name}</h2>
				<p>Price: ₹{product.price}</p>
				<button onClick={() => addCourseToCartFunction(product)}> Add to Cart </button>
			</div>
		))
		)}
	</div>
    );
}