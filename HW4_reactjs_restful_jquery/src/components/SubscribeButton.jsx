import React, { useEffect } from 'react';
import $ from 'jquery';

const SubscribeButton = () => {
  useEffect(() => {
    $('#externalButton').on('click', () => {
      window.location.href = 'https://www.youtube.com/@angelssuyunwang';
    });
  }, []);

  return (
    <div class="padDiv btn-subscribe">
      <a id="externalButton" class="button">Subscribe <i class="bi bi-play-circle-fill"></i></a>
    </div>
  );
};

export default SubscribeButton;
