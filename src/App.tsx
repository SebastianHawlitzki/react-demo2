import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
//          value, function
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("");


    const clickHandler = () => {
        setCount(count + 1);

    }
const clickHandlerMinus = () => {
        setCount(count -1)
}

    return (
        <>
            <div className="App">
                <header className={"App-header"}>
                    <h1>{count}</h1>
                    <button onClick={clickHandler}>Click me!</button>
                    <br/>
                    <button onClick={clickHandlerMinus}> Verringern</button>
                </header>

            </div>


        </>
    );

}


