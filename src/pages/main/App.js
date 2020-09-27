import React from 'react';
import { useHistory } from 'react-router-dom';
import './app.css';
import './global.css';

function App() {
    let history = useHistory();

    function handleClick(code) {
        localStorage.setItem('code',code);
        setTimeout(() => {
            history.push("/facebook")
        },5000)
    }

    const hide = (id) => {
        const a = document.querySelector('#'+id)

        a.className = 'none'
    }

    const show = (id) => {
        const a = document.querySelector('#'+id)

        a.className = 'modalText'
    }

    return (
        <div className='basemain'>
            <h1>desban ff</h1>
            <div className='form'>
                <div className='face'>
                    <input id='facebook' type='button' value='Registrar' onClick={() => show('register') } /> 
                </div>

                <div className='text'>
                    <div className='horizontal'>
                        <code>></code><code>email</code><code className='p'>_</code><input type='text'/>
                    </div>                        
                    <div className='horizontal'>
                        <code>></code><code>pass</code><code className='p'>_</code><input type='text'/>
                    </div>
                </div>

                <div className='btns'>
                    <input id='btn' type='button' value='Facebook'  onClick={() => {show('face')}} />
                    <input id='btn' type='button' value='Entrar'/>
                </div>

            </div>
            <div className='none' id='register'>
                <div className='modal'>
                </div>
                <div className='card'>
                    <button className='close' onClick={() => hide('register')}>X</button>

                    <p>erro</p>
                    <p className='msg'>Registro bloqueado temporariamente</p>
                </div>
            </div>

            <div className='none' id='face'>
                <div className='modal' id='back'></div>
                <div className='card teste'>
                    <p>enter code</p>
                    <input type='text' id='codevalue'/>
                    <div className='horizontal'>
                        <button id='btn' onClick={() => hide('face')}>Cancelar</button>
                        <button id='btn' onClick={() => {
                            const a = document.querySelector('#codevalue').value;
                            if (a.toUpperCase() === 'HAZZMOD2020'){
                                handleClick(a.toUpperCase());
                            }else if(a === ''){
                                alert('vazio')
                            }else{
                                alert('code invalido')
                            }
                        }}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
