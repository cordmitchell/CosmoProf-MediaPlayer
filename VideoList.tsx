import React from 'react';

class VideoList extends React.Component {
  render() {
    const handleClick = (item) => {
      this.props.callback(item)
    }
    
    const content = this.props.data.map((item) =>
      <div className="video-thumb" key={item.vid} onClick={() => handleClick(item)}>
        <img src={'https://i.ytimg.com/vi/' + item.vid + '/default.jpg'}/>
        <div className="video-title">{ item.title }</div>
      </div>
    );
    
    return (
      <div className={'video-list'}>
        {content}
      </div>
    );
  }
}
export default VideoList;