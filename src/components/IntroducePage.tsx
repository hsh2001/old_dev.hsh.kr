import React, { useEffect, useState } from 'react';
import style from '../scss/components/IntroducePage.module.scss';
import styled from 'styled-components';

const profileImage = new Image();
profileImage.src = '/image/profile-image.jpg';
export const profileImageLoad: Promise<HTMLImageElement> = new Promise(
  (resolve) => {
    profileImage.onload = (): void => {
      resolve(profileImage);
    };
  },
);

const profileImageCanvasID = 'profile-image-canvas';
const ProfileImage: React.FC = () => {
  useEffect(() => {
    profileImageLoad.then((image) => {
      const canvas = document.getElementById(
        profileImageCanvasID,
      ) as HTMLCanvasElement;

      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
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

interface IntroducePageProps {
  message: string;
  loadingSize: number;
}

interface LoadingBarProps {
  size: number;
}

const LoadingBarAnimation = styled.div<LoadingBarProps>`
  width: ${(props) => props.size * 100}%;
  height: 100%;
  transition: width 0.3s;
  background-color: #abf200;
  border-radius: 1rem;
`;

const LoadingBarContainer = styled.div`
  width: 90vw;
  height: 1rem;
  max-width: 450px;
  margin: 1rem auto;
`;

const LoadingBar: React.FC<LoadingBarProps> = ({ size }: LoadingBarProps) => {
  return (
    <LoadingBarContainer>
      <LoadingBarAnimation size={size} />
    </LoadingBarContainer>
  );
};

const IntroducePage: React.FC<IntroducePageProps> = ({
  message = '',
  loadingSize,
}: IntroducePageProps) => {
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
        <p>{message}</p>
        <LoadingBar size={loadingSize} />
        <div
          className="fb-like"
          data-href="http://dev.hsh.kr"
          data-width=""
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-share="false"
        />
      </div>
    </div>
  );
};

export default IntroducePage;
