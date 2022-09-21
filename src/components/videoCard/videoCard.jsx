import { Avatar } from "@mui/material";
import "./videoCard-style.css";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  channelImage,
  timestamp,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <h4> {title} </h4>
          <p> {channel} </p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
