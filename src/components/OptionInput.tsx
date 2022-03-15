import React, { ChangeEvent } from 'react';

type PropsType = {
    title: string,
    name: string
    type: string
    classHandler: () => string
    value: number
    callback: (value: ChangeEvent<HTMLInputElement>) => void
}

const OptionInput: React.FC<PropsType> = (
    {
        title,
        name,
        type,
        classHandler,
        value,
        callback
    }) => {

    return (
        <div className='app__settings-options'>
            <p className='text-color'>{title}:</p>
            <input
                name={name}
                type={type}
                className={classHandler()}
                value={value}
                onChange={callback}
            />
        </div>
    );
};

export default OptionInput;