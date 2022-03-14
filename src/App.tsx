import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from "./components/Counter";
import CounterSettings from "./components/CounterSettings";

function App() {
    const [ counterSettings, setCounterSettings ] = useState({ minValue: 0, maxValue: 5 })
    const [ counterValue, setCounterValue ] = useState(0)

    const increase = () => {
        setCounterValue(counterValue + 1)
    }

    const decrease = () => {
        setCounterValue(counterValue - 1)
    }

    const reset = () => {
        setCounterSettings({ minValue: 0, maxValue: 5 })
        setCounterValue(0)
    }

    useEffect(() => {
        const counter = localStorage.getItem('count')
        const settings = localStorage.getItem('settings')

        if (counter) setCounterValue(JSON.parse(counter))
        if (settings) setCounterSettings(JSON.parse(settings))
    }, [])


    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(counterValue))
    }, [ counterValue ])


    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(counterSettings))
    }, [ counterSettings ])


    return (
        <div className="App">
            <Counter
                counterValue={counterValue}
                maxValue={counterSettings.maxValue}
                minValue={counterSettings.minValue}
                decrease={decrease}
                increase={increase}
                reset={reset}
            />

            <CounterSettings
                counterSettings={counterSettings}
                setCounterSettings={setCounterSettings}
                setCounterValue={setCounterValue}
            />

        </div>
    );
}

export default App;
