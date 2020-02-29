// Action creator
export const selectSong = (song) => {
 
    // Return an action
    return {
      type: 'SONG_SELECTED',
      payload: song
    };
  };

export const crossSelectSong = song => {
  return {
    type : 'CROSS_SELECT_SONG',
    payload: song
  }
}
  