import axios from 'axios';

import {addFile, fileDelete, setFiles, updateFile} from '../reducers/fileReducer';
import {addUploadFile, changeUploadFile, showUploader} from '../reducers/uploadRecuder';
import {hideLoader, showLoader} from '../reducers/appReducer';


export function getFiles(dirId, sort) {
  return async dispatch => {
    try {
      dispatch(showLoader());
      let url = 'http://localhost:8000/api/files';
      if (dirId) {
        url = `http://localhost:8000/api/files?parent=${dirId}`;
      }
      if (sort) {
        url = `http://localhost:8000/api/files?sort=${sort}`;
      }
      if (dirId && sort) {
        url = `http://localhost:8000/api/files?parent=${dirId}&sort=${sort}`;
      }
      const response = await axios.get(url, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
      });
      dispatch(setFiles(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}

export function createDir(dirId, name) {
  return async dispatch => {
    try {
      const response = await axios
        .post('http://localhost:8000/api/files', {
          name,
          parent: dirId,
          type: 'dir',
        },{
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
      dispatch(addFile(response.data));
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}

export function updateDir(dirId, name, id) {
  return async dispatch => {
    try {
      const response = await axios
        .put('http://localhost:8000/api/files', {
          name,
          id: id,
        },{
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
      console.log(response.data);
      dispatch(updateFile(response.data));
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}

export function uploadFile(file, dirId) {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (dirId) {
        formData.append('parent', dirId);
      }

      const uploadFile = {name: file.name, progress: 0, id: Date.now()};
      dispatch(showUploader());
      dispatch(addUploadFile(uploadFile));

      const response = await axios.post('http://localhost:8000/api/files/upload', formData, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        onUploadProgress: function(progressEvent) {
          const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total)*100);
          uploadFile.progress = percentCompleted;
          dispatch(changeUploadFile(uploadFile));
        },
      });
      dispatch(addFile(response.data));
      return response;
    } catch (e) {
      console.log(e.response.data);
    }
  };
}

export async function downloadFile(file) {
  const response = await fetch(`http://localhost:8000/api/files/download?id=${file.id}`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (response.status === 200) {
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

export function deleteFile(id) {
  return async dispatch => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/files?id=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      dispatch(fileDelete(id));
      return response;
    } catch (e) {
      console.log(e.response.data);
    }
  };
}

export function searchFiles(search) {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:8000/api/files/search?search=${search}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      dispatch(setFiles(response.data));
    } catch (e) {
      alert(e?.response?.data?.message);
    } finally {
      dispatch(hideLoader());
    }
  };
}