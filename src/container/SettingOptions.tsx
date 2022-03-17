import React, { ChangeEvent } from 'react';
import { OptionInput } from "../components";

type PropsType = {
    counterSettings: { minValue: number, maxValue: number };
    settingsValidation: (value: ChangeEvent<HTMLInputElement>) => void
    error: { min: string, max: string }
}

export const SettingOptions: React.FC<PropsType> = (
    {
        counterSettings,
        settingsValidation,
        error
    }) => {

    const inputClassHandler = (err: string): string => {
        if (err) {
            return 'input-error options-input'
        } else return 'options-input'
    }

    return (
        <div className=' app__settings'>

            <OptionInput
                title='min value'
                name='min'
                type='number'
                className={inputClassHandler(error.min)}
                value={counterSettings.minValue}
                onChange={settingsValidation}
            />

            <OptionInput
                title='max value'
                name='max'
                type='number'
                className={inputClassHandler(error.max)}
                value={counterSettings.maxValue}
                onChange={settingsValidation}
            />

        </div>
    );
};