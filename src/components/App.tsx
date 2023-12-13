import React, {useState} from 'react';
import s from "./App.module.scss";
import {Link, Outlet} from "react-router-dom";
import {Shop} from "../pages/Shop";
import {LazyAbout} from "@/pages/About/About.lazy";
import catJpg from "@/assets/jpg.jpg";
import Cmrt from "@/assets/cmrt.svg"

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const counter = () => setCount(prevState => prevState + 1);

    return (
        <div className={s.block}>

            <div data-textid={'App.dataTestId'}>
                PLATFORM = {__PLATFORM__}
            </div>

            <div>
                <img src={catJpg} alt="" width={150}/>
            </div>

            <div>
                <Cmrt fill={'red'}/>
            </div>

            <Link to={'/about'}><LazyAbout/></Link>
            <br/>
            <Link to={'/shop'}><Shop/></Link>

            <div>{count}</div>
            <button className={s.btn} onClick={() => counter()}>click on me</button>
            <Outlet/>
        </div>
    );
};