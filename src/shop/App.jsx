import { useEffect, useRef, useState } from "react"; 
import React from "react";

import Search from './Search';
import ShowCourse from './ShowCourse';
import UserCart from './UserCart';
import './App.css'


export default function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'GFG T-shirt', 
		price: 499, 
		image: 'image1.png'
		},
		{ id: 2, 
		name: 'GFG Bag', 
		price: 699, 
		image: 'image2.png'
		},
		{ id: 3, 
		name: 'GFG Hoodie', 
		price: 799, 
		image: 'image1.png'
		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCart = (GFGCourse) => {
		const updatedCart = cartCourses.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const calculationTotalAmount = () => {
		return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
	};

	const searchInCourseUser = (event) => {
		setSearchCourse(event.target.value);	
	};

	const filterCourse = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div>!!!!!!!
			<Search
                searchCourse={searchCourse} 
				searchInCourseUser= {searchInCourseUser} 
            />
			<div>
				<ShowCourse
					courses={courses}
					filterCourse={filterCourse}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCart
					cartCourses={cartCourses}
					deleteCourseFromCart={deleteCourseFromCart}
					calculationTotalAmount={
						calculationTotalAmount
					}
					setCartCourses={setCartCourses}
				/>
			</div>
		</div>
	);
}

