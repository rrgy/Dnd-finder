import React, { useState, useRef } from 'react' //useRef
import { Canvas, useRender } from 'react-three-fiber' //useRender
import { useSpring, a } from 'react-spring/three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// extend({ OrbitControls })

// const Controls = () => {
//     const orbitRef = useRef()
//     const { camera, gl } = useThree()
//     useRender(() => {
//         orbitRef.current.update()
//     })
//     return (
//         <orbitControls
//             autoRotate
//             maxPolarAngle={Math.PI / 3}
//             minPolarAngle={Math.PI / 3}
//             args={[camera, gl.domElement]}
//             ref={orbitRef} />
//     )
// }
const Box = () => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    const props = useSpring({ scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1], color: hovered ? 'red' : 'maroon' })
    useRender(() => {
        meshRef.current.rotation.y += 0.01
    })
    return (
        <a.mesh
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={props.scale}>
            {/* <orbitControls /> */}
            <boxBufferGeometry
                attach='geometry'
                args={[1, 1, 1,]} />
            <a.meshBasicMaterial attach='material' color={props.color} />
        </a.mesh>
    )
}
export default class Dice extends React.Component {
    render() {
        return (
            <Canvas>
                {/* <Controls /> */}
                <Box />
            </Canvas>
        )
    }
}
