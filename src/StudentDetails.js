import React from 'react';

function StudentDetails({ student }) {
	return (
		<div className='student-details'>
			<h2>{student.Name}</h2>
			<p>Age: {student.Age}</p>
			<p>Grades: {student.Grades.join(', ')}</p>
		</div>
	);
}

export default StudentDetails;
