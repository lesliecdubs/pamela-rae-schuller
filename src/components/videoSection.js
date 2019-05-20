import React from 'react'
import { Video } from './'

const VideoSection = ({ videos, title }) => (
  <section>
    {title 
      ? <h2>{title}</h2>
      : <h2 className="is-visually-hidden">Video Clips</h2>
    }
    <ul className="grid">
      {videos.map((video, i) => (
        <Video key={i} {...video} />
      ))}
    </ul>
  </section>
)

export default VideoSection
