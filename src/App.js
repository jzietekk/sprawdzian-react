import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';

function App() {
	const [students, setStudents] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState(null);

	useEffect(() => {
		fetch('https://run.mocky.io/v3/9824ea56-c020-485f-b8da-5bb5ab4ac936')
			.then((response) => response.json())
			.then((data) => setStudents(data));
	}, []);

	return (
		<div className='App'>
			<header className='header'>Students</header>
			<div className='main'>
				<div className='student-list-container'>
					<StudentList students={students} onStudentClick={setSelectedStudent} />
				</div>
				<div className='student-details-container'>
					{selectedStudent && <StudentDetails student={selectedStudent} />}
				</div>
				<div className='ad-div'>reklama</div>
			</div>
			<footer className='footer'>FOOTER</footer>
		</div>
	);
}

export default App;
