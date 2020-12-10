import React from 'react';
import './InfiniteScroll.styles.scss';
import useUnsplash from './../../hooks/unsplash';
import { Status } from '../../hooks/unsplash';

const InfiniteScroll = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const { photos, status } = useUnsplash('cars');

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
      </section>
      <section className='image-gallery'></section>
    </main>
  );
};

export default InfiniteScroll;
