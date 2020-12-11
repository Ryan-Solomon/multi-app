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
  const bottomElementRef = React.useRef<HTMLDivElement | null>(null);
  console.log(page);

  const loadMore = React.useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersection) {
      setPage((p) => p + 1);
    }
  }, []);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(loadMore, options);

    if (bottomElementRef && bottomElementRef.current) {
      observer.observe(bottomElementRef.current);
    }

    const refValue = bottomElementRef.current;

    return () => observer.unobserve(refValue!);
  }, [bottomElementRef, loadMore]);

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
      <div ref={bottomElementRef}>load more</div>
    </main>
  );
};

export default InfiniteScroll;
