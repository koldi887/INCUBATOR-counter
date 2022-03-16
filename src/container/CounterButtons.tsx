import React from 'react';
import { Button } from "../components";

type PropsType = {
    counterValue: number,
    counterSettings: { minValue: number, maxValue: number },
    editMode: boolean
    increase: () => void
    decrease: () => void
    reset: () => void
}

const CounterButtons: React.FC<PropsType> = (
    {
        counterValue,
        counterSettings,
        editMode,
        increase,
        decrease,
        reset
    }) => {

    const disableHandler = (value: number) => {
        if (editMode) return true
        if (value || value === 0) {
            return counterValue === value
        } else return false
    }

    return (
        <>
            <Button
                title='inc'
                onClick={increase}
                disabled={disableHandler(counterSettings.maxValue)}
            />

            <Button
                title='dec'
                onClick={decrease}
                disabled={disableHandler(counterSettings.minValue)}
            />

            <Button
                title='reset'
                onClick={reset}
            />
        </>
    );
};

export default CounterButtons;