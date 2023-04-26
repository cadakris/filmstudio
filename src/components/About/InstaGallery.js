import React from 'react'

function InstaGallery() {
    return (
      <div className="instagram-container">
        {/* LightWidget WIDGET */}
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="//lightwidget.com/widgets/dc88839a20fe57ecb7293ba981487fb2.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
        ></iframe>
      </div>
    );
  }

export default InstaGallery