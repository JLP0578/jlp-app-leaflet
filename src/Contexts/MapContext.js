import React, { useContext } from 'react'

const MapContext = React.createContext({})

const useMapContext = () => useContext(MapContext)

export default MapContext

export { useMapContext }
