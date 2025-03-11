import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Récupérer les posts depuis FastAPI
    axios.get("http://localhost:8000/posts")
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des posts :", error);
      });
  }, []);

  return (
    <StyledWrapper>
        <div className="explore_container">
      {posts.map((post) => (
        <div key={post.id} className="post card">
          <div className="body">
            <div className="audio-player">
              <div className="album-cover">
                <img src="/me.jpg" alt="Profile" />
              </div>
              <div className="player-controls">
                <div className="song-info">
                  <div className="song-title">{post.userName}</div>
                  <p className="artist">Learning English</p>
                </div>
                <div className="lecteur_audio">
                  <audio controls src={post.audioURL} />
                </div>
              </div>
            </div>
            <p className="text">{post.text}</p>
            <div className="footer">
              <div>
                <div>👍 18</div>
                <div>💬 7</div>
                <div>🔗 2</div>
              </div>
            </div>
          </div>
        </div>
      ))}
        </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Styles identiques à Post.jsx */
  .explore_container{
    margin-top: 100px;
  }
  .card {
    margin: 20px auto;
    background-color: #4D61F4;
    padding: 1em;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width: 90%;
    max-width: 300px;
    transition: 200ms ease-in-out;
  }

  .username {
    color: #C6E1ED;
    font-size: 0.85em;
    font-weight: 600;
  }

  .body {
    display: flex;
    flex-direction: column;
  }

  .body .text {
    margin: 0 10px 0 0;
    white-space: pre-line;
    color: white;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  .footer {
    position: relative;
    width: 100%;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    margin-top: 10px;
  }

  .footer div {
    margin-right: 1rem;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .footer svg {
    margin-right: 5px;
    height: 100%;
    stroke: white;
  }

  .viewer span {
    height: 20px;
    width: 20px;
    background-color: rgb(28, 117, 219);
    margin-right: -6px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: grid;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 8px;
    color: #fff;
    padding: 2px;
  }

  .viewer span svg {
    stroke: #fff;
  }
    
  .audio-player {
    margin: 10px auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    max-width: 95%;
    height: 80px;
    background-color: #282828;
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
  }

  .album-cover {
    width: 64px;
    height: 64px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 12px;
  }

  .player-controls {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .song-info {
    margin-bottom: 4px;
  }

  .song-title {
    font-size: 16px;
    color: #fff;
    margin: 0;
  }

  .artist {
    font-size: 12px;
    color: #b3b3b3;
    margin: 0;
  }

  audio {
    width: 190px;
  }
`;

export default Explore;
