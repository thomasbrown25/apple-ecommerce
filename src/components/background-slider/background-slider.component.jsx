import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import generateStyleSheet from './generate-stylesheet';
import injectCss from './inject-css';

const NAME = 'ReactBackgroundSlider';

const BackgroundSlider = ({ images, duration, transition }) => {
    useEffect(() => {
        injectCss(
            generateStyleSheet({
                imagesCount: images.length,
                duration,
                transition
            }),
            NAME
        );
    });

    return (
        <div id={NAME}>
            {images.map((img, key) => (
                <figure
                    key={key}
                    style={{
                        backgroundImage: `url(${img})`,
                        animationDelay: `${(duration + transition) * key}s`
                    }}
                />
            ))}
        </div>
    );
};

BackgroundSlider.defaultProps = {
    duration: 10,
    transition: 2
};

BackgroundSlider.propTypes = {
    images: PropTypes.array.isRequired,
    duration: PropTypes.number,
    transition: PropTypes.number
};

export default BackgroundSlider;
