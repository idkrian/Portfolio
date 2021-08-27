import React, {useState, useEffect}from 'react'
import './css/Home.css'
import Parallax from 'react-rellax'

function Home() {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return (

        <div>
            <div className='fundo1 col-md"'>
                <p><Parallax speed={-3} className='hora'>{date.toLocaleTimeString()}</Parallax></p>                
            </div>

            <div className='fundo2 col-md'>
                <div className='port'>
                        Portfólio
                </div>

                <ul className='lista-links col-md'>
                    <p><a href="https://github.com/idkrian" target="_blank" rel='noreferrer'>Meu GitHub</a><br/></p>
                    <a href="https://riandev-calculadora-imc.netlify.app/#/" target="_blank" rel='noreferrer'>Calculadora IMC</a><br/>
                    <a className='aestilo' href='https://riandev-create-read.netlify.app/#/' target="_blank" rel='noreferrer'>Create-Read APP</a><br/>
                    <a className='aestilo' href='https://github.com/idkrian/adminApp' target="_blank" rel='noreferrer'>Admin APP</a><br/>
                    <a href='https://github.com/idkrian/crud-cadastro-medicos' target="_blank" rel='noreferrer'>Cadastro de Médicos</a><br/>
                    <a href='https://github.com/idkrian/spotify-clone' target="_blank" rel='noreferrer'>Spotify Clone</a><br/>
                </ul>



            </div>
            <div className='fundo3 col-md'>
                <div className='titulo-r'>
                    Sobre Mim
                </div>
                <div className='txt-r'>
                    Opa! Prazer, meu nome é Rian, sou um desenvolvedor 
                    muito entusiasta da programação
                    com muito amor pelo Front-End.
                    <br/>
                    <br />
                    Atualmente estou cursando o 4° semestre do 
                    curso de Análise e Desenvolvimento de Sistemas 
                    e em busca de oportunidades para alavancar a minha carreira.

                </div>
            </div>

            <div className='fundo4 col-md'>
                <div className='titulo-l'>
                    Conhecimentos
                </div>
                <div className='txt-l'>
                    Estou sempre atento e procuro sempre
                    me antenar e estudar as mais novas e 
                    usadas tecnologias do mercado.
                    <br/>  
                    Atualmente tenho conhecimentos em:
                </div>
                <div className='div-botoes col-sm'>
                    <button className="botao">HTML</button>
                    <button className="botao">CSS</button>
                    <button className="botao">JAVASCRIPT</button>
                    <button className="botao">REACTJS</button>
                    <button className="botao">NEXTJS</button>
                    <button className="botao">NODEJS</button>
                    <br/>                   
                    <button className="botao">PHP</button>
                    <button className="botao">PYTHON</button>
                    <button className="botao">LARAVEL</button>
                    <button className="botao">MYSQL</button>
                    <button className="botao">GIT</button>
                    <br/>
                    <button className="botao">INGLÊS AVANÇADO</button>
                    <button className="botao">METODOLOGIAS ÁGEIS</button>
                </div>
                
            </div>

            
        </div>
    )
}

export default Home
