import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); // tie the input value to this state
  const [suggestions, setSuggestions] = useState([]); // tie the search suggestions to this state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch(); // used to dispatch an action
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    // Make an API call after every Key Press
    // Difference between 2 API calls is <200ms, then decline the API call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]); 
      }
      else{
        getSearchSuggestions()
      }
      }, 200); // this will run after 200ms of the last key press
    return () => clearTimeout(timer); // this will clear the timer when the component unmounts or when the searchQuery changes before the 200ms
  }, [searchQuery]); // this will run when the searchQuery changes

  /**
   *
   * debouncing
   *
   * key -i
   * -render the component
   * -useEffect()
   * -start timer => after 200ms call the API
   *
   * key -ip
   * -destroy the component(useEffect return method)
   * -re-render the component
   * -useEffect()
   * -start timer => after 200ms call the API
   *
   *
   * setTimeout(200) - make an API call
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery); // searchQuery is the input value what we type
    const json = await data.json();
    setSuggestions(json[1]); // set the suggestions to the state

    dispatch(cacheResults({
      [searchQuery]: json[1], // UPDATE cache the results in the redux store
    })); // dispatch the action to cache the results
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); // an action will dispatch when this fucntion is called
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 text-center shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()} // an action will dispatch when this is clicked
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=512"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="Youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="px-5 w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchQuery} // bind the input value to the state
          onChange={(e) => setSearchQuery(e.target.value)} // update the state on input change
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-1 rounded-r-full px-5  bg-gray">
          🔍
        </button>
      </div>
      {showSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-[28rem] shadow-lg mt-9 ml-96 text-left rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                🔍{s}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="col-span-1">
        <img
          className="h-8"
          alt="User"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
