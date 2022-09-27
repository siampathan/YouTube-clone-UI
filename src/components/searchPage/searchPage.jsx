import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "../channelRow/channelRow";
import VideoRow from "../videoRow/videoRow";
import "./searchPage-style.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s176-c-k-c0x00ffffff-no-rj-mo"
        Channel="Lama Dev"
        verified
        subs="780K"
        noOfVideos={472}
        description="You can find out in this channel any code related problem solve."
      />

      <VideoRow
        views="2.1M"
        subs="478K"
        description="This is about Youtube Clone"
        timestamp="36:14"
        Channel="Lama Dev"
        title="YouTube Clone using React and Firebase"
        image="https://i.ytimg.com/vi/jsZoR1kkq6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLB7UWLw6X72QOJqd53EnIZE8jAyqQ"
      />

      <VideoRow
        views="2.1M"
        subs="478K"
        description="This is about Youtube Clone"
        timestamp="36:14"
        Channel="Lama Dev"
        title="YouTube Clone using React and Firebase"
        image="https://i.ytimg.com/vi/jsZoR1kkq6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLB7UWLw6X72QOJqd53EnIZE8jAyqQ"
      />

      <VideoRow
        views="2.1M"
        subs="478K"
        description="This is about Youtube Clone"
        timestamp="36:14"
        Channel="Lama Dev"
        title="YouTube Clone using React and Firebase"
        image="https://i.ytimg.com/vi/jsZoR1kkq6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLB7UWLw6X72QOJqd53EnIZE8jAyqQ"
      />

      <VideoRow
        views="2.1M"
        subs="478K"
        description="This is about Youtube Clone"
        timestamp="36:14"
        Channel="Lama Dev"
        title="YouTube Clone using React and Firebase"
        image="https://i.ytimg.com/vi/jsZoR1kkq6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLB7UWLw6X72QOJqd53EnIZE8jAyqQ"
      />

      <VideoRow
        views="2.1M"
        subs="478K"
        description="This is about Youtube Clone"
        timestamp="36:14"
        Channel="Lama Dev"
        title="YouTube Clone using React and Firebase"
        image="https://i.ytimg.com/vi/jsZoR1kkq6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLB7UWLw6X72QOJqd53EnIZE8jAyqQ"
      />
    </div>
  );
};

export default SearchPage;
