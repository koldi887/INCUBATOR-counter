import React, { useEffect, useState } from 'react';
import './App.css';
import {
    Button,
    CounterButtons,
    CounterContainer,
    CounterScreen,
    SettingOptions
} from "./components";

function App() {
    const [ counterSettings, setCounterSettings ] = useState({ minValue: 0, maxValue: 5 })
    const [ counterValue, setCounterValue ] = useState(0)
    const [ error, setError ] = useState({ min: '', max: '' })
    const [ editMode, setEditMode ] = useState(false)

    useEffect(() => {
        const counter = localStorage.getItem('count')
        const settings = localStorage.getItem('settings')

        if (counter) setCounterValue(JSON.parse(counter))
        if (settings) setCounterSettings(JSON.parse(settings))
    }, [])


    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(counterValue))
    }, [ counterValue ])

    const increase = () => {
        setCounterValue(counterValue + 1)
    }

    const decrease = () => {
        setCounterValue(counterValue - 1)
    }

    const reset = () => {
        setCounterSettings({ minValue: 0, maxValue: 5 })
        setError({ min: '', max: '' })
        setCounterValue(0)
        setEditMode(false)
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
                setError({ ...error, max: '' })
            }
        }
    }

    return (
        <div className="app">
            <CounterContainer topChildren={
                <SettingOptions
                    settingsValidation={settingsValidation}
                    counterSettings={counterSettings}
                    error={error}/>}
            >
                <Button title='set' callBack={saveSettings}/>
            </CounterContainer>

            <CounterContainer topChildren={
                <CounterScreen
                    counterValue={counterValue}
                    maxValue={counterSettings.maxValue}
                    error={error}
                    editMode={editMode}/>}
            >
                <CounterButtons
                    counterSettings={counterSettings}
                    counterValue={counterValue}
                    reset={reset}
                    increase={increase}
                    decrease={decrease}
                />
            </CounterContainer>
        </div>
    )
}

export default App;
