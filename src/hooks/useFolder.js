import { doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useReducer } from "react";
import { database, firestore } from "../firebase";
import useAuth from "./useAuth";

const ACTIONS = {
  SET_FOLDER: 'set-folder',
  UPDATE_FOLDER: 'update-folder',
  SET_CHILD_FOLDERS: 'set-child-folders',
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

    case ACTIONS.SET_CHILD_FOLDERS:
      return {
        ...state,
        childFolders: payload.childFolders,
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
    const q = query(database.folders,
      where('parentId', '==', folderId),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc'));

    return onSnapshot(q, snapshot => {
      dispatch({
        type: ACTIONS.SET_CHILD_FOLDERS,
        payload: {
          childFolders: snapshot.docs.map(database.formatDoc)
        }
      });
    });
  }, [folderId, user]);

  return state;
}
