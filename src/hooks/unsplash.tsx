import React, { useEffect, useState } from 'react';

enum Status {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

const useUnsplash = (searchTerm: string) => {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState<Status>(Status.idle);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setStatus(Status.pending);
        const res = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        const data = await res.json();
        setPhotos(data);
        setStatus(Status.resolved);
      } catch (e) {
        console.warn(e);
        setStatus(Status.rejected);
      }
    };
  });

  return { photos, status };
};

export default useUnsplash;
