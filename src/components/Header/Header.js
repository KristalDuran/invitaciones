
import React from 'react';
import { cancion, fotoNovios, nombre } from '../../img';
import "./style.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Header = () => {

    return (
      <div className='header' style={{ backgroundImage: `url(${fotoNovios})` }}>
        <img alt='logo' className='headerLogo' src={nombre}></img>
        
        <AudioPlayer
          src={cancion}
          autoPlay
          loop
          volume={0.1}
          showJumpControls={false}
          showSkipControls={false}
          showDownloadProgress={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          customProgressBarSection={[]}
        />
      </div>
    );
  };
  
  export default Header;