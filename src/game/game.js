import { useState } from 'react'
import './game.css'

const Game = () => {

    const [juego , setJuego] = useState({list:[],
         buttonHide: false,
          estado: "",
        trava:false})

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function startGame () {
        const randomList = [];
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        randomList.push(getRandomArbitrary(0,4));
        console.log(randomList)
        setJuego({list:[...randomList],buttonHide: true, estado: "começado", trava: false})
    }

    function playGame (number, index) {
        console.log("jogando");
        console.log(number);

        if (number <= 2) {
            console.log("o numero é menor que 2");
            number += 1;
            juego.list[index] = number;
            console.log(juego.list);
            setJuego({list:[...juego.list], buttonHide: true, estado:"começado", trava: false})
        } else if (number === 3) {
            console.log("o número é maior");
            number = 0;
            juego.list[index] = number;
            console.log(juego.list)
            setJuego({list:[...juego.list], buttonHide: true, estado:"começado", trava: false})
        }

        if (juego.list[0] === 1 &&
            juego.list[1] === 1 &&
            juego.list[2] === 1 &&
            juego.list[3] === 1 &&
            juego.list[4] === 1 &&
            juego.list[5] === 1 &&
            juego.list[6] === 1 &&
            juego.list[7] === 1 &&
            juego.list[8] === 1) {
            console.log("jogo finalizado");
            setJuego({list:[...juego.list], buttonHide: true, estado:"acabado", trava: true})
        }

    }


    return (
        <div>
             
            <div className='wrapper'>
                <p className={juego.buttonHide ? "hide": null}>Welcome to the image puzzle game!</p>
                <button className={`botao ${juego.buttonHide ? "hide": null}`}  onClick={() => startGame()}>Start-Game!</button>
                <div className={` ${juego.estado==="começado"? null : "hide"}`} >rearrenge the images by clicking on them!</div>
                <div className='linha'>
                    
                    {juego.list.slice(0,3).map((e, index) => <div className={`bloco imagem${index} number${e} ${juego.trava ? "trava": null}`} key={index} onClick={() => playGame(e,index)}>{e}</div>)}
                </div>
                <div className='linha'>
                    {juego.list.slice(3,6).map((e, index) => <div className={`bloco imagem${index+3} number${e} ${juego.trava ? "trava": null}`} key={index} onClick={() => playGame(e,index+3)}>{e}</div>)}
                </div>
                <div className='linha'>
                    {juego.list.slice(6,9).map((e, index) => <div className={`bloco imagem${index+6} number${e} ${juego.trava ? "trava": null}`} key={index} onClick={() => playGame(e,index+6)}>{e}</div>)}
                </div>
                <p className={juego.estado==="acabado"? "acabado": "hide"}>Game Finished!!!</p>
                <button className={`botao ${juego.estado==="acabado"? "acabado": "hide"}`} onClick={() => startGame()}>Play Again?</button>
            </div>            
        </div>
    )
}


export default Game
