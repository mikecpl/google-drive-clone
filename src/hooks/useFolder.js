import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useReducer } from "react";
import { firestore } from "../firebase";
import useAuth from "./useAuth";

const ACTIONS = {
  SET_FOLDER: 'set-folder',
  UPDATE_FOLDER: 'update-folder'
}

const ROOT_FOLDER = {
  id: null,
  name: 'Root',
  path: []
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SET_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFolders: [],
        childFiles: []
      }

    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      }

    default:
      return state
  }
}

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: []
  });
  const { user } = useAuth();

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_FOLDER, payload: {
        folderId,
        folder
      }
    });
  }, [folderId, folder])

  useEffect(() => {
    if (folderId === null) {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER }
      });
    }

    const docRef = doc(firestore, 'folders', folderId);
    getDoc(docRef).then(response => {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: response.data() }
      });
    }).catch(() => {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER }
      });
    });
  }, [folderId]);

  useEffect(() => {
    // TODO 

    //onSnapshot()
  }, [folderId, user]);

  return state;
}
