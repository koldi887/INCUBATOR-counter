import React, { ChangeEvent } from 'react';
import { OptionInput } from "../components";

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

            <OptionInput
                title='min value'
                name='min'
                type='number'
                classHandler={() => inputClassHandler(error.min)}
                value={counterSettings.minValue}
                callback={settingsValidation}
            />

            <OptionInput
                title='max value'
                name='max'
                type='number'
                classHandler={() => inputClassHandler(error.max)}
                value={counterSettings.maxValue}
                callback={settingsValidation}
            />

        </div>
    );
};

export default SettingOptions;