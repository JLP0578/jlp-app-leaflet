import react, {useEffect, useState} from 'react'
import MapReducer from "../Reducers/MapReducer";
import {useMapContext} from "../Contexts/MapContext";
import {Link} from 'react-router-dom'

const User = () => {
    const {state, dispatch} = useMapContext()
    //console.log(state)

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')

    function save() {
        //console.log('save')
        //console.log(nom + ' // ' + prenom)
        dispatch({type: 'adduser', data: {firstName: nom, lastName: prenom, email: email}})
        //console.log(state)
    }

    return (
        <div><br/>
            <label for="Nom">Nom: </label>
            <input id="Nom" type="text" value={nom} onChange={(e) => {
                setNom(e.target.value)
            }}/><br/>

            <label htmlFor="Prenom">Prenom: </label>
            <input id="Prenom" type="text" value={prenom} onChange={(e) => {
                setPrenom(e.target.value)
            }}/><br/>

            <label htmlFor="Email">Email: </label>
            <input id="Email" type="email" value={email} onChange={(e) => {
                setEmail(e.target.value)
            }}/><br/>

            <Link to="/Map" onClick={() => {
                save()
            }}>Save and go to map</Link>
        </div>
    )
}

export default User