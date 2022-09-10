import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank" href="https://twitter.com/ayenisholah" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a target="_blank" href="https://github.com/ayenisholah" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/ayenishola" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
