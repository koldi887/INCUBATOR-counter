import React, { ChangeEvent } from 'react';

type PropsType = {
    counterSettings: { minValue: number, maxValue: number };
    settingsValidation: (value: ChangeEvent<HTMLInputElement>) => void
    error: { min: string, max: string }
}

const SettingOptions: React.FC<PropsType> = (
    {
        counterSettings,
        settingsValidation,
        error
    }) => {

    const inputClassHandler = (err: string) => {
        if (err) {
            return 'input-error options-input'
        } else return 'options-input'
    }

    return (
        <div className=' app__settings'>

            <div className={'app__settings-options'}>
                <p className='text-color'>max value:</p>
                <input
                    name='min'
                    type="number"
                    className={inputClassHandler(error.min)}
                    value={counterSettings.minValue}
                    onChange={settingsValidation}
                />
            </div>

            <div className={'app__settings-options '}>
                <p className='text-color'>min value:</p>
                <input
                    name='max'
                    type="number"
                    className={inputClassHandler(error.max)}
                    value={counterSettings.maxValue}
                    onChange={settingsValidation}
                />
            </div>

        </div>
    );
};

export default SettingOptions;