import {useState, useEffect} from 'react';

const useInitialState = (urlApi) => {
    const initialValue = {
        myList: [], trends: [], originals: []
    };
    const [videos, setVideos] = useState(initialValue);
    const getData = () => {
        const API = urlApi; 
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => {
                console.error('error: ', error);
                setVideos(initialValue);
            });
    };
    
    useEffect(() => {
        getData();
    }, []);
    return videos;
}

export default useInitialState;