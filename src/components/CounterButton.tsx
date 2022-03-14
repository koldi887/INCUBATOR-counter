import React from 'react';

type PropsType = {
    title: string
    callBack: () => void
    counterValue?: number
    value?: number
}

const CounterButton: React.FC<PropsType> = ({
                                                title,
                                                callBack,
                                                counterValue,
                                                value
                                            }) => {

    const disableHandle = () => {
        return counterValue === value;
    }

    return (
        <div>
            <button onClick={callBack}
                    disabled={value || value === 0 ? disableHandle() : false}>
                {title}
            </button>
        </div>
    );
};

export default CounterButton;