import React from 'react';

type PropsType = {
    title: string
    callBack: () => void
    counterValue?: number
    value?: number
}

const Button: React.FC<PropsType> = ({
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
            <button
                className='button'
                disabled={value || value === 0 ? disableHandle() : false}
                onClick={callBack}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;