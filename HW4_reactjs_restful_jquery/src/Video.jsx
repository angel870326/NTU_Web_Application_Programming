import './style.css';
import React from 'react';
import video1 from './img/video-1.jpg'
import video2 from './img/video-2.jpg'
import video3 from './img/video-3.jpg'
import SubscribeButton from './components/SubscribeButton';


function Video() {

  return (
    <main id="main">
      <div id="video" class="text-left paddsection">

        {/* Header */}
        <div class="container">
          <div class="section-title text-center">
            <h2>Video</h2>
          </div>
        </div>

        {/* Videos */}
        <div class="container">
          <div class="video-block">
            <div class="row">
              {/* Video 1 */}
              <div class="col-lg-4 col-md-6">
                <div class="video-info">
                  <a href="https://youtube.com/playlist?list=PLLhqjDgyDsY2UGp4dMHTZXU-USdosAfo-" target="_blank"><img src={video1} class="img-responsive" alt="My VLOG (https://youtube.com/playlist?list=PLLhqjDgyDsY2UGp4dMHTZXU-USdosAfo-)"/></a>
                  <div class="video-txt">
                    <h4><a href="https://youtube.com/playlist?list=PLLhqjDgyDsY2UGp4dMHTZXU-USdosAfo-" target="_blank">My VLOG</a></h4>
                  </div>
                </div>
              </div>
              {/* Video 2 */}
              <div class="col-lg-4 col-md-6">
                <div class="video-info">
                  <a href="https://youtube.com/playlist?list=PLLhqjDgyDsY31hcip7l0WRAmlfyjVeCPw" target="_blank"><img src={video2} class="img-responsive" alt="Yun Art Gallery (https://youtube.com/playlist?list=PLLhqjDgyDsY31hcip7l0WRAmlfyjVeCPw)"/></a>
                  <div class="video-txt">
                    <h4><a href="https://youtube.com/playlist?list=PLLhqjDgyDsY31hcip7l0WRAmlfyjVeCPw" target="_blank">Yun Art Gallery</a></h4>
                  </div>
                </div>
              </div>
              {/* Video 3 */}
              <div class="col-lg-4 col-md-6">
                <div class="video-info">
                  <a href="https://youtube.com/playlist?list=PLLhqjDgyDsY1-g0SdpzptiIEqlr5IOEdW" target="_blank"><img src={video3} class="img-responsive" alt="研究所 VLOG (https://youtube.com/playlist?list=PLLhqjDgyDsY1-g0SdpzptiIEqlr5IOEdW)"/></a>
                  <div class="video-txt">
                    <h4><a href="https://youtube.com/playlist?list=PLLhqjDgyDsY1-g0SdpzptiIEqlr5IOEdW" target="_blank">研究所 VLOG</a></h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscribe Button */}
            {/* <div class="padDiv btn-subscribe">
              <a href="https://www.youtube.com/@angelssuyunwang" target="_blank" class="button">Subscribe <i class="bi bi-play-circle-fill"></i></a>
            </div> */}
            <SubscribeButton />
          </div>
        </div>

      </div>
    </main>

  );
}

export default Video;
