import React, { useEffect } from "react";
import * as THREE from "three";
import VideoSection from "./VideoSection";
import AboutUs from "./AboutUs";
import Map from "./Map";
import Contact from "./Contact";

const Showcase = () => {
  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Append canvas to the showcase-background div
    const container = document.getElementById("showcase-background");
    if (container) {
      renderer.domElement.style.position = "fixed";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.zIndex = "1";
      container.appendChild(renderer.domElement);
    }

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#ffffff",
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div id="showcase-background" className="fixed inset-0 bg-black" />

      <div className="relative">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-white px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            BIZNING JAMOAGA QO'SHILING!
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 font-semibold transform">
              RO'YHATDAN O'TISH
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 font-semibold transform">
              GURUHGA QO'SHILISH
            </button>
          </div>
        </div>
      </div>
      <VideoSection />
      <AboutUs />
      <Contact />
      <Map />
    </>
  );
};

export default Showcase;
