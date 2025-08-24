import '../styles/style.css';

const EmojiDisplay = ({ emoji }) => {
    return (
        <div className="emoji-display">
            <div className="main-content">
                <h3>Match this expression!</h3>
                <span role="img" aria-label="emoji" className="emoji">
                    {emoji}
                </span>
                
                <p>Get ready to show your best {emoji} face!</p>
            </div>
        </div>
    );
}
export default EmojiDisplay;