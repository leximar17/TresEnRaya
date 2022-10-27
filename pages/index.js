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
  const [activateButtonPlayer, setActivateButtonPlayer] = useState(false)
  const [activateAlert, setActivateAlert] = useState(false)

  if (activateAlert) {
    alert(winner)
  }else{
    
  }
  function endGame() {
    setActivateAlert(true);
    setActivateButtonPlayer(true);
    console.log('alert', activateAlert)
    
  }
  function reset() {
    setCount(0)
    setWinner('')
    setTwoState('')
    setOneState('')
    setThreeState('')
    setFourState('')
    setFiveState('')
    setSixState('')
    setSevenState('')
    setEightState('')
    setNineState('')
    setCurrentPlayer('x')
    setActivateButtonPlayer(false)
    setActivateAlert(false)

  }
  useEffect(() => {
    currentPlayer == 'x' ?setWinner('o') : setWinner ('x')

    // OJO! QUE ESTO TAMBIÉN SE VA A RENDERIZAR POR PRIMERA VEZ
    // CREAR UNA FORMA QUE NO ARROJE GANADOR LA PRIMERA VEZ QUE SE RENDERIZA
    // setWinner(currentPlayer == 'x' && 'o');
    if (count >= 5 || !activateAlert) {
      if (oneState === twoState && twoState === threeState && oneState !== '') {
        endGame();
      } else if (fourState === fiveState && fiveState === sixState && fourState !== '') {
        endGame();
      } else if (sevenState === eightState && eightState === nineState && sevenState !== '') {
        endGame();
      } else if (oneState === fourState && fourState === sevenState && oneState !== '') {
        endGame();
      } else if (twoState === fiveState && fiveState === eightState && twoState !== '') {
        endGame();
      } else if (threeState === sixState && sixState === nineState && threeState !== '') {
        endGame();
      } else if (oneState === fiveState && fiveState === nineState && oneState !== '') {
        endGame();
      } else if (threeState === fiveState && fiveState === sevenState && threeState !== '') {
        endGame();
      }
      
      // activateAlert ? alert(winner) : setActivateAlert(false)
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
      <h2 className="m-4 text-4xl font-bold tracking-tight text-indigo-600">Current Player : {currentPlayer}</h2>
      <div className="grid grid-cols-3 gap-4">
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('uno')} disabled={activateButtonPlayer || oneState}>{oneState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('dos')} disabled={activateButtonPlayer || twoState}>{twoState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('tres')} disabled={activateButtonPlayer || threeState}>{threeState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('cuatro')} disabled={activateButtonPlayer || fourState}>{fourState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('cinco')} disabled={activateButtonPlayer || fiveState}>{fiveState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('seis')} disabled={activateButtonPlayer || sixState}>{sixState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('siete')} disabled={activateButtonPlayer || sevenState}>{sevenState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('ocho')} disabled={activateButtonPlayer || eightState}>{eightState}</button>
        <button className="h-20 border-4 border-indigo-500/100" onClick={() => changePlayer('nueve')} disabled={activateButtonPlayer || nineState}>{nineState}</button>
      </div>

      <button className="my-4 p-2 border-2 bg-red-300/100" onClick={() => reset()}>Reset</button>

    </>
  )
}