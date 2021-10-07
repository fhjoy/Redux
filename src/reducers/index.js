import { selectSong } from "../actions";
import { combineReducers } from "redux";

const songReducers = () => {
  return [
    { title: "I love you", duration: "4:05" },
    { title: "I hate you", duration: "1:05" },
    { title: "O jane jana", duration: "05:00" },
    { title: " amar buker moddokhane", duration: "3.48" },
    { title: "payar ki toh daar na kiya", duration: "2.55" },
  ];
};

const selectedSongReducers = (selectedSong = null, action) => {
  return action.type === "SONG_SELECTED"
    ? (selectedSong = action.payload)
    : selectedSong;
};

export default combineReducers({
  songs: songReducers,
  selectedSong: selectedSongReducers,
});
