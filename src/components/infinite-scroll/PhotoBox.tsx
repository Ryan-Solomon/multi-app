import React, { FC } from 'react';
import { TPhoto } from '../../hooks/unsplash';
import './PhotoBox.styles.scss';

type TProps = {
  photo: TPhoto;
};

const PhotoBox: FC<TProps> = ({ photo }) => {
  return (
    <section className='single-photo'>
      <div className='image'>
        <img src={photo.urls.thumb} alt={photo.id} />
      </div>
      <div className='photo-details'>
        <h3>{photo.likes} Likes</h3>
        <h3>Photo credit: {photo.user.name}</h3>
      </div>
    </section>
  );
};

export default PhotoBox;
