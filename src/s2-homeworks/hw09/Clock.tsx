import React, {useState, MouseEvent} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        let realTime = window.setTimeout(()=> {
            setDate(new Date(restoreState('hw9-date', Date.now())));
            setTimerId(realTime)
            start();

        },1000)

    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    window.clearTimeout(timerId? timerId + 1 : undefined)
        setTimerId(undefined)
    }

    const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => { // пишут студенты // показать дату если наведена мышка
        if( (e.clientX > 130 && e.clientX < 190) || (e.clientY < 558 && e.clientY > 579) ){
           setShow(true)
        }

    }
    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => { // пишут студенты // спрятать дату если мышка не наведена
        if(( e.clientX !> 90 && e.clientX !< 165) || (e.clientY !> 558 && e.clientY !< 579)){
            setShow(false)

        }
    }
    const formatterTime = new Intl.DateTimeFormat("en", {
        hour : "2-digit",
        hour12: false,
        minute: "numeric",
        second: "numeric"
    })
    const formatterWeekDay = new Intl.DateTimeFormat("en", {
        weekday : "long"
    })
    const formatterStringDate = new Intl.DateTimeFormat("ru", {
        day : "numeric",
        month : "numeric",
        year: "numeric"
    })
    const formatterStringMonth = new Intl.DateTimeFormat("en",{
        month: "long"
    })
    const stringTime = formatterTime.format(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = formatterStringDate.format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)


    const stringDay = formatterWeekDay.format(date) || <br/> // пишут студенты
    const stringMonth = formatterStringMonth.format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
