import "aframe";
import "aframe-extras"
import "aframe-environment-component";
import React from 'react';
import { Entity, Scene } from "aframe-react";

import CameraRig from "./react/components/camera-rig";
import MorphingSphere from "./react/components/morphing-sphere";

export default function App() {

  return (<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <Scene
      id="scene"
      events={{
        loaded: () => { console.log("scene loaded"); }
      }}
      renderer={{
        logarithmicDepthBuffer: true,
        colorManagement: true,
        foveationLevel: 0,
        highRefreshRate: true
      }}
    >
      <MorphingSphere position={{ x: 0, y: 1, z: -2 }} color="#ddb8f2" />
      <CameraRig />
      <Entity
        light={{
          type: 'ambient',
          color: '#ddb8f2', // neon-retrowave-dark-violet
          intensity: 0.5,
          decay: 2,
        }}
        position={{ x: 0, y: 15, z: 0 }}
      />
      <Entity
        environment={{
          preset: "dream",
          seed: 1,
          lighting: "distant",
          shadow: true,
          fog: 0.6,
          ground: "flat",
          dressing: "none",
          groundYScale: 0,
          groundTexture: "none",
          groundColor: "#440e45",
          groundColor2: "#008f8f",
          grid: "1x1",
          gridColor: "#5605f7",
        }}
      />
    </Scene>
  </div>
  )
}

