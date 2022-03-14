import React, { useState } from 'react';

type PropsType = {
    counterValue: number,
    maxValue: number,
    error: { min: string, max: string }
    editMode: boolean

}

const CounterScreen: React.FC<PropsType> = ({
                                                counterValue,
                                                maxValue,
                                                error,
                                                editMode
                                            }) => {
    const errors = Object.values(error).filter(val => val).join()
    const screenValue = errors ? errors : editMode ? 'enter values and press "set"' : false

    return (
        <div>
            {screenValue || (
                <h1 className={counterValue === maxValue ? 'active' : ''}>{counterValue}</h1>
            )}
        </div>
    );
};

export default CounterScreen;