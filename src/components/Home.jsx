import React from 'react'
import '../css/home.css'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../actions/index"
export default function Home() {

    const state = useSelector(state => state.changeValue)
    const dispatch = useDispatch();

    return (
        <div className="center-box">
            <div className='center'>
                <div className='heading'>Increment / Decrement</div>
                <div className='description'>using React and Redux</div>
            </div>
            <section className='btnsection'>
                <button onClick={() => { dispatch(decrement(1)) }}>-</button>
                <span className="value">{state}</span>
                <button onClick={() => { dispatch(increment(1)) }}>+</button>
            </section>
        </div>
    )
}
