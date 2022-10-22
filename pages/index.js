import { useEffect, useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)
  const [winner, setWinner] = useState('')
  const [oneState, setOneState] = useState('')
  const [twoState, setTwoState] = useState('')
  const [threeState, setThreeState] = useState('')
  const [fourState, setFourState] = useState('')
  const [fiveState, setFiveState] = useState('')
  const [sixState, setSixState] = useState('')
  const [sevenState, setSevenState] = useState('')
  const [eightState, setEightState] = useState('')
  const [nineState, setNineState] = useState('')

  const [currentPlayer, setCurrentPlayer] = useState('x')

  useEffect(() => {
    let activateAlert = false;
    // OJO! QUE ESTO TAMBIÉN SE VA A RENDERIZAR POR PRIMERA VEZ
    // CREAR UNA FORMA QUE NO ARROJE GANADOR LA PRIMERA VEZ QUE SE RENDERIZA
    setWinner(currentPlayer);
    if (count >= 5) {
      if (oneState === twoState && twoState === threeState && oneState !== '') {
        console.log('winner1', winner);
        activateAlert = true
      } else if (fourState === fiveState && fiveState === sixState && fourState !== '') {
        // setWinner(currentPlayer)
        console.log('winner2', winner);
        activateAlert = true;
      } else if (sevenState === eightState && eightState === nineState && sevenState !== '') {
        // setWinner(currentPlayer)
        console.log('winner3', winner);
        activateAlert = true;
      } else if (oneState === fourState && fourState === sevenState && oneState !== '') {
        // setWinner(currentPlayer)
        console.log('winner4', winner);
        activateAlert = true;
      } else if (twoState === fiveState && fiveState === eightState && twoState !== '') {
        // setWinner(currentPlayer)
        console.log('winner5', winner);
        activateAlert = true;
      } else if (threeState === sixState && sixState === nineState && threeState !== '') {
        // setWinner(currentPlayer)
        console.log('winner6', winner);
        activateAlert = true;
      } else if (oneState === fiveState && fiveState === nineState && oneState !== '') {
        // setWinner(currentPlayer)
        console.log('winner7', winner);
        activateAlert = true;
      } else if (threeState === fiveState && fiveState === sevenState && threeState !== '') {
        // setWinner(currentPlayer)
        console.log('winner8', winner)
        activateAlert = true;

      }

      activateAlert ? alert(winner) : activateAlert = false
    } else {
      return
    }

    // es que solamente ocurra lo de arriba si alguno de los valores siguientes cambia
  }, [oneState, twoState, threeState, fourState, fiveState, sixState, sevenState, eightState, nineState])

  //     1. Ver la forma de establecer si un player ganó
  // 2. Cuando un player gane, se muestre un Alert

  // 3. Ver 4 button reset



  function changePlayer(buttonValue) {
    setCount(count + 1)
    // if( button === 'button1' && button1 !== '') return
    // if( button === 'button2' && button2 !== '') return
    // if( button === 'button3' && button3 !== '') return
    // if( button === 'button4' && button4 !== '') return
    // if( button === 'button5' && button5 !== '') return
    // if( button === 'button6' && button6 !== '') return
    // if( button === 'button7' && button7 !== '') return
    // if( button === 'button8' && button8 !== '') return
    // if( button === 'button9' && button9 !== '') return


    buttonValue === 'uno' && oneState == '' && setOneState(currentPlayer)
    buttonValue === 'dos' && twoState == '' && setTwoState(currentPlayer)
    buttonValue === 'tres' && threeState == '' && setThreeState(currentPlayer)
    buttonValue === 'cuatro' && fourState == '' && setFourState(currentPlayer)
    buttonValue === 'cinco' && fiveState == '' && setFiveState(currentPlayer)
    buttonValue === 'seis' && sixState == '' && setSixState(currentPlayer)
    buttonValue === 'siete' && sevenState == '' && setSevenState(currentPlayer)
    buttonValue === 'ocho' && eightState == '' && setEightState(currentPlayer)
    buttonValue === 'nueve' && nineState == '' && setNineState(currentPlayer)


    currentPlayer === 'x' ? setCurrentPlayer('o') : setCurrentPlayer('x')


    console.log('buttonValue', buttonValue, 'count', count)

  }

  return (
    <>
      <h2>{currentPlayer}</h2>
      <div className="grid grid-cols-3 gap-4">
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('uno')} disabled={oneState}>{oneState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('dos')} disabled={twoState}>{twoState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('tres')} disabled={threeState}>{threeState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('cuatro')} disabled={fourState}>{fourState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('cinco')} disabled={fiveState}>{fiveState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('seis')} disabled={sixState}>{sixState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('siete')} disabled={sevenState}>{sevenState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('ocho')} disabled={eightState}>{eightState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('nueve')} disabled={nineState}>{nineState}</button>
      </div>
    </>
  )
}