import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bg1 from './assets/Bg1.png';
import logo2 from './assets/logo2.png';

function App() {
  const [timerDays,setTimerDays] = useState('00');
  const [timerHours,setTimerHours] = useState('00');
  const [timerMinutes,setTimerMinutes] = useState('00');
  const [timerSeconds,setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('November 24, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate-now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance<0)
      {
        //stop timer
        clearInterval(interval.current);
      }
      else
      {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return() => {
      clearInterval(interval.current);
    };
  });

  return (
    <div id="home" className='md:w-full max-h-screen '>
      <div className='flex items-center justify-center md:mt-9'>
        <img src={logo2} alt='/' className='md:w-1/4  p-8 '/>
      </div>
      {/* <div className='text-4xl ml-[315px]'>
        <h1 className='font-bold'>AWESOMENESS IN</h1>
      </div>  */}
      
      <div id='clock' className='flex flex-wrap items-center justify-center gap-8 flex-col md:flex-row md:mt-14'>
        <div class="hi" className=' font-bold  flex flex-col mt-1 md:mt-0'>
        <p className='text-7xl md:text-9xl '>{("0"+timerDays).slice(-2)}</p>
          <p className='text-white  text-xl pl-1'>DAYS</p>
        </div>
        <p class="line" className='text-9xl text-white hidden md:block'>/</p>
        <div className='font-bold  flex flex-col '>
          <p className='text-7xl md:text-9xl'>{("0"+timerHours).slice(-2)}</p>
          <p className='text-white  text-xl  pl-1'>HOURS</p>
        </div>
        <p class="line" className='text-9xl text-white hidden md:block'>/</p>

        <div className=' font-bold  flex flex-col'>
          <p className='text-7xl md:text-9xl'>{("0"+timerMinutes).slice(-2)}</p>
          <p className='text-white text-xl  pl-1'>MINUTES</p>
        </div>
        <p class="line" className='text-9xl text-white hidden md:block'>/</p>

        <div className=' font-bold   flex flex-col'>
          <p className='text-7xl md:text-9xl'>{("0"+timerSeconds).slice(-2)}</p>
          <p className='text-white text-xl  pl-1'>SECONDS</p>
        </div>
      </div>
      <div className='text-white flex items-end justify-center text-center font-bold md:mt-[180px] mt-14'>
        <h2 className='text-1xl'>The anticipation is electric, the countdown is on<br></br><h2>Stay charged !</h2></h2>
      </div>
      {/* <div className='flex items-center justify-center mt-[80px]'>
        <h1 className='text-white text-2xl'>ABOUT</h1>
      </div>
        <div className='flex items-center justify-center mt-6'>
        <h3 className='text-white w-2/5 text-center text-lg'>Dhishna has its origin from Xplendor, the annual tech-fest of SOE, CUSAT held in 2010. From technical workshops to techniques, from hackathons to musical nights, Xplendor touched all spheres of a student's life.</h3>
        </div> */}
    </div>
  );
}

export default App;
