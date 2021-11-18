import React from "react";

const YoutubeEmbed = ({ id, title }) => (
  <div className="shadow-xl min-w-max h-min overflow-hidden rounded-xl">
    <iframe
      className="w-60"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

export default YoutubeEmbed;
