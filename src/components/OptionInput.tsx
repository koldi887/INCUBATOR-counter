import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const OptionInput: React.FC<IProps> = (
    {
        title,
        ...restProps
    }) => {

    return (
        <div className='app__settings-options'>
            <p className='text-color'>{title}:</p>
            <input {...restProps} />
        </div>
    );
};

export default OptionInput;