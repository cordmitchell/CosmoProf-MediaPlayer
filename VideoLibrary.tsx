import React from 'react';

import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const videoData = [
  { category: 'Hair Color',
    videos: [
        {title: 'Young Nails SlickPour + Conversion', vid: 'XqYVz8sVPOQ' },
        {title: 'Young Nails The Bright Bubble Dimensional Nail', vid:'vxBVlVjv8-o' },
        {title: 'Young Nails – The Never-Failing Acrylic Application Technique', vid:'rkaLQWZGDZ8'},
        {title: 'Gelish PolyGEL with Danny Haile', vid:'gPCylOUry2k'},
        {title: 'Art Designs', vid:'ULDDOaY2Vdw'},
    ]
  },

  { category: 'Hair Care',
    videos: [
      {title: 'Young Nails SlickPour + Conversion', vid: 'XqYVz8sVPOQ' },
      {title: 'Young Nails The Bright Bubble Dimensional Nail', vid:'vxBVlVjv8-o' },
      {title: 'Young Nails – The Never-Failing Acrylic Application Technique', vid:'rkaLQWZGDZ8'},
      {title: 'Gelish PolyGEL with Danny Haile', vid:'gPCylOUry2k'},
      {title: 'Art Designs', vid:'ULDDOaY2Vdw'},
    ]
  },

  { category: 'Barbering',
    videos: [
      {title: 'Young Nails SlickPour + Conversion', vid: 'XqYVz8sVPOQ' },
      {title: 'Young Nails The Bright Bubble Dimensional Nail', vid:'vxBVlVjv8-o' },
      {title: 'Young Nails – The Never-Failing Acrylic Application Technique', vid:'rkaLQWZGDZ8'},
      {title: 'Gelish PolyGEL with Danny Haile', vid:'gPCylOUry2k'},
      {title: 'Art Designs', vid:'ULDDOaY2Vdw'},
    ]
  },

  { category: 'Nails',
    videos: [
      {title: 'Young Nails SlickPour + Conversion', vid: 'XqYVz8sVPOQ' },
      {title: 'Young Nails The Bright Bubble Dimensional Nail', vid:'vxBVlVjv8-o' },
      {title: 'Young Nails – The Never-Failing Acrylic Application Technique', vid:'rkaLQWZGDZ8'},
      {title: 'Gelish PolyGEL with Danny Haile', vid:'gPCylOUry2k'},
      {title: 'Art Designs', vid:'ULDDOaY2Vdw'},
    ]
  },

  { category: 'Styling',
    videos: [
      {title: 'Young Nails SlickPour + Conversion', vid: 'XqYVz8sVPOQ' },
      {title: 'Young Nails The Bright Bubble Dimensional Nail', vid:'vxBVlVjv8-o' },
      {title: 'Young Nails – The Never-Failing Acrylic Application Technique', vid:'rkaLQWZGDZ8'},
      {title: 'Gelish PolyGEL with Danny Haile', vid:'gPCylOUry2k'},
      {title: 'Art Designs', vid:'ULDDOaY2Vdw'},
    ]
  }
]

//function useVideoSelected(key) {
//  const [name, setName] = React.useState('')
//  const handleChange = event => setName(event.target.value)
//  return [state, setState]
//}


class VideoLibrary extends React.Component {
  render() {

let currentVID = videoData[0].videos[0];

    const handleClick = item => {
      this.currentVID = item.vid;
      this.setState({currentVID});
    }

    const list = videoData.map((item) =>
      <div className={'video-library'} key={item.category}>
        <h5>{ item.category }</h5>
        <VideoList data={item.videos} callback={handleClick} />
      </div>
    );

    return (
      <div className="row">
        <div className="col-md-8 pr-md-0">
<VideoPlayer currentVID={this.currentVID}/>
          <div className="playing-title">
{videoData[0].videos[0].title}

<i class="fas fa-share-alt-square"></i>

            <svg class="bi bi-box-arrow-in-up" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4.646 7.854a.5.5 0 00.708 0L8 5.207l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M8 15a.5.5 0 00.5-.5v-9a.5.5 0 00-1 0v9a.5.5 0 00.5.5z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v8A1.5 1.5 0 0113 12h-1.5a.5.5 0 010-1H13a.5.5 0 00.5-.5v-8A.5.5 0 0013 2H3a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h1.5a.5.5 0 010 1H3a1.5 1.5 0 01-1.5-1.5v-8z" clip-rule="evenodd"/>
  </svg>
          </div>
        </div>

        <div className="col-md-4">
          <div className="library-container">
            <div className="library-collection">
              {list}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoLibrary;