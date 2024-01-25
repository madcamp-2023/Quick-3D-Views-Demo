import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
// import { OrbitControls } from '@react-three/drei'

const GOLDENRATIO = 1.61803398875

export const Page2 = ({ images }: any) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }} gl={{ alpha: true }}>
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          transparent
          opacity={0}
          metalness={0.5}
          mirror={0.5}
        />
      </mesh>
    </group>
    {/* <OrbitControls
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 9} // 왼쪽으로 20도
      maxAzimuthAngle={Math.PI / 9}  // 오른쪽으로 20도
    /> */}
    <Environment preset="city" />
  </Canvas>
)

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }: any) {
  const ref = useRef<any>(null)
  const clicked = useRef<any>(null)
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0.6, 5) //viewpoint 조정
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.5, dt) //카메라의 현재 위치(camera.position)을 목표 위치(p)로 부드럽게 전환
    easing.dampQ(state.camera.quaternion, q, 0.5, dt) //카메라의 현재 회전(camera.quaternion)을 목표 회전(q)로 부드럽게 전환
  })
  return (
    // 이미지 클릭 시 zoom
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props: any) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, text, title, c = new THREE.Color(), ...props }: any) {
  const textRef = useRef();
  const [textOpacity, setTextOpacity] = useState(0);
  const image = useRef<any>(null)
  const frame = useRef<any>(null)
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [showText, setShowText] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  // 이미지 클릭 시 opacity 조절하여 우측에 text가 나타나게함
  const handleClick = () => {
    setShowText(!showText); // 텍스트 표시 상태 토글
  };
  useFrame(() => {
    if (showText && textOpacity < 1) {
      setTextOpacity((prev) => Math.min(prev + 0.015, 1)); // 투명도 증가
    } else if (!showText && textOpacity > 0) {
      setTextOpacity((prev) => Math.max(prev - 0.015, 0)); // 투명도 감소
    }

    if (textRef.current) {
      textRef.current.opacity = textOpacity; // Text 컴포넌트의 투명도 업데이트
    }
  });

  useCursor(hovered)
  useFrame((state, dt) => {
    const zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    image.current.material.zoom = zoom;
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.2, dt)
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onClick={handleClick}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        {/* <meshStandardMaterial color="white" metalness={1} roughness={0.2} envMapIntensity={2} /> */}
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
        <Text ref={textRef} maxWidth={0.35} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.035} color="black">
          {text}
          <meshBasicMaterial transparent opacity={textOpacity} />
        </Text>
        <Text ref={textRef} maxWidth={0.35} anchorX="left" anchorY="top" position={[-0.65, GOLDENRATIO-0.15, 0.2]} fontSize={0.055} color="black">
          {title}
          <meshBasicMaterial transparent opacity={textOpacity} />
        </Text>
    </group>
  )
}