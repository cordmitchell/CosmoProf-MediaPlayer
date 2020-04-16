import React from 'react';

class VideoPlayer extends React.Component {
  render() {
    return (
      <div className="iframe-container">
        <iframe width="100%" src={'https://www.youtube.com/embed/' + this.props.currentVID + '?rel=0'} allowfullscreen></iframe>
      </div>
    );
  }
}
export default VideoPlayer;
