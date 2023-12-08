import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hell from './components/header'

function App() {
  let nametest = 'xin chao'
  let num1 = 1;
  let num2 = 2;
  const ojb = {
    name: 'simppeLove',
    age: 18,
    address: 'Ba Dinh Ha Noi'
  }

  const { name, age, address } = ojb;
  //array
  const newArr = ["green", "black", 'white', "yellow"];
  const stringTest = `${nametest} toi la so: ${num1 + num2}`;

  const hasColor = listColor => {
    if (listColor.length > 0) {
      const colors = listColor.filter(el => el.length > 5);

      return colors.map(el => <p>{el}</p>)
    } else {
      return <>no color</>
    }
  }
  return (
    <div>
      {/* {`${nametest} toi la so: ${num1 + num2}`}
      {nametest} toi la so: {num1 + num2}; */}
      {stringTest}

      My name is: {name}  . Im {age} year old!

      {/* Map of array */}
      {hasColor(newArr)}

      < Hell></ Hell>
      {num1 + num2};
    </div>
  )
}
export default App;
