function ArtistCard({artistName, artistImage}) {
  return (
    <div className="artist-card">
        <div className="outer-image">
        <img className="artist-img" src={artistImage} alt={`Photo of ${artistName}`} />
      </div>
      <h4 className="artist-text">{artistName}</h4>
    </div>
  )
}

export default ArtistCard