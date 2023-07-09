import React, { useReducer, useState } from 'react'

export default function Home() {

    // const [counter, setCounter] = useState(0)

    const initialData = {
        counter: 0,
        username: ""
    }


    const myCallback = (state, action) => {
        switch (action.type) {
            case "INCREMENT_COUNTER":
                return { ...state, counter: state.counter++ }
            case "DECREMENT_COUNTER":
                return { ...state, counter: state.counter-- }

            case "SET_USER":
                return { ...state, [action.payload.name]: action.payload.value }



            default:
                return state;
        }


    }

    const [state, dispatch] = useReducer(myCallback, initialData)
    return (
        <>


            {/* <button className='btn btn-dark' onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button className='btn btn-dark'  onClick={() => setCounter(counter - 1)}>-</button> */}



            <button className='btn btn-dark' onClick={
                () => dispatch(
                    {
                        type: "INCREMENT_COUNTER"
                    }
                )
            }>+</button>
            {state.counter}
            <button className='btn btn-dark' onClick={() => dispatch(
                {
                    type: "DECREMENT_COUNTER"
                }
            )}>-</button>

            <div>
                <input type='text' value={state.username} name="username"

                    onChange={(e) => dispatch({
                        type: 'SET_USER',
                        payload: {
                            "name": e.target.name,
                            "value": e.target.value
                        }


                    })}

                />

                {state.username}
            </div>

        </>
    )
}