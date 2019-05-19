import React, { useState } from 'react'

const Video = ({ title, id }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = e => {
    setIsPlaying(!isPlaying)
  }

  return (
    <li className="video-wrap" onClick={handleClick}>
      {/* <div className="video-wrap__details" hidden={isPlaying ? 'hidden' : ''}>
        <h3>{title}</h3>
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="Video thumbnail"
        />
      </div> */}
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${id}?color=white&modestbranding=1&showinfo=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </li>
  )
}

export default Video
