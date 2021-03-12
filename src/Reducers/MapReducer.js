const MapReducer = (state, action) => {
  const { type, data } = action
  switch (type) {
    case 'addmarker':
      return { ...state, markers: [{id: data.nb, lat: data.lat, lng: data.lng}] }
      //{id: data.nb, lat: data.lat, lng: data.lng}
    /*case 'removemarker':
      return { ...state, marker: [...state(state.markers || []), action.marker] }*/
    case 'adduser':
      return { ...state, user: { firstName: data.firstName, lastName: data.lastName, email: data.email}}
    default:
      return { ...state }
  }
}

export default MapReducer;
