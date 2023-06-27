import React from 'react';
import {GoogleLogin, useGoogleLogin} from '@react-oauth/google';
import  { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { client } from '../lib/client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log('*** Google Response %o', response);

    /*** 

    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googeId, imageUrl } = response.profileObj;

    const doc = {
      _id: googeId,
      _type: 'user',
      userName: name,
      image: imageUrl
    }

    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', { replace: true })
      })
    ***/
  }

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.log('Error: %o', error),
  })
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
        <div className='p-5'>
          <img src={logo} width='130px' alt='logo' />
        </div>
        {/* clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps) => (
              <button
                type="button"
                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                  <FcGoogle className="mr-4" />Sign in with Google
                </button> )} */}

              {/* cookiePolicy='single_host_origin' */}
        <div className='shadow-2xl'>
          {/* <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            
          /> */}
          <button
            type="button"
            className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
            onClick={()=> login()}
          >
            <FcGoogle className="mr-4" />Sign IN with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login