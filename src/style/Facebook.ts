import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
    }

    .fb-like {
        height: 28px;

        iframe {
            animation: fade-in 0.5s ease 0.5s;
        }
    }
`;
