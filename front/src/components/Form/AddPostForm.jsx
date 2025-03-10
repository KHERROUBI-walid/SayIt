import React, { useState } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client';
import AudioRecorder from './AudioRecorder';

const socket = io("http://localhost:3001"); // Remplace par l'URL de ton backend en prod

const AddPostForm = () => {
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');
  const [audioURL, setAudioURL] = useState('');

  const handleAudioRecorded = (url) => {
    setAudioURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      userName,
      text,
      audioURL
    };

    console.log("Données envoyées :", postData);
    socket.emit("newPost", postData); // Envoie le post au serveur WebSocket

    // Réinitialiser les champs après l'envoi
    setUserName('');
    setText('');
    setAudioURL('');
  };

  return (
    <StyledWrapper>
      <form className="post-card" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Votre nom"
          required
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Écrivez votre post"
          required
        />
  
        <hr />
        <div className="button-row">
          <AudioRecorder onAudioRecorded={handleAudioRecorded} />
        </div>

        <button className="post" type="submit">Post</button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .post-card {
    margin: 100px auto;
    width: 260px;
    height: 340px;
    background: white;
    box-shadow: 10px 10px 20px #afafaf, -10px -10px 20px #ffffff;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .post-card textarea {
    resize: none;
    width: 100%;
    height: 40%;
    padding: 5px;
    font-family: Sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    color: grey;
  }

  hr {
    border: 1px solid #464646;
    width: 100%;
    border-radius: 10em;
  }

  audio {
    max-width: 95%;
  }

  .audio-preview {
    margin-top: 10px;
    text-align: center;
  }

  .post {
    width: 100%;
    padding: 10px;
    margin-top: 7px;
    border: none;
    border-radius: 11px;
    font-size: 18px;
    font-family: Sans-serif;
    color: #fff;
    background-size: 200% 100%;
    background-image: linear-gradient(145deg, #ff00e1, #0000ff, #00d9ff);
    transition: 0.3s ease-out;
  }

  .post:hover {
    background-position: 99%;
  }
`;

export default AddPostForm;
