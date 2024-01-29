/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = (timer % 1000).toString().padStart(3, "0");

    return { minutes, seconds, milliseconds };
  };

  const { minutes, seconds, milliseconds } = formatTime(timer);
  return (
    <>
      <div className="container max-w-screen-md mx-auto shadow-md bg-jingga outline-offset-5 outline-drak outline mt-52 lg:max-screen-sm">
        <div
          className="flex justify-center pt-10 pb-4 mb-4 text-4xl text-gray-800 md:place-content-center md:text-6xl lg:text-8xl "
          style={{ fontSize: "80px" }}
        >
          <div className="timer-box">
            <h1>{minutes}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1>{seconds}</h1>
          </div>
          <span className="colon">:</span>
          <div className="timer-box">
            <h1>{milliseconds}</h1>
          </div>
       
        </div>
        <hr className="border-2 border-drak"/>
          <div className="flex justify-center gap-3 pt-4 pb-10 mt-4 text-4xl text-gray-800 md:place-content-center md:text-6xl lg:text-8xl"
          style={{ fontSize: "30px" }}>
        <button className="btn btn-outline text-drak hover:bg-drak hover:text-white" onClick={handleStart}
        >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={15} width={15}><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg> 
            Start</button>
        <button className="btn btn-outline text-drak hover:bg-drak hover:text-white"onClick={handlePause}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={15} width={15}><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
            Pause</button>
        <button className="btn btn-outline text-drak hover:bg-drak hover:text-white"onClick={handleReset}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={15} width={15}><path fill="currentColor" d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"/></svg>
            Reset</button>
      </div>
      </div>
    </>
  );
};

export default Stopwatch;
