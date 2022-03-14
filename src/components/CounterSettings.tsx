import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

type PropsType = {
    counterSettings: { minValue: number, maxValue: number };
    setCounterSettings: (value: { minValue: number, maxValue: number }) => void;
    setCounterValue: (value: number) => void

}

const CounterSettings: React.FC<PropsType> = ({
                                                  counterSettings,
                                                  setCounterSettings,
                                                  setCounterValue
                                              }) => {
    const {
        register,
        handleSubmit,
    } = useForm<typeof counterSettings>();

    const onFormSubmit = handleSubmit((data) => {
        setCounterSettings({
            minValue: Number(data.minValue),
            maxValue: Number(data.maxValue)
        })
        setCounterValue(Number(data.minValue))
    });

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="number"
                    defaultValue={counterSettings.minValue}
                    {...register('minValue')}
                />

                <input
                    type="number"
                    defaultValue={counterSettings.maxValue}
                    {...register('maxValue')}
                />

                <button type="submit">set</button>
            </form>
        </>
    );
};

export default CounterSettings;