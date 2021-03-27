import React from 'react';
import styles from './ImageList.module.css';

import ImageCard from './ImageCard.component';

const ImageList = (props) => {
    console.log(props.images);
    return (
        <div className={styles.ImageList}>
            {props.images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
};

export default ImageList;
