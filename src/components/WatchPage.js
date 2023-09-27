import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
const WatchPage = () => {

    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(closeMenu());
    },[])
  return (
    <div className='px-5'>
        <iframe width="896" height="504" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="Kya kharab hai 3.5 LPA me? | Tanay Pratap Hindi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;