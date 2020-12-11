import { useEffect, useRef, useState } from 'react';

export enum Status {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

export type TPhoto = {
  id: string;
  likes: number;
  urls: {
    thumb: string;
  };
  user: {
    name: string;
  };
};

const useUnsplash = (searchTerm: string, page = 1) => {
  const [photos, setPhotos] = useState<TPhoto[]>([]);
  const [status, setStatus] = useState<Status>(Status.idle);
  const cache = useRef<{ [key: string]: TPhoto[] }>({});

  useEffect(() => {
    const getPhotos = async () => {
      if (cache.current[searchTerm + page]) return;
      try {
        console.log('fetching photos!');
        setStatus(Status.pending);
        const res = await fetch(
          `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        const { results } = await res.json();
        setPhotos(results);
        cache.current[searchTerm + page] = results;
        setStatus(Status.resolved);
      } catch (e) {
        console.warn(e);
        setStatus(Status.rejected);
      }
    };
    getPhotos();
  }, [searchTerm, page]);

  return { photos, status };
};

export default useUnsplash;
