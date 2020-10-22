import React,{useRef, useEffect} from 'react'
import * as THREE from 'three';

export default function ThreeDscene(props) {
    const {width, height} = props;
    const anchor = useRef();

    useEffect(()=>{
        const scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000),
            renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        anchor.current.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry(1,1,1),
              material = new THREE.MeshBasicMaterial({color: 0x00ff00}),
              cube = new THREE.Mesh(geometry, material);
              scene.add(cube);
              camera.position.z = 2;
        function gameLoop(){
            requestAnimationFrame(gameLoop);
            cube.rotation.x += 0.03;
            cube.rotation.y += 0.03;
            renderer.render(scene, camera);
        }
        gameLoop();
    },[])
    return (
        <div ref={anchor} style={{width, height, margin: "0 auto"}}>
        hai
        </div>
    )
}