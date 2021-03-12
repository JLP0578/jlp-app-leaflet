const MapReducer = (state, action) => {
  switch (action.type) {

    case 'addmarker':
      return { ...state, markers: [...state.markers, action.marker] }


    case 'removemarker':
      const markers = [...state.markers]
      markers.splice(action.i, 1)
      return { ...state, markers: [...(markers || [])] }


    case 'adduser':
      return { ...state, user: {...state.user, ...action.user} }


    default:
      return { ...state }
  }
}

export default MapReducer;
