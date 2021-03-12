import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'

import MapReducer from "../Reducers/MapReducer";
import {useMapContext} from "../Contexts/MapContext";
import {Link} from "react-router-dom";

//import 'leaflet/dist/leaflet.css';
const Map = () => {
    const {state, dispatch} = useMapContext()

    console.log(state);

    const [lat, setLat] = useState(44)
    const [lng, setLng] = useState(6)
    const [zoom, setZoom] = useState(9)

    function save(id, lat ,lng) {
        dispatch({type: 'addmarker', data: {id: id, lat: lat, lng: lng}})
        console.log(state)
    }

    const AddMarker = () => {
        const [position, setPosition] = useState([])
        const [count, setCount] = useState(0)
        const Markers = null
        const mapv2 = useMapEvents({
            click(e,click) {
                //console.log('click ' + e.latlng)
                //console.log(position);
                setCount(prevCount => prevCount + 1)
                console.log(count);
                save(count,e.latlng.lat,e.latlng.lng)
                //console.log(state)
                //map.locate()
            }
        })
        console.log(position);
        return (
            <>
                {position.map((loc) => {
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

    return (
        <>
            {`Hello, ${state?.user?.firstName} !!!`}
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
            >
                <TileLayer attribution={ATTRIBUTION} url={TILE_LAYER2}/>
                <AddMarker/>
            </MapContainer>
            <Link to="/List" onClick={() => {
                save()
            }}>View markers</Link>
        </>
    );
}

export default Map

/*
{marker.map( () => {
                return (
                    <Marker key={} position={}>
                        <Popup>
                            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                        </Popup>
                    </Marker>
                );
            })};
* */