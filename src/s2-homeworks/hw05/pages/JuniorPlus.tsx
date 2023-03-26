import React from 'react'
import HW10 from "../../hw10/HW10";
import {Provider} from "react-redux";
import store from "../../hw10/bll/store";
import HW11 from '../../hw11/HW11';
import HW12 from "../../hw12/HW12";


function JuniorPlus() {
    return (
        <div id={'hw5-page-junior-plus'}>
            <Provider store={store}>
            <HW10 />
            </Provider>
            <HW11 />
            <HW12 />
            {/*<HW13 />*/}
            {/*<HW14 />*/}
            {/*<HW15 />*/}
        </div>
    )
}

export default JuniorPlus
