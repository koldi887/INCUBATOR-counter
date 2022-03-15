import React from 'react';

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
    const screenValue = errors ? <p className='active'>{errors}</p> : editMode
        ? <p className='text-color'>enter values and press "set"</p> : false

    return (
        <div className='text-color'>
            {screenValue || (
                <h1 className={counterValue === maxValue ? 'active' : ''}>{counterValue}</h1>
            )}
        </div>
    );
};

export default CounterScreen;