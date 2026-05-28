import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

function styleCharacter(character: THREE.Object3D) {
  const hairColor = new THREE.Color(0x111111);
  const outfitColor = new THREE.Color(0x1a1a2e);
  const techAccent = new THREE.Color(0x2d1b4e);
  const shoeColor = new THREE.Color(0x0d0d0d);

  character.traverse((child: any) => {
    if (!child.isMesh) return;
    const mesh = child as THREE.Mesh;
    if (!mesh.material) return;

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material];

    materials.forEach((mat: THREE.MeshStandardMaterial) => {
      if (!mat.color) return;
      const color = mat.color;

      const r = color.r;
      const g = color.g;
      const b = color.b;
      const avg = (r + g + b) / 3;
      const name = mesh.name.toLowerCase();
      const isHeadPart =
        name.includes("head") ||
        name.includes("face") ||
        name.includes("ear") ||
        name.includes("neck");
      const isSkin =
        isHeadPart ||
        (r > 0.5 && g > 0.3 && b > 0.2 && r > g && g > b && r - g < 0.3);
      const isHair = avg < 0.35 && r < 0.4 && g < 0.35;
      const isDark =
        avg < 0.3 && r < 0.35 && g < 0.35 && b < 0.35;
      const isShoe =
        name.includes("shoe") ||
        name.includes("boot") ||
        name.includes("foot") ||
        isDark;

      if (isSkin) {
        mat.roughness = 0.55;
        mat.metalness = 0;
      } else if (isShoe && isDark) {
        mat.color.copy(shoeColor);
        mat.roughness = 0.4;
        mat.metalness = 0.7;
      } else if (isHair) {
        mat.color.copy(hairColor);
        mat.roughness = 0.3;
        mat.metalness = 0.2;
        if (mat.emissive) {
          mat.emissive.setHex(0x222244);
          mat.emissiveIntensity = 0.05;
        }
      } else {
        const clothesDark = new THREE.Color(
          Math.max(0.06, color.r * 0.15),
          Math.max(0.06, color.g * 0.15),
          Math.max(0.12, color.b * 0.2)
        );
        mat.color.lerp(clothesDark, 0.7);
        mat.roughness = Math.min(1, mat.roughness * 1.3);
        mat.metalness = 0.05;
        if (mat.emissive) {
          mat.emissive.setHex(0x1a0a2e);
          mat.emissiveIntensity = 0.08;
        }
      }
    });
  });
}

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            styleCharacter(character);
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
