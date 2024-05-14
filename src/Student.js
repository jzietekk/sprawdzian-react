import React from 'react';

function Student({ student, onClick }) {
	return (
		<div className='student' onClick={() => onClick(student)}>
			<span>{student.Name}</span>
			<span>Age: {student.Age}</span>
		</div>
	);
}

export default Student;
