
'use client'
import React from 'react';
import football from '../../../assets/images/football.jpeg';
import Image from "next/image";
const AboutHtml = () => {
  // const img1 = require.context('../../../assets/images', true);
  return (
    <div className="about">
      <section className="info-bout-me">
        <div className="box-1">
          <div className="overlay-box">
            <Image  alt='footbal'  width={500}
                    height={500} src={football}/>
            <div className="desc">
              <p>Place your text here</p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis hendrerit nunc et malesuada. Quisque purus sapien, ultricies eu lobortis vitae, vehicula eu orci. Sed quis consectetur diam, malesuada mattis velit. Sed eros eros, laoreet vitae lectus vehicula, faucibus congue ante. Nunc pulvinar, leo nec fringilla imperdiet, leo ex fermentum dolor, in pharetra massa magna at dui. Vestibulum a pulvinar augue. Sed lacus mauris, volutpat
                  eu erat sit amet, molestie fermentum ex. Vivamus ex nisi, faucibus ac eros mollis, congue porta velit. Nunc consequat tellus vitae dui vulputate consequat.</li>
                <li>Integer aliquam rhoncus ullamcorper. Quisque in nisl consequat, iaculis enim nec, convallis lorem. Sed sit amet scelerisque erat,
                  ut finibus ligula. Phasellus nisi libero, sodales non leo sed, dapibus elementum mi. Etiam aliquet, dolor et consectetur maximus,
                  enim ligula accumsan dui, vel eleifend nibh felis vitae nisi. Phasellus porta lectus pulvinar diam mollis, in tincidunt enim tempus. Nullam eu nisi non ipsum
                  maximus bibendum. Duis consectetur felis non efficitur blandit. Nullam vulputate, massa et dictum accumsan, dolor urna bibendum velit, sed ultrices felis nisi vel ipsum.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="overlay-box" styles="background-image: url('https://via.placeholder.com/768x768');">
            <div className="desc">
              <p>Place your text here</p>
              <ul>
                <li>lorem ipsum dolor</li>
                <li>lorem lipsum</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="overlay-box" styles="background-image: url('https://via.placeholder.com/768x768');">
            <div className="desc">
              <p>Place your text here</p>
              <ul>
                <li>lorem ipsum dolor</li>
                <li>lorem lipsum</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-4">
          <div className="overlay-box" styles="background-image: url('https://via.placeholder.com/768x768');">
            <div className="desc">
              <p>Place your text here</p>
              <ul>
                <li>lorem ipsum dolor</li>
                <li>lorem lipsum</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHtml;
