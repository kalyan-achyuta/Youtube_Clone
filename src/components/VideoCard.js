import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-64 h-80 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail"/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard