import { useCallback, useRef, useEffect } from 'react'

/**
 * Hook for creating performant animations that respect frame rate and device capabilities
 */
export function usePerformantAnimation() {
  const frameRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const fpsRef = useRef<number>(60)
  
  // Calculate current FPS
  const updateFPS = useCallback((currentTime: number) => {
    if (lastTimeRef.current) {
      const delta = currentTime - lastTimeRef.current
      const currentFPS = 1000 / delta
      // Smooth FPS calculation
      fpsRef.current = fpsRef.current * 0.9 + currentFPS * 0.1
    }
    lastTimeRef.current = currentTime
  }, [])
  
  // Check if device can handle high-performance animations
  const isHighPerformance = useCallback(() => {
    return fpsRef.current > 45 && navigator.hardwareConcurrency >= 4
  }, [])
  
  // Adaptive animation settings based on performance
  const getAnimationSettings = useCallback(() => {
    const fps = fpsRef.current
    
    if (fps > 55) {
      return {
        particleCount: 20,
        animationSpeed: 1,
        effectIntensity: 1,
        blurAmount: 1
      }
    } else if (fps > 35) {
      return {
        particleCount: 12,
        animationSpeed: 0.8,
        effectIntensity: 0.7,
        blurAmount: 0.8
      }
    } else {
      return {
        particleCount: 6,
        animationSpeed: 0.6,
        effectIntensity: 0.5,
        blurAmount: 0.6
      }
    }
  }, [])
  
  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    const animate = (currentTime: number) => {
      updateFPS(currentTime)
      frameRef.current = requestAnimationFrame(animate)
    }
    frameRef.current = requestAnimationFrame(animate)
  }, [updateFPS])
  
  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }
  }, [])
  
  useEffect(() => {
    startMonitoring()
    return stopMonitoring
  }, [startMonitoring, stopMonitoring])
  
  return {
    fps: fpsRef.current,
    isHighPerformance: isHighPerformance(),
    animationSettings: getAnimationSettings(),
    startMonitoring,
    stopMonitoring
  }
}

/**
 * Hook for throttling expensive operations based on performance
 */
export function usePerformantThrottle() {
  const lastCallRef = useRef<number>(0)
  
  const throttle = useCallback((callback: () => void, delay: number = 16) => {
    const now = Date.now()
    if (now - lastCallRef.current >= delay) {
      lastCallRef.current = now
      callback()
    }
  }, [])
  
  return throttle
}