import React from 'react';
import './InfiniteScroll.styles.scss';
import useUnsplash from './../../hooks/unsplash';

const InfiniteScroll = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const { photos, status } = useUnsplash('cars');
  if (status === 'resolved') {
    console.log(photos);
  }
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
