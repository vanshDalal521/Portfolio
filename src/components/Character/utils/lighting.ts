import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  const directionalLight = new THREE.DirectionalLight(0xddb5ff, 0);
  directionalLight.intensity = 0;
  directionalLight.position.set(-0.47, -0.32, -1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  const rimLight = new THREE.DirectionalLight(0xff88cc, 0);
  rimLight.intensity = 0;
  rimLight.position.set(1.5, 0.5, 2);
  scene.add(rimLight);

  const pointLight = new THREE.PointLight(0xddb5ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 25;
    } else {
      pointLight.intensity = 0;
    }
  }
  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 0.8,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1.2,
      duration: duration,
      ease: ease,
    });
    gsap.to(rimLight, {
      intensity: 0.6,
      duration: duration,
      ease: ease,
      delay: 0.3,
    });
    gsap.to(".character-rim", {
      y: "40%",
      opacity: 1,
      scale: 1.6,
      delay: 0.2,
      duration: 2.5,
      ease: "power3.out",
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
