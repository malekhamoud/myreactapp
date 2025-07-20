import React, { useState } from "react";
import "./youtubeSearchBar.css";

const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&\S*)?$/;

function extractVideoId(url) {
  // Handles both youtu.be and youtube.com/watch?v= URLs
  const match = url.match(/(?:v=|[\/?]v=|youtu\.be\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : null;
}

function YouTubeSearchBar({ onGenerate }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = "AIzaSyCatwwQfS7buV0PMagry28aNx_F96SkoHc";

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!value || YOUTUBE_URL_REGEX.test(value)) {
      setError("");
    } else {
      setError("Please enter a valid YouTube URL.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setVideoData(null);
    setError("");
    if (!YOUTUBE_URL_REGEX.test(input)) {
      setError("Please enter a valid YouTube URL.");
      return;
    }
    const videoId = extractVideoId(input);
    if (!videoId) {
      setError("Could not extract video ID from URL.");
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      );
      const data = await resp.json();
      if (data.items && data.items.length > 0) {
        const snippet = data.items[0].snippet;
        const videoInfo = {
          title: snippet.title,
          thumbnail:
            snippet.thumbnails.maxres?.url ||
            snippet.thumbnails.high?.url ||
            snippet.thumbnails.default?.url,
          videoId: videoId,
          url: input
        };
        setVideoData(videoInfo);
        
        // Call the onGenerate prop with the video information
        if (onGenerate) {
          onGenerate(videoInfo);
        }
      } else {
        setError("Video not found.");
      }
    } catch (err) {
      setError("Failed to fetch video data.");
    }
    setLoading(false);
  };

  return (
    <form className="yt-search-bar" onSubmit={handleSubmit}>
      <label className="yt-title">AI YouTube Timestamps</label>
      <span className="yt-desc">
        Generates timestamps for a given YouTube video using the bump-1.0 model. This software was built using the AI— watch tutorials how to <a href="#" target="_blank" rel="noopener noreferrer">here</a>.
      </span>
      <div className="yt-input-row">
        <span className="yt-link-icon">🔗</span>
        <input
          type="text"
          className="yt-input"
          placeholder="https://youtu.be/xxxxxxxxxxx"
          value={input}
          onChange={handleChange}
        />
        <button
          className="yt-generate-btn"
          type="submit"
          disabled={!input || !!error || loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
      {error && <div className="yt-error">{error}</div>}
      {videoData && (
        <div className="yt-success">
          <h4>Video Found:</h4>
          <p>{videoData.title}</p>
          {videoData.thumbnail && (
            <img 
              src={videoData.thumbnail} 
              alt={videoData.title}
              style={{ maxWidth: '200px', height: 'auto', marginTop: '10px' }}
            />
          )}
        </div>
      )}
    </form>
  );
}

export default YouTubeSearchBar; 