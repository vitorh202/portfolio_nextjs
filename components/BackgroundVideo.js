import './styles/BackgroundVideo.css';

const BackgroundVideo = () => {
    return (
        <div>
            <div className="background-container">
                <video autoPlay loop muted playsInline>
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default BackgroundVideo;