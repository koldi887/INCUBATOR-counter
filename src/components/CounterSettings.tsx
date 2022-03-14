import React, { ChangeEvent } from 'react';

type PropsType = {
    counterSettings: { minValue: number, maxValue: number };
    saveSettings: () => void
    settingsValidation: (value: ChangeEvent<HTMLInputElement>) => void
    error: { min: string, max: string }
}

const CounterSettings: React.FC<PropsType> = ({
                                                  counterSettings,
                                                  saveSettings,
                                                  settingsValidation,
                                                  error
                                              }) => {

    return (
        <>
            <input
                className={error.min ? 'active' : ''}
                name='min'
                type="number"
                value={counterSettings.minValue}
                onChange={settingsValidation}
            />

            <input
                className={error.max ? 'active' : ''}
                name='max'
                type="number"
                value={counterSettings.maxValue}
                onChange={settingsValidation}
            />

            <button onClick={saveSettings}>set</button>
        </>
    );
};

export default CounterSettings;