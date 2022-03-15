import React from 'react';
import { Button } from "../components";

type PropsType = {
    counterValue: number,
    counterSettings: { minValue: number, maxValue: number },
    increase: () => void
    decrease: () => void
    reset: () => void
}

const CounterButtons: React.FC<PropsType> = (
    {
        counterValue,
        counterSettings,
        increase,
        decrease,
        reset
    }) => {

    return (
        <>
            <Button
                title='inc'
                callBack={increase}
                value={counterSettings.maxValue}
                counterValue={counterValue}
            />

            <Button
                title='dec'
                callBack={decrease}
                value={counterSettings.minValue}
                counterValue={counterValue}
            />

            <Button
                title='reset'
                callBack={reset}
            />
        </>
    );
};

export default CounterButtons;