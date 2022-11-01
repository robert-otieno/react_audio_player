import React, { useState, useRef } from 'react'
import styles from '../styles/AudioPlayer.module.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { FaPlay, FaPause } from 'react-icons/fa'

const AudioPlayer = () => {
  // state variables
  const [isPlaying, setIsPlaying] = useState(false)

  // references
  const audioPlayerRef = useRef();
  
  const togglePlayPause = () => {
    const prevValue = isPlaying;


    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause()
    }
  }

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayerRef} src="" preload='metadata'></audio>

      <button className={styles.forwardBackward}><BsArrowLeftShort /> 30</button>

      <button className={styles.playPause} onClick={togglePlayPause}>
        { isPlaying ? <FaPause /> : <FaPlay className={styles.play} /> }
      </button>

      <button className={styles.forwardBackward}>30 <BsArrowRightShort /></button>

      {/* current time */}
      <div className={styles.currentTime}>0:00</div>

      {/* progress bar */}
      <div><input type="range" className={styles.progressBar} /></div>

      {/* duration */}
      <div className={styles.duration}>2:49</div>
    </div>
  )
}

export { AudioPlayer }