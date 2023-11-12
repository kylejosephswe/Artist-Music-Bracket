import { useState, useEffect } from "react";

function SongBracket({ artistName, artistSongData }) {
  const songsArray = Object.values(artistSongData);
  const [largestCount, setLargestCount] = useState(1);
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(1);

  const revealTopSong = () => {
    let largerCount = Math.max(topCount, bottomCount);
    setLargestCount(largerCount);

    if (largestCount < 2) {
      setBottomCount((prevCount) => prevCount + 2);
      return;
    }
    setBottomCount((prevCount) => prevCount + 1);
  };

  const revealBottomSong = () => {
    let largerCount = Math.max(topCount, bottomCount);
    setLargestCount(largerCount);

    if (largestCount < 2) {
      setTopCount((prevCount) => prevCount + 2);
      return;
    }

    setTopCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="outer-flex">
        <div className="inner-flex">
          <div className="top-song">
            {!songsArray[topCount]?.src ? (
              <h1>Your favorite {artistName} song!</h1>
            ) : (
              <iframe
                style={{ borderRadius: "12px" }}
                src={songsArray[topCount].src}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            )}
          </div>
          {!songsArray[topCount]?.src ? null : (
            <button
              className="top-button"
              type="button"
              onClick={revealTopSong}
            >
              ❤
            </button>
          )}
        </div>
        <div className="inner-flex">
          <div className="bottom-song">
            {!songsArray[bottomCount]?.src ? (
              <h1>Your favorite {artistName} song!</h1>
            ) : (
              <iframe
                style={{ borderRadius: "12px" }}
                src={songsArray[bottomCount].src}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            )}
          </div>
          {!songsArray[bottomCount]?.src ? null : (
            <button
              className="bottom-button"
              type="button"
              onClick={revealBottomSong}
            >
              ❤
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default SongBracket;
