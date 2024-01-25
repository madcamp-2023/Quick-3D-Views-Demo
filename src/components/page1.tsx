import React from 'react'
import { a } from '@react-spring/web'
import './page1.css'

export default function Page1({ fill }: {fill: any}) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={11} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={148.318} children="Major in Computer Science, DGIST" />
        </text>
        <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={60} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={217.909} children={'3D Portfolio'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={230.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={34} fontWeight="bold" letterSpacing="0em">
          <tspan x={60} y={281.909} children="Hi, my" />
          <tspan x={60} y={332.909} children="name is Yeongjae-Kong." />
          <tspan x={60} y={383.909} children="I'm Full-stack developer." />
          <tspan x={60} y={434.909} children="Welcome to my website!" />
        </text>
        {/* <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={11} fontWeight={500} letterSpacing="0em">
          <tspan x={366} y={640.318} children="Develop with haejune-jung" />
        </text> */}
        {/* <div className="glassmorphism-container">
          <p>GitHub: [여기에 GitHub 주소]</p>
          <p>Contact: [여기에 Gmail 주소]</p>
        </div> */}
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={40} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={550.909} children="Contact" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={24} fontWeight="bold" letterSpacing="0em">
          <tspan x={60} y={600.909} children="kong73000@gmail.com" />
        </text>
      </a.svg>
    </div>
  )
}
