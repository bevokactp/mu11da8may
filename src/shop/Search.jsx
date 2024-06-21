import React from "react";

export default function Search({ searchCourse, searchInCourseUser }) {
	return (
		<div>
			<h1>Cart</h1>
			<input type="text" value={searchCourse} onChange={searchInCourseUser} />
		</div>
	);
}
