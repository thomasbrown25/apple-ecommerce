import { useEffect, useState } from 'react';

const Cube = () => {
    const [y, setY] = useState(20);
    const [x, setX] = useState(0);
    const [z, setZ] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [rotating, setRotating] = useState(true);

    // controls
    const handleTopXControlClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        setX(x + 20);
    };

    const handleBottomXControlClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        setX(x - 20);
    };

    const handleLeftYControlClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        setY(y - 20);
    };

    const handleRightYControlClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        setY(y + 20);
    };

    const handleTopZControlClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        setZ(z - 20);
    };

    const handleBottomZControlClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        setZ(z + 20);
    };

    const handleMouseOver = () => {
        setRotating(false);
    };

    const handleMouseOut = () => {
        setRotating(true);
    };

    // rotate iPhone cube object
    useEffect(() => {
        let interval_id = 0;

        if (rotating) {
            let counter = y;

            interval_id = setInterval(() => {
                setY(counter++);
            }, 100);
            setIntervalId(interval_id);
        } else {
            clearInterval(interval_id);
        }
        return () => clearInterval(interval_id);
    }, [rotating, y]);

    return (
        <div className="cube-wrapper">
            <div
                className="cube"
                style={{
                    transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
                }}
            >
                <div className="front-side">
                    <img
                        src={require('../../images/iphone.png')}
                        alt="iphone"
                    />
                </div>
                <div className="back-side center">
                    <i className="fab fa-apple"></i>
                </div>
            </div>

            {/* controls */}
            <div
                className="controls"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <button
                    className="top-x-control"
                    onClick={handleTopXControlClick}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
                <button
                    className="bottom-x-control"
                    onClick={handleBottomXControlClick}
                >
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button
                    className="left-y-control"
                    onClick={handleLeftYControlClick}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button
                    className="right-y-control"
                    onClick={handleRightYControlClick}
                >
                    <i className="fas fa-arrow-right"></i>
                </button>
                <button
                    className="top-z-control"
                    onClick={handleTopZControlClick}
                >
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button
                    className="bottom-z-control"
                    onClick={handleBottomZControlClick}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
            {/* end of controls */}
        </div>
    );
};

export default Cube;
