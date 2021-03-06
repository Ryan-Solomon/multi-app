import React from 'react';
import './InfiniteScroll.styles.scss';
import useUnsplash from './../../hooks/unsplash';
import { Status } from '../../hooks/unsplash';
import PhotoBox from './PhotoBox';

const InfiniteScroll = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('cars');
  const { photos, status } = useUnsplash(searchTerm, page);

  if (status === Status.rejected) return <h1>Something went wrong</h1>;
  if (status === Status.pending) return <h1>loading</h1>;

  return (
    <main className='scroll-container'>
      <section className='search-bar'>
        <label htmlFor='search'>Search Below</label>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          autoFocus
        />
        <button onClick={() => setSearchTerm(searchInput)}>Search</button>
      </section>
      <section className='image-gallery'>
        {photos &&
          photos.map((photo) => {
            return <PhotoBox key={photo.id} photo={photo} />;
          })}
      </section>
    </main>
  );
};

export default InfiniteScroll;
