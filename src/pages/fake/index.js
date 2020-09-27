import React from 'react';

import './fake.css'

function Fake() {
	return(
		<div className='basemain'>
			<div className='container'>
				<span className='square' id='s1' />
				<span className='square' id='s2' />
				<span className='square' id='s3' />
				<span className='square' id='s4' />
				<span className='square' id='s5' />
				<span className='square' id='s6' />
				<span className='square' id='s7' />
				<span className='square' id='s8' />
				<span className='square' id='s9' />
			</div>
			<h2 className='loadText'>Carregando</h2>
		</div>
	)
}

export default Fake;