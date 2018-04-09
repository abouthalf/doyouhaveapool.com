import Link from 'next/link'
import Head from '../components/head'

import metaDescription from '../texts/description.txt';

export default () => (
  <div className="canvas">
    &nbsp;
    <Head title="Do you have a pool?" 
      description={metaDescription} />

    <div className="huh">
      <Link href="/about">
        <a>
          <img src="/static/images/huh.svg" />
          <span>What is this?</span>
        </a>
      </Link>
    </div>
    <div className="rail">&nbsp;</div>
    <div className="motel">&nbsp;</div>
    <div className="parking">&nbsp;</div>
    <style global jsx>{`
      html, body {
        margin: 0;
        padding: 0;
      }
      body {
        background: #2D4A8C;
        margin: 0;
        padding: 0;
        transform-style: preserve-3d;
        perspective: 100vh;
        overflow-x: hidden;
      }
    `}</style>
    <style jsx>{`
      .motel {
        position: absolute;
        top: 37.5vh;
        height: 50vh;
        width: 100vw;
        z-index: 0;

        background-image: url('/static/images/wall.jpg');
        background-repeat: repeat-x;
        background-size: auto 100%;
        background-position-x: 100vw;
        background-position-y: 0;

        animation: walk 20s infinite;
        animation-timing-function: linear;
        animation-direction: normal;
      }

      .rail {
        position: absolute;
        top: 37.5vh;
        height: 50vh;
        width: 100vw;
        z-index: 1;

        background-image: url('/static/images/railing.png');
        background-repeat: repeat-x;
        background-size: 21.7vh;
        background-position-x: 100vw;
        background-position-y: 16vh;

        animation: walk 19s infinite;
        animation-timing-function: linear;
        animation-direction: normal;
      }

      .parking {
        position: absolute;
        top: 87.5vh;
        height: 25vh;
        width: 100vw;
        z-index: 2;

        background-image: url('/static/images/motel6-parking-stripe.jpg');
        background-repeat: repeat-x;
        background-size: 13vh 13vh;
        background-position-x: 100vw;
        background-position-y: 0;
        
        transform: rotateX(90deg);
        transform-origin: top center;
        
        animation: walk 20s infinite;
        animation-timing-function: linear;
        animation-direction: normal;
      }

      .huh {
        position: absolute;
        z-index: 100;
        top: 20px;
        right: 20px;
        height: 20px;
        width: 20px;
        overflow: hidden;
        text-align: center;
        opacity: .1;
        transition: opacity 250ms ease-in-out;
      }

      .huh:hover {
        opacity: 1;
      }

      .huh img {
        width: 100%;
        height: 100%;
        display: block;
      }

      .huh span {visibility: hidden;}

      @keyframes walk {
        0% {
          background-position-x: 100vw;
        }
        100% {
          background-position-x: -100vw;
        }
      }
      
    `}</style>
  </div>
)
