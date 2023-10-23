import React, {useRef, useState, useEffect, useCallback} from 'react';
import './App.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import 'react-circular-progressbar/dist/styles.css';
import Bg1 from './assets/Bg1.webp';
import logo2 from './assets/logo2.webp';

function App() {
  const [nav, setNav] = useState(false);

  const handleNav = useCallback(() => {
    setNav((prevState) => !prevState);
  }, []);

  const closeNav = useCallback(() => {
    setNav(false);
  }, []);

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
    <div id="home" className='md:w-full h-auto min-h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Bg1})` }}>
      {/* <div className='text-white flex'>
        <ul className='flex w-[100%] justify-end items-end fixed right-3 my-3'>
          <li>Workshops</li>
          <li className='px-5'>Campus Ambassador</li>
        </ul>
      </div> */}
      <div onClick={handleNav} className='flex items-end justify-end pt-3 pr-3 hover:cursor-pointer'>
        {!nav ? <AiOutlineMenu size={25} color='white'/> : <AiOutlineClose size={25} color='white'/>}
      </div>
      <div
        className={!nav ? 'fixed right-0 top-0 w-56 bg-[#525050] transform translate-x-full' : 'fixed right-0 top-12 w-[300px] bg-[#0000] transition ease-in-out delay-200 duration-300'}
        onClick={closeNav}
      >
        <ul className='uppercase text-white hover:cursor-pointer'>
          <li className='px-12 py-2.5 transition ease-in-out delay-150 bg-gray-50 bg-opacity-30 md:bg-opacity-10 hover:-translate-y+1 hover:scale-105 duration-200 rounded'><a href='https://workshops.dhishna.org/'>Workshops</a></li>
          <li className='px-12 py-2.5 transition ease-in-out delay-150 bg-gray-50 bg-opacity-30 md:bg-opacity-10 hover:-translate-y+1 hover:scale-105 duration-200 rounded'><a href='https://ca.dhishna.org/'>Campus Ambassador</a></li>
        </ul>
      </div>
      <div className='flex items-center justify-center my-4'>
        <img src={logo2} alt='/' className='md:w-[30%]  p-8 '/>
      </div>
      <div>
      </div>
      <div id='clock' className='flex flex-wrap items-center justify-center gap-8 flex-col md:flex-row md:mt-14 -mt-10'>
        <div class="hi" className=' font-bold  flex flex-col mt-1 md:mt-0'>
        <p className='text-7xl md:text-9xl '>{("0"+timerDays).slice(-2)}</p>
          <p className='text-white  text-xl pl-1'>DAYS</p>
        </div>
        <p class="line" className='text-9xl text-white hidden md:block'>/</p>
        <div className='font-bold  flex flex-col '>
          <p className='text-7xl md:text-9xl -mt-6 md:mt-0'>{("0"+timerHours).slice(-2)}</p>
          <p className='text-white  text-xl  pl-1'>HOURS</p>
        </div>
        <p class="line" className='text-9xl text-white hidden md:block'>/</p>

        <div className=' font-bold  flex flex-col'>
          <p className='text-7xl md:text-9xl -mt-6 md:mt-0'>{("0"+timerMinutes).slice(-2)}</p>
          <p className='text-white text-xl  pl-1'>MINUTES</p>
        </div>
        <p class="line" className='text-9xl text-white hidden md:block'>/</p>

        <div className=' font-bold   flex flex-col'>
          <p className='text-7xl md:text-9xl -mt-6 md:mt-0'>{("0"+timerSeconds).slice(-2)}</p>
          <p className='text-white text-xl  pl-1'>SECONDS</p>
        </div>
      </div>
      <div className='text-white flex items-end justify-center text-center font-bold md:mt-[100px] mt-10'>
        <h2 className='text-1xl'>The anticipation is electric, the countdown is on...<br></br><h2>Stay charged !</h2></h2> 
      </div>
      <div className='text-white flex items-end justify-center text-center font-black mt-8'>
        <h4 className='text-lg'>Dhishna, the official tech fest of SOE, CUSAT is scheduled to be held on Nov 24, 25 & 26</h4>
      </div>
    </div>
  );
}

export default App;
