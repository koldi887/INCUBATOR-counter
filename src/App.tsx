import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from "./components/Counter";
import CounterSettings from "./components/CounterSettings";

function App() {
    const [ counterSettings, setCounterSettings ] = useState({ minValue: 0, maxValue: 5 })
    const [ counterValue, setCounterValue ] = useState(0)
    const [ error, setError ] = useState({ min: '', max: '' })
    const [ editMode, setEditMode ] = useState(false)


    const increase = () => {
        setCounterValue(counterValue + 1)
    }

    const decrease = () => {
        setCounterValue(counterValue - 1)
    }

    const reset = () => {
        setCounterSettings({ minValue: 0, maxValue: 5 })
        setCounterValue(0)
        localStorage.clear()
    }

    const saveSettings = () => {
        localStorage.setItem('settings', JSON.stringify(counterSettings))
        setCounterValue(counterSettings.minValue)
        setEditMode(false)
    }

    const settingsValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)

        const value = Number(e.target.value)
        const err = 'Incorrect value!'

        if (e.target.name === 'min') {
            setCounterSettings({ ...counterSettings, minValue: value })
            if (value < 0 || value > counterSettings.maxValue) {
                setError({ ...error, min: err })
            } else {
                setError({ ...error, min: '' })
            }
        }
        if (e.target.name === 'max') {
            setCounterSettings({ ...counterSettings, maxValue: value })
            if (value < 0 || value < counterSettings.minValue) {
                setError({ ...error, max: err })
            } else {
                console.log('da')
                setError({ ...error, max: '' })
            }
        }
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

    return (
        <div className="App">
            <Counter
                counterValue={counterValue}
                maxValue={counterSettings.maxValue}
                minValue={counterSettings.minValue}
                error={error}
                editMode={editMode}
                decrease={decrease}
                increase={increase}
                reset={reset}
            />

            <CounterSettings
                counterSettings={counterSettings}
                saveSettings={saveSettings}
                settingsValidation={settingsValidation}
                error={error}
            />

        </div>
    );
}

export default App;
