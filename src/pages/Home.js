import React, {useState, useEffect}from 'react'
import './css/Home.css'
import Parallax from 'react-rellax'
import Seta from './images/seta.png'
import GitHub from './images/github.png'

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
            <div className='fundo1'>
                <p><Parallax speed={-3} className='hora'>{date.toLocaleTimeString()}</Parallax></p>                
            </div>

            <div className='fundo2'>
                <div className='titulo-l'>
                    <Parallax speed={0}>
                        Portfólio
                    </Parallax>
                </div>

                <ul className='lista-links'>
                    <p><a href="https://github.com/idkrian">Meu GitHub</a><br/></p>
                    <a href="https://github.com/idkrian/calculadora-imc">Calculadora IMC</a><br/>
                    <a className='aestilo' href='https://github.com/idkrian/crud-cadastro-medicos'>Cadastro de Médicos</a><br/>
                    <a className='aestilo' href='https://github.com/idkrian/calculadora-imc'>Calculadora de IMC</a><br/>
                    <a className='aestilo' href='https://github.com/idkrian/spotify-clone'>Spotify Clone</a><br/>
                </ul>



            </div>
            <div className='fundo3'>
                <div className='titulo-r'>
                    <Parallax speed={0}>Sobre Mim</Parallax>         
                </div>
                <div className='txt-r'>
                    Oi! Meu nome é Rian, sou um desenvolvedor 
                    muito entusiasta da programação
                    com muito amor pelo Front-End e também o 
                    Back-end.<br/>
                    Atualmente cursando o 3° semestre do 
                    curso de Análise e Desenvolvimento de Sistemas 
                    e em busca de oportunidades para alavancar a minha carreira.

                </div>
             </div>

             <div className='fundo4'>
                <div className='titulo-l'>
                <Parallax speed={0}> Conhecimentos </Parallax>    
                </div>
                <div className='txt-l'>
                Estou sempre atento ao mercado e lendo 
                sobre as áreas envolvidas com meu dia a dia, 
                incorporando novas tecnologias e métodos conforme 
                as necessidades minhas e dos projetos.
                <br/>
                </div>
                <div className='div-botoes'>
                    <button class="botao">HTML 5</button>
                    <button class="botao">CSS 3</button>
                    <button class="botao">JAVASCRIPT</button>
                    <button class="botao">BOOTSTRAP</button>
                    <button class="botao">REACT JS</button>
                    <button class="botao">NODE JS</button>
                    <br/>
                    <button class="botao">PHP</button>
                    <button class="botao">PYTHON</button>
                    <button class="botao">LARAVEL</button>
                    <button class="botao">MYSQL</button>
                    <button class="botao">GIT</button>
                    <br/>
                    <button class="botao">INGLÊS</button>
                </div>
                
            </div>

            
        </div>
    )
}

export default Home
