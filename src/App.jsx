
import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';

function App() {

  function handleClick() {
    alert('button click');
  }


  return (
    <>

      <h1>MY Second React</h1>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>


    </>
  )
}

export default App
