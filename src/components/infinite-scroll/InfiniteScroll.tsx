import React from 'react';
import './InfiniteScroll.styles.scss';

const InfiniteScroll = () => {
  const [searchInput, setSearchInput] = React.useState('');
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
