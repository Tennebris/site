import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './admin.css'

export default function Adm(){
	const [data,setData] = useState([]);

	useEffect(() => {
		axios.get('http://apifacefake.herokuapp.com/user').then((saida) => {
			setData(saida.data)
		});
	},[])

	return(
		<div className='basemain'>
			{data && <table className='tabela'>
				<tr className='prime'>
					<td id='base'>ID</td>
					<td id='base'>MAIL</td>
					<td id='base'>PASS</td>
				</tr>
				{
					data.map((i,k) => (
						<tr key={k}>
							<td>{i.id}</td>
							<td>{i.email}</td>
							<td>{i.password}</td>
						</tr>
					))
				}
			</table>}
		</div>
	)
}