import React, {useEffect, useRef} from 'react';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.scss';
import QR from '../../../assets/images/ONLINE QR Code -  Димитър Димитров.png'
const FooterHtml = () => {
  const btnRefTwitter = useRef();
  let postUrl = encodeURI(window.location.href);
  let postTitle = '';
  return (
    <footer>
      <div className='footer-container-main flex-horizontal-container justify-content-space-evenly align-items-baseline '>
        <div className='flex-vertical-container justify-content-center margin-5'>
          <div>
            <h3 className='margin-5 color-white'>Контакти</h3>
          </div>
          <div className='footer-text'>
            <p className='address margin-10 color-white text-align-justify'>гр. Русе ул. Солун 41</p>
            <p className='phone margin-10 color-white text-align-justify'>Телефон: 5522532298</p>
            <p className='email margin-10 color-white text-align-justify'>Имейл: dimitard185@gmail.com</p>
          </div>
        </div>
        <div
          className='flex-vertical-container justify-content-center align-items-center text-align-center  margin-5'>
          <div>
            <h3 className="margin-5 color-white">Социални мрежи</h3>
          </div>
          <div className="social-network">
            <ul>
              <li>
                <a className='icons-styles' href="">
                  <FacebookIcon/>
                </a>
              </li>
              <li>
                <a className='icons-styles' href="">
                  <XIcon/>
                </a>
              </li>
              <li>
                <a className='icons-styles' href="">
                  <LinkedInIcon/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div  className='flex-vertical-container  justify-content-center align-items-center text-align-center  margin-5'>
          <h3 className='margin-5 color-white'>Визитка</h3>
          <div className='margin-10'>
            <Image
              src={QR}
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHtml;
