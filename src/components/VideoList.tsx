export interface EpisodeListProps {
  episodes: {
    title?: string
    image_url?: string
    video_url?: string
  }
}
const VideoList: React.FC<EpisodeListProps> = (props) => {
  return (
    <>
      <iframe
        key={`${props.episodes.title}+video`}
        src={props.episodes.video_url}
        width={500}
        height={400}
      ></iframe>
      <h4 key={`${props.episodes.title}+title`}>{props.episodes.title}</h4>
    </>
  )
}

export default VideoList
