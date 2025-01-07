"use client";
import React from "react";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.scss";
import QR from "../../../assets/images/ONLINE QR Code -  Димитър Димитров.png";
import {useTranslation} from "react-i18next";

const FooterHtml = () => {
  const {t} = useTranslation();
  return (
    <footer className="set-footer-bottom">
      <div
        className="footer-container-main flex-horizontal-container justify-content-space-evenly align-items-baseline ">
        <div className="flex-vertical-container justify-content-center margin-5 text-align-justify">
          <div>
            <h3 className="margin-5 color-white">{t("contact")}</h3>
          </div>
          <div className="footer-text">
            <p className="address margin-5 color-white text-align-justify">{t("streetAdd")}</p>
            <p className="phone margin-5 color-white text-align-justify">{t("phone")}: +359 88 49 42 399</p>
            <p className="email margin-5 color-white text-align-justify">{t("email")}: {t("gmail")}</p>
          </div>
        </div>
        <div
          className="flex-vertical-container justify-content-center align-items-baseline margin-5">
          <div className="margin-left-20">
            <h3 className="margin-5 color-white">{t("social")}</h3>
          </div>
          <div className="social-network">
            <ul>
              <li>
                <a className="icons-styles margin-10" href="https://www.facebook.com/mitaka1210">
                  <FacebookIcon/>
                </a>
              </li>
              <li>
                <a className="icons-styles  margin-10" href="https://x.com/dimitar1201">
                  <XIcon/>
                </a>
              </li>
              <li>
                <a className="icons-styles  margin-10" href="https://www.linkedin.com/in/dimitar-dimitrov1201/">
                  <LinkedInIcon/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-vertical-container  justify-content-center align-items-center text-align-center  margin-5">
          <h3 className="margin-5 color-white">{t("visit")}</h3>
          <div className="margin-10">
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
