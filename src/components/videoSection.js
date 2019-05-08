import React from 'react'

const VideoSection = ({ videos }) => (
  <section>
    <h2>Videos</h2>
    <ul>
      {videos.map((video, i) => (
        <li key={i}>
          <h3>{video.title}</h3>
          <iframe
            title={video.title}
            src={`https://www.youtube.com/embed/${
              video.id
            }?color=white&modestbranding=1&showinfo=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </li>
      ))}
    </ul>
  </section>
)

export default VideoSection
