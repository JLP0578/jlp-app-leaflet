import react, {useState} from 'react'
import MapReducer from "../Reducers/MapReducer";
import { useMapContext } from "../Contexts/MapContext";

const List = () => {
    const { state, dispatch } = useMapContext()
    console.log(state);





    return (
        <>
            {state.markers.map(
                <p>List</p>
            )}
       </>
    )
}

export default List