
const defaultState = {
  currentUser: {},
  isAuth: false
}

export default function countryReducer(state = defaultState, action) {
  switch (action.type) {
      // case SET_FILES: return {...state, files: action.payload}
      // case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
      // case ADD_FILE: return {...state, files: [...state.files, action.payload]}
      // case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
      // case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
      // case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id != action.payload)]}
      // case SET_VIEW: return {...state, view: action.payload}
      default:
          return state
  }
}