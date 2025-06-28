const SoundManager = (() => {
    if (typeof window === 'undefined') {
      // On server: return dummy
      return {
        playSound: () => {},
      };
    }
  
    let userInteracted = false;
  
    const unlockAudio = () => {
      if (!userInteracted) {
        userInteracted = true;
        window.removeEventListener('click', unlockAudio);
      }
    };
  
    window.addEventListener('click', unlockAudio);
  
    const playSound = (src, volume = 1.0) => {
      if (!userInteracted) {
        console.warn('User has not interacted yet. Cannot play sound.');
        return;
      }
  
      const audio = new Audio(src);
      audio.volume = volume;
      audio.play().catch(err => console.error('Play error:', err));
    };
  
    return {
      playSound
    };
  })();
  
  export default SoundManager;
  