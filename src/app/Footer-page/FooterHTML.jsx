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
  // useEffect(() => {
  //   btnRefTwitter.current.setAttribute(
  //     "href",
  //     `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  //   )
  // }, []);
  return (
    <section>
      <div className='footer-container-main'>
        <div className='footer-wrap flex-horizontal-container margin-5'>
          <h3 className='margin-5 color-white'>Контакти</h3>
          <br/>
          <div className='footer-text'>
            <p className='address margin-5 color-white'>гр. Русе ул. Солун 41</p>
            <p className='phone margin-5 color-white'>Телефон:</p>
            <p className='email margin-5 color-white'>Имейл:</p>
          </div>
        </div>
        <div className='flex-horizontal-container justify-content-center align-items-center text-align-center'>
          <h3>Социални мрежи</h3>
          <div>
            <ul>
              <li>
                <a href="">
                  <FacebookIcon/>
                </a>
              </li>
              <li>
                <a href="">
                  <XIcon/>
                </a>
              </li>
              <li>
                <a href="">
                  <LinkedInIcon/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Визитка</h3>
          <Image
            src={QR}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterHtml;
