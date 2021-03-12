import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap} from 'react-leaflet'

import {useMapContext} from "../Contexts/MapContext";
import {Link} from "react-router-dom";

const Map = () => {
    const {state, dispatch} = useMapContext()

    const Loc = () => {
        const map = useMap()
        useEffect(() => {
            if('geolocalisation' in navigator){
                navigator.geolocation.getCurrentPosition((pos) => {
                    const {lat, lng} = pos.coords
                    map.setView([lat, lng])
                })
            }
        },[])
        return <></>
    }


    const AddMarker = () => {
        const map = useMapEvents({
            click(e) {
                const {lat , lng} = e.latlng
                dispatch({type: 'addmarker', marker: [lat, lng]})

                if('vibrate' in navigator) navigator.vibrate(1000)
            }
        })
        return (
            <>
                {state.markers.map((loc) => {
                        return (
                            <Marker position={loc}>
                                <Popup>You are here</Popup>
                            </Marker>
                        )
                    })
                }
            </>
        )
    }

    const TILE_LAYER2 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

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
            <MapContainer
                center={[46.232192999999995, 2.209666999999996]}
                zoom={5}
            >
                <TileLayer attribution={ATTRIBUTION} url={TILE_LAYER2}/>
                <AddMarker/>
            </MapContainer>
        </>
    );
}

export default Map