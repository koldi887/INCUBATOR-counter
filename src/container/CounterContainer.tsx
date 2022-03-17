import React, { ReactElement } from 'react';

type PropsType = {
    topChildren: ReactElement
}

export const CounterContainer: React.FC<PropsType> = ({ topChildren, children }) => {

    return (
        <div className='app__counter box-border'>
            <div className='app__counter-box app__flex box-border'
                 style={{ height: '100%' }}>
                {topChildren}
            </div>
            <div className='app__counter-box app__flex box-border'>
                {children}
            </div>
        </div>
    );
};

