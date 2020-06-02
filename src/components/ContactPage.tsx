import React from 'react';
import style from '../scss/components/ContactPage.module.scss';
import { DiscussionEmbed } from 'disqus-react';

const ContactPage: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <h2>I can create whatever you want.</h2>
        <h2>Contact me.</h2>

        <p>
          {'GitHub: '}
          <a
            href="https://github.com/hsh2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/hsh2001
          </a>
          <br />
          {'Instagram: '}
          <a
            href="https://www.instagram.com/dev_hsh"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dev_hsh
          </a>
          <br />
          {'e-mail: '}
          <a href="mailto:dev@hsh.kr">dev@hsh.kr</a>
          <br />
          Disqus:
        </p>

        <DiscussionEmbed
          shortname="who-am-i-1"
          config={{
            url: 'http://dev.hsh.kr',
            identifier: '1',
            title: 'HSH developer',
          }}
        />
      </div>
    </div>
  );
};

export default ContactPage;
