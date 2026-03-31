import React, { useEffect } from "react";
import "./InstagramFeed.css";

function InstagramFeed({ username }) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process the embed after script loads
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [username]);

  return (
    <div className="instagram-feed-container">
      <div className="feed-wrapper">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/${username}/?utm_source=ig_web_button_share_sheet`}
          data-instgrm-version="14"
        >
          <a href={`https://www.instagram.com/${username}/?utm_source=ig_web_button_share_sheet`}>
            {username}
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default InstagramFeed;
