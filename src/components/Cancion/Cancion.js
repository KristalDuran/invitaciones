
import React from 'react';
import { cancion } from '../../assets';
import "./style.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Cancion = () => {
    return (
      <div className='cancion'>
        <div className='cancionBorder'>
            <AudioPlayer
                className='audio'
                src={cancion}
                autoPlay={true}
                loop
                volume={0.1}
                showJumpControls={false}
                showSkipControls={false}
                showDownloadProgress={false}
                customAdditionalControls={[]}
            />
            <p className='cancionTexto'>Dale play a nuestra canción</p>
        </div>
      </div>
    );
  };
  
  export default Cancion;