import React from 'react';
import CounterButton from "./CounterButton";
import CounterScreen from "./CounterScreen";

type PropsType = {
    counterValue: number,
    maxValue: number,
    minValue: number,
    error: { min: string, max: string }
    editMode: boolean
    increase: () => void
    decrease: () => void
    reset: () => void
}

const Counter: React.FC<PropsType> = ({
                                          counterValue,
                                          maxValue,
                                          minValue,
                                          error,
                                          editMode,
                                          decrease,
                                          increase,
                                          reset
                                      }) => {
    return (
        <div>
            <CounterScreen
                counterValue={counterValue}
                maxValue={maxValue}
                error={error}
                editMode={editMode}
            />

            <CounterButton
                title={'inc'}
                callBack={increase}
                value={maxValue}
                counterValue={counterValue}
            />

            <CounterButton
                title={'dec'}
                callBack={decrease}
                value={minValue}
                counterValue={counterValue}
            />

            <CounterButton
                title={'reset'}
                callBack={reset}
            />

        </div>
    );
};

export default Counter;