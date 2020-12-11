import React, { FC } from 'react';
import { TPhoto } from '../../hooks/unsplash';
import './PhotoBox.styles.scss';

type TProps = {
  photo: TPhoto;
};

const PhotoBox: FC<TProps> = ({ photo }) => {
  const [show, setShow] = React.useState(false);
  return (
    <section
      onMouseEnter={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      className='single-photo'
    >
      <div className='image'>
        <img src={photo.urls.thumb} alt={photo.id} />
        <div className={`photo-details ${show ? 'show' : 'hide'} `}>
          <h3>{photo.likes} Likes</h3>
          <h3>Photo credit: {photo.user.name}</h3>
        </div>
      </div>
    </section>
  );
};

export default PhotoBox;
