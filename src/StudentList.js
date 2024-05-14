import React from 'react';
import Student from './Student';

function StudentList({ students, onStudentClick }) {
	return (
		<div className='student-list'>
			{students.map((student) => (
				<Student key={student.Name} student={student} onClick={onStudentClick} />
			))}
		</div>
	);
}

export default StudentList;
