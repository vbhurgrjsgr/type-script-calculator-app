import { useState } from "react";
import '/src/Styles/ButtonStyle.css'

function Calculator() {
  const [display, setDisplay] = useState<string>("0");
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>("");

  function handleDigitClick(digit: string): void {
    if (display === "0" && digit !== ".") {
      setDisplay(digit);
    } else if (digit === "." && display.indexOf(".") === -1) {
      setDisplay(display + digit);
    } else if (digit !== ".") {
      setDisplay(display + digit);
    }
  }

  function handleClearClick(): void {
    setDisplay("0");
    setNum1(0);
    setNum2(0);
    setOperation("");
  }

  function handleOperatorClick(op: string) {
    setOperation(op);
    setNum1(parseFloat(display));
    setNum2(parseFloat(display));
    setDisplay("0");
  }
  
  function handleEqualsClick() {
    const result = calculator(operation, num1, parseFloat(display));
    setDisplay(result.toString());
    setNum1(result);
    setNum2(0);
    setOperation("");
  }

  function handleSignChangeClick(): void {
    const newDisplay = (parseFloat(display) * -1).toString();
    setDisplay(newDisplay);
  }

  function handlePercentClick(): void {
    const newDisplay = (parseFloat(display) / 100).toString();
    setDisplay(newDisplay);
  }

  function calculator(operation: string, num1: number, num2: number): number {
    let num3: number;
    switch (operation) {
      case "+":
        num3 = num1 + num2;
        break;
      case "-":
        num3 = num1 - num2;
        break;
      case "*":
        num3 = num1 * num2;
        break;
      case "/":
        num3 = num1 / num2;
        break;
      default:
        num3 = num2;
    }
    return num3;
    console.log(num3)
  }
  return (
  <div>
    <h1>Calculator</h1>
    <input  maxLength={11} type="text" value={display} readOnly />
    <br />
    <button className='GrayCircle' onClick={handleClearClick}>C</button> 
    <button className='GrayCircle' onClick={handleSignChangeClick}>+/-</button>
    <button className='GrayCircle' onClick={handlePercentClick}>%</button>
    <button className='OrangeCircle' onClick={() => handleOperatorClick('/')}>/</button>
    <br />      
    <button className='circle' onClick={() => handleDigitClick('1')}>1</button>
    <button className='circle' onClick={() => handleDigitClick('2')}>2</button>
    <button className='circle' onClick={() => handleDigitClick('3')}>3</button>
    <button className='OrangeCircle' onClick={() => handleOperatorClick('+')}>+</button>
    <br />
    <button className='circle' onClick={() => handleDigitClick('4')}>4</button>
    <button className='circle' onClick={() => handleDigitClick('5')}>5</button>
    <button className='circle' onClick={() => handleDigitClick('6')}>6</button>
    <button className='OrangeCircle' onClick={() => handleOperatorClick('-')}>-</button>
    <br />
    <button className='circle' onClick={() => handleDigitClick('7')}>7</button>
    <button className='circle' onClick={() => handleDigitClick('8')}>8</button>
    <button className='circle' onClick={() => handleDigitClick('9')}>9</button>
    <button className='OrangeCircle' onClick={() => handleOperatorClick('*')}>*</button>
    <br />
    <button className='NullCircle' onClick={() => handleDigitClick('0')}>0</button>
    <button className='circle' onClick={() => handleDigitClick('.')}>,</button>
    <button className='OrangeCircle' onClick={handleEqualsClick}>=</button>
  </div>
  );
}
    
    export default Calculator;