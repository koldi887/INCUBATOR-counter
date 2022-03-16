import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

const Button: React.FC<IProps> = (
    {
        title,
        ...restProps
    }) => {

    return (
        <button
            className='button'
            {...restProps}
        >
            {title}
        </button>
    );
};

export default Button;