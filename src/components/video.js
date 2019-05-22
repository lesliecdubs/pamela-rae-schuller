import React from 'react'

const Video = ({ title, id }) => {
  return (
    <li className="video-wrap grid__item">
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
