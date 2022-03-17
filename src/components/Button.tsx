import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    backgroundColor?: string
}

export const Button: React.FC<IProps> = (
    {
        title,
        backgroundColor,
        ...restProps
    }) => {

    return (
        <button
            className='button'
            style={{backgroundColor}}
            {...restProps}
        >
            {title}
        </button>
    );
};
