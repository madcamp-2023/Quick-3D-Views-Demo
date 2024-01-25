import { useSpring } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls, Text } from "@react-three/drei";
import { Summer } from "quick-3d-views/src/lib";
import Page1 from "./page1";
import {Page2} from "./page2";
import {Page3} from "./page3";
import './styles.css';
import { useState } from "react";
import Skills from "./skills";


export default function Kong() {
  // This spring controls the svg fill (text color)
  const [{ fill }, set] = useSpring({ fill: '#202020' }, []);
  const [isDayTime, setIsDayTime] = useState(true); // 상태 추가

  const pexel = (id: any) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`

  const images = [
    // Front
    { position: [0, 0, 1.4], rotation: [0, 0, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbETRH6%2FbtsDKzkhITT%2FyIkkPWrg3bCHJVR8sLODL1%2Fimg.png`, text:"Sinabro is a social media app that records and shares precious moments in your daily life. The app allows users to record their daily lives in a diary format and share precious memories with friends."
    , title: "Sinabro Project"},
    // Left
    { position: [-1.5, 0, 1.9], rotation: [0, Math.PI / 7, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdigBws%2FbtsDNqG5Pz0%2Fx3nsFQPF19iaTvW1nUUUP0%2Fimg.png`, text: "It is a hyperlocal community app project designed to solve the problem of joint purchase, cost reduction through joint delivery, and floor noise among apartment residents."
    , title: "everyHome Project"},
    { position: [-2.8, 0, 2.75], rotation: [0, Math.PI / 3.5, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbYgniK%2FbtsDUdlZTpd%2FMqCYpnqkwPAvzd9DGCuKX0%2Fimg.png`, text: "The Anomaly Detection with Human Data (called ADHD) is an AI project that learns AI models with Movenet & LSTM to detect abnormal situations such as assault by extracting Humanpose from CCTV (such as webcam) in real time to solve the recent surge in unmanned store crimes."
    , title: "ADHD Project" },
    // Right
    { position: [1.5, 0, 1.9], rotation: [0, -Math.PI / 7, 0], url: pexel(310452) , title : "temp" },
    { position: [2.8, 0, 2.75], rotation: [0, -Math.PI / 3.5, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbwq29e%2FbtsDKJmOvPq%2Fzs1ASJ4DmpNab30MvCplPk%2Fimg.png`, text: "ULRIM is a startup that connects arts and culture workers in the dark with users through a platform to inform them of their own values and make them real. By providing solutions to the closed art and culture market, it was intended to provide opportunities for freelance artists by collaborating with them. "
    , title: "ULRIM Project" }
  ]

  const images2 = [
    // Left
    { position: [-1, 0, 1.8], rotation: [0, Math.PI / 15, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQEGIq%2FbtsDVnhtKRI%2F8pMiv2FvdgGUYINZ8k4qiK%2Fimg.png`, text: "3D Reconstruction through Neural Radiance Field & Generate Model"
    , title: "2021.06 ~ 07  DGIST Intelligent Digital Systems LAB Intern"},
    { position: [-2.5, 0, 2.75], rotation: [0, Math.PI / 3, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXnZQu%2FbtsDLsFfKDr%2FLBAuFB0avrWckP3hqlWSkK%2Fimg.png`, text: "Object Detection by using TPU board"
    , title: "2020.06 ~ 07  DGIST Image Processing LAB Intern"},
    { position: [1, 0, 1.9], rotation: [0, -Math.PI / 15, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1rh1G%2FbtsDLtjWfnO%2FTew4FHVOWq1KWcoMNiEueK%2Fimg.png`, text: "Production of DGIST campus 3D Model: Utilizing Data Lightening in SOTA 3D Reconstructionc"
    , title: "2021.03 ~ 12  Undergraduate Group Research Program - 3D Reconstruction"},
    { position: [2.5, 0, 2.75], rotation: [0, -Math.PI / 3, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNnQ33%2FbtsDQ2TapFI%2FCumqiL9oZqr2WKOkWCduf0%2Fimg.png`, text: "Programming Camp - App, Web, AI, and 3D interaction web" 
    , title: "23.12 ~ 24.01  KAIST MadCamp"}
  ]

  return (
    <div className="app-container">
      <div className="ocean-animation">
        <Summer isDayTime={isDayTime} />
      </div>
      <div className="scroll-container">
          <div className="fullcomponent">
            <Canvas className="canvas" dpr={[1, 2]}>
              <Scene setBg={set} onShapeClick={() => setIsDayTime(!isDayTime)} />
              <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
            <Page1 fill={fill} />
          </div>
          <div className="fullcomponent">
            <div className="experiences-text">
              Skills
            </div>
            <Skills></Skills>
          </div>
          <div className="fullcomponent">
            <div className="project-text">
              Projects
            </div>
            <Page2 images={images} style={{ flex: 1 }} />
          </div>
          <div className="fullcomponent">
            <div className="experiences-text">
              Experiences
            </div>
            <Page3 images={images2} style={{ flex: 1 }} />
          </div>
      </div>
    </div>
  );
}
