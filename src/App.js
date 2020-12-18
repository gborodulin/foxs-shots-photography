import './App.css';
import { useEffect, useRef, useState, createRef } from 'react';
import Landing from './Landing';
import People from './People';
import Places from './Places';
import Things from './Things';

function App() {
	const peopleRef = useRef();
	const placesRef = useRef();
	const thingsRef = useRef();

	function scrollTo(section) {
		switch (section) {
			case 'peopleRef':
				peopleRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				break;
			case 'placesRef':
				placesRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				break;
			case 'thingsRef':
				thingsRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				break;
		}
	}

	useEffect(() => {}, []);

	return (
		<div className='App'>
			<Landing scrollTo={scrollTo} />

			<div ref={peopleRef}>
				<People />
			</div>

			<div ref={placesRef}>
				<Places />
			</div>

			<div ref={thingsRef}>
				<Things />
			</div>
		</div>
	);
}

export default App;
