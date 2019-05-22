import React, { Fragment } from 'react'
import { Video } from './'
import cn from 'classnames'

const VideoSection = ({ featuredVideo = null, videos, title }) => (
  <Fragment>
    {title ? (
      <h2>{title}</h2>
    ) : (
      <h2 className="is-visually-hidden">Video Clips</h2>
    )}
    <ul className={cn('grid', { 'grid--featured-item': featuredVideo })}>
      {featuredVideo && (
        <Video title={featuredVideo.title} id={featuredVideo.id} />
      )}
      {videos.map((video, i) => (
        <Video key={i} {...video} />
      ))}
    </ul>
  </Fragment>
)

export default VideoSection
