import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { DivContainer, DivSpinner } from "./ScrollPage";
import { loadGLTFModel } from "../lib/model";
import { MutableRefObject } from "react"
const ScrollModelAnimation = () => {
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

 

  return (
  <> 
      <DivContainer/>
      </>
  );
};

export default ScrollModelAnimation;
