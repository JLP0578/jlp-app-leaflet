import react, {useState} from 'react'
import MapReducer from "../Reducers/MapReducer";
import {useMapContext} from "../Contexts/MapContext";
import React from "react";
import {Link} from "react-router-dom";

const List = () => {
    const {state, dispatch} = useMapContext()

    const NameCurrentUser = () => {
        return(
            <>
                <p>Hello, {state.user.nom} !!!</p>
            </>
        )
    }

    return (
        <>
            {state.user? <NameCurrentUser /> : ''}
            <p>List</p>
            <ul>
                {state.markers.map((marker, i) =>
                    <li key={`marker_${i}`} id={`marker_${i}`}>
                        <span>lat: {marker[0]}, lng: {marker[1]}</span>
                        <button>
                            <Link to="/List" onClick={() => {
                            dispatch({type: 'removemarker', i})}
                        }> X </Link>
                        </button>

                    </li>
                )}
            </ul>
        </>
    )
}
export default List