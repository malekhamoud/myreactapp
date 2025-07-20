import React, { useState } from "react";
import "./youtubeSearchBar.css";

const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&\S*)?$/;

function YouTubeSearchBar({ onGenerate }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!value || YOUTUBE_URL_REGEX.test(value)) {
      setError("");
    } else {
      setError("Please enter a valid YouTube URL.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (YOUTUBE_URL_REGEX.test(input)) {
      setError("");
      onGenerate && onGenerate(input);
    } else {
      setError("Please enter a valid YouTube URL.");
    }
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
          disabled={!input || !!error}
        >
          Generate
        </button>
      </div>
      {error && <div className="yt-error">{error}</div>}
    </form>
  );
}

export default YouTubeSearchBar; 