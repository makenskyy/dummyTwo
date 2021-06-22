const defaultState = {
  users: []
}

export const SET_IMPORTED_USERS = "SET_IMPORTED_USERS";
export const IMPORT_USERS = "IMPORT_USERS";

export const importedUsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IMPORTED_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export const setImportedUsers = (payload) => ({ type: SET_IMPORTED_USERS, payload })
export const importUsers = () => ({ type: IMPORT_USERS })

