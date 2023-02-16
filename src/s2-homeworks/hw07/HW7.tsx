import React, { useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'

/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */

const arr = [
    { id: 1, value: 'pre-junior' },
    { id: 2, value: 'junior' },
    { id: 3, value: 'junior-plus' },
] // value может быть изменено

const HW7 = () => {
    const [value, onChangeOption] = useState(1) // селект и радио должны работать синхронно

    return (
        <div id={'hw7'}>
            <div className={s2.hwTitle}><h3>Homework #7</h3></div>

            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <div className={s.container}>
                    <div>
                        <SuperSelect
                            id={'hw7-super-select'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                    <div>
                        <SuperRadio
                            id={'hw7-super-radio'}
                            name={'hw7-radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW7