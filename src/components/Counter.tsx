import React from 'react';
import CounterButton from "./CounterButton";

type PropsType = {
    counterValue: number,
    maxValue: number,
    minValue: number,
    increase: () => void
    decrease: () => void
    reset: () => void
}

const Counter: React.FC<PropsType> = ({
                                          counterValue,
                                          maxValue,
                                          minValue,
                                          decrease,
                                          increase,
                                          reset
                                      }) => {
    console.log(maxValue)
    console.log(minValue)
    console.log(counterValue)
    return (
        <div>
            <h1 className={counterValue == +maxValue ? 'active' : ''}>{counterValue}</h1>
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