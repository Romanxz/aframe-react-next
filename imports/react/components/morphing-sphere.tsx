import React from 'react';
import { Entity } from "aframe-react";
import "../../aframe/components/morphshader";

export default function MorphingSphere({ position, color }) {
  return (<>
    <Entity
      className="draggable"
      position={position}
      geometry={{ primitive: "icosahedron", radius: 0.6, detail: 200 }}
      morphshader
    />
  </>)
}