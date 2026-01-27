import { gsap } from 'gsap'
import * as THREE from 'three'

export interface CameraAnimationOptions {
  camera: THREE.Camera
  target?: THREE.Vector3
  duration?: number
  ease?: string
}

export interface ModelAnimationOptions {
  model: THREE.Group
  duration?: number
  ease?: string
}

export class GSAPAnimations {
  private static instance: GSAPAnimations
  private timeline: gsap.core.Timeline

  constructor() {
    this.timeline = gsap.timeline()
  }

  static getInstance(): GSAPAnimations {
    if (!GSAPAnimations.instance) {
      GSAPAnimations.instance = new GSAPAnimations()
    }
    return GSAPAnimations.instance
  }

  // Animate camera position when switching between bikes
  animateCameraToModel(options: CameraAnimationOptions): Promise<void> {
    const { camera, target, duration = 2, ease = 'power2.inOut' } = options
    
    return new Promise((resolve) => {
      // Different camera positions for different bike models
      const positions = {
        'ninja-300': { x: 3, y: 1, z: 3 },
        'ninja-400': { x: 3.5, y: 1.2, z: 3.5 },
        'ninja-650': { x: 4, y: 1.5, z: 4 },
        'ninja-zx6r': { x: 4.5, y: 1.8, z: 4.5 },
        'ninja-zx10r': { x: 5, y: 2, z: 5 }
      }

      const targetKey = target && typeof target === 'string' ? target : 'ninja-650'
      const targetPosition = positions[targetKey as keyof typeof positions] || positions['ninja-650']

      this.timeline.clear()
      this.timeline.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration,
        ease,
        onComplete: () => resolve()
      })
    })
  }

  // Animate model entrance when switching
  animateModelSwitch(options: ModelAnimationOptions): Promise<void> {
    const { model, duration = 1.5, ease = 'power2.out' } = options

    return new Promise((resolve) => {
      // Initial state - model is invisible and scaled down
      gsap.set(model.scale, { x: 0, y: 0, z: 0 })
      gsap.set(model.rotation, { y: -Math.PI })
      
      // Animate entrance
      const tl = gsap.timeline({
        onComplete: () => resolve()                                           
      })

      tl.to(model.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: duration * 0.6,
        ease: 'back.out(1.7)'
      })
      .to(model.rotation, {
        y: 0,
        duration: duration * 0.8,
        ease
      }, '-=0.3')
    })        
  }

  // Optimized floating animation for the bike
  createFloatingAnimation(model: THREE.Group): gsap.core.Tween {
    return gsap.to(model.position, {
      y: '+=0.05', // Reduced amplitude for smoother motion
      duration: 4, // Slower for better performance
      ease: 'power1.inOut', // Simpler easing
      yoyo: true,
      repeat: -1,
      immediateRender: false
    })
  }

  // Optimized idle rotation animation
  createIdleRotation(model: THREE.Group): gsap.core.Tween {
    return gsap.to(model.rotation, {
      y: '+=0.005', // Much smaller rotation for smoother performance
      duration: 30, // Slower rotation
      ease: 'none',
      repeat: -1,
      immediateRender: false
    })
  }

  // Optimized hover effect for bike model
  animateModelHover(model: THREE.Group, isHovering: boolean): void {
    // Use a single timeline for smoother combined animations
    const tl = gsap.timeline()
    
    tl.to(model.position, {
      y: isHovering ? '+=0.1' : '-=0.1', // Relative movement
      duration: 0.4, // Slightly faster for responsiveness
      ease: 'power1.out'
    })
    .to(model.scale, {
      x: isHovering ? 1.02 : 1, // Smaller scale change
      y: isHovering ? 1.02 : 1,
      z: isHovering ? 1.02 : 1,
      duration: 0.4,
      ease: 'power1.out'
    }, 0) // Start at the same time as position animation
  }

  // Camera shake effect for dramatic moments
  cameraShake(camera: THREE.Camera, intensity: number = 0.1): void {
    const originalPosition = camera.position.clone()
    
    gsap.to(camera.position, {
      x: `+=${Math.random() * intensity - intensity / 2}`,
      y: `+=${Math.random() * intensity - intensity / 2}`,
      z: `+=${Math.random() * intensity - intensity / 2}`,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      onComplete: () => {
        gsap.to(camera.position, {
          x: originalPosition.x,
          y: originalPosition.y,
          z: originalPosition.z,
          duration: 0.2
        })
      }
    })
  }

  // Animate lighting changes for different models
  animateLightIntensity(light: THREE.Light, targetIntensity: number): void {
    gsap.to(light, {
      intensity: targetIntensity,
      duration: 1.5,
      ease: 'power2.inOut'
    })
  }

  // Kill all animations
  killAll(): void {
    gsap.killTweensOf('*')
    this.timeline.clear()
  }
}

// Export singleton instance
export const gsapAnimations = GSAPAnimations.getInstance()