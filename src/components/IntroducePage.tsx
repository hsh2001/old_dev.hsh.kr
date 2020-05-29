import React, { useEffect, useState } from 'react';
import style from '../scss/components/IntroducePage.module.scss';

const profileImageCanvasID = 'profile-image-canvas';
const ProfileImage: React.FC = () => {
  useEffect(() => {
    const image = new Image();
    image.src = '/image/profile-image.jpg';
    image.onload = (): void => {
      const canvas = document.getElementById(
        profileImageCanvasID,
      ) as HTMLCanvasElement;

      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      width={500}
      height={500}
      id={profileImageCanvasID}
      className={style.profileImage}
    />
  );
};

const IntroducePage: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener('scroll', function handler() {
      const { scrollY, innerHeight } = window;
      setOpacity(Math.max(0, 1 - (scrollY * 2) / innerHeight));
    });
  }, []);

  return (
    <div className={style.introducePage} style={{ opacity }}>
      <div>
        <ProfileImage />
        <h1>Hwang Seung-hyun</h1>
      </div>
    </div>
  );
};

export default IntroducePage;
