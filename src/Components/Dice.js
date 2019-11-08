import React, { useState, useRef, useEffect } from 'react' //useRef
import * as THREE from 'three'
import { Canvas, useRender, extend, useThree } from 'react-three-fiber' //useRender
// import { useSpring, a } from 'react-spring/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

extend({ OrbitControls })

const Sword = () => {
    const [model, setModel] = useState()
    useEffect(() => {
        new GLTFLoader().load('./scene.gltf', setModel)
    })

    return (
        model ? <primitive object={model.scene} /> : null
    )
}

const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
    useRender(() => {
        orbitRef.current.update()
    })
    return (
        <orbitControls
            args={[camera, gl.domElement]}
            ref={orbitRef}
            autoRotate />
        // maxPolarAngle={Math.PI / 3}
        // minPolarAngle={Math.PI / 3}
    )
}

// const Plane = () => (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
//         <planeBufferGeometry
//             attach='geometry'
//             args={[100, 100]} />
//         <meshPhysicalMaterial attach='material' color='gray' />
//     </mesh>
// )


// const Box = () => {
//     const meshRef = useRef()
//     const [hovered, setHovered] = useState(false)
//     const [active, setActive] = useState(false)
//     const props = useSpring({ scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1], color: hovered ? 'red' : 'maroon' })
//     useRender(() => {
//         meshRef.current.rotation.y += 0.01
//     })
//     return (
//         <a.mesh
//             ref={meshRef}
//             onPointerOver={() => setHovered(true)}
//             onPointerOut={() => setHovered(false)}
//             onClick={() => setActive(!active)}
//             scale={props.scale}>
//             {/* <orbitControls /> */}
//             castShadow
//             <ambientLight />
//             <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
//             <icosahedronBufferGeometry
//                 attach='geometry'
//                 args={[1, 1, 1,]} />
//             <a.meshPhysicalMaterial attach='material' color={props.color} />
//         </a.mesh>
//     )
// }
export default class Dice extends React.Component {
    render() {
        return (
            <Canvas camera={{ position: [5, 5, 5] }} onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[15, 20, 5]} penumbra={1} />
                <fog attach='fog' args={['black', 5, 15]} />
                <Controls />
                {/* <Box /> */}
                {/* <Plane /> */}
                <Sword />
            </Canvas>
        )
    }
}
