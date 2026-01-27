// Performance configuration for smooth 3D animations
export const PERFORMANCE_CONFIG = {
  // Animation settings
  animation: {
    targetFPS: 60,
    maxDeltaTime: 1/30, // Cap at 30fps minimum
    enableAdaptiveQuality: true,
  },
  
  // GSAP settings
  gsap: {
    force3D: true,
    autoSleep: 60, // Auto-pause animations after 60 seconds of inactivity
    lazy: false, // Disable lazy rendering for smoother animations
  },
  
  // Three.js renderer settings
  renderer: {
    powerPreference: 'high-performance' as const,
    antialias: true,
    alpha: true,
    premultipliedAlpha: false,
    stencil: false,
    preserveDrawingBuffer: false,
    precision: 'mediump' as const,
  },
  
  // Shadow settings
  shadows: {
    enabled: true,
    type: 'PCFSoftShadowMap' as const,
    autoUpdate: true,
  },
  
  // Performance monitoring
  monitoring: {
    logPerformance: false, // Set to true for debugging
    fpsThreshold: 45, // Warn if FPS drops below this
  }
}

// Adaptive quality based on performance
export function getAdaptiveQuality(fps: number) {
  if (fps >= 55) return 'high'
  if (fps >= 35) return 'medium'
  return 'low'
}

// Performance optimization utilities
export const PerformanceUtils = {
  // Throttle function calls for better performance
  throttle<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number | null = null
    let lastExecTime = 0
    
    return (...args: Parameters<T>) => {
      const currentTime = Date.now()
      
      if (currentTime - lastExecTime > delay) {
        func(...args)
        lastExecTime = currentTime
      } else {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func(...args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  },

  // Debounce function calls
  debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: number | null = null
    
    return (...args: Parameters<T>) => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func(...args), delay)
    }
  },

  // Check if device supports high performance features
  isHighPerformanceDevice(): boolean {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    
    if (!gl) return false
    
    // Check for WebGL capabilities
    const renderer = gl.getParameter(gl.RENDERER) || ''
    
    // Basic heuristics for performance detection
    const isModernGPU = renderer.includes('RTX') || 
                       renderer.includes('GTX') || 
                       renderer.includes('Radeon') ||
                       renderer.includes('Metal')
    
    return isModernGPU || navigator.hardwareConcurrency >= 8
  }
}