import { useEffect, useRef, memo } from 'react'

const NetworkBackground = memo(({ className = '' }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    let nodes = []
    let connections = []
    let lastTime = 0
    const FPS = 30 // Limiter à 30 FPS pour économiser les ressources
    const frameInterval = 1000 / FPS

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initNetwork()
    }

    class Node {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = Math.random() * 3 + 1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        this.glowIntensity = 0
      }

      update(time) {
        this.glowIntensity = Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.5 + 0.5
      }

      draw() {
        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 4)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.6 * this.glowIntensity})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.3 * this.glowIntensity})`)
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = `rgba(59, 130, 246, ${0.8 + 0.2 * this.glowIntensity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Connection {
      constructor(node1, node2) {
        this.node1 = node1
        this.node2 = node2
        this.flowOffset = Math.random() * 100
        this.flowSpeed = Math.random() * 0.5 + 0.3
      }

      draw(time) {
        const dx = this.node2.x - this.node1.x
        const dy = this.node2.y - this.node1.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Base connection line
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(this.node1.x, this.node1.y)
        ctx.lineTo(this.node2.x, this.node2.y)
        ctx.stroke()

        // Animated flow effect
        const flowPosition = ((time * this.flowSpeed + this.flowOffset) % 100) / 100
        const flowX = this.node1.x + dx * flowPosition
        const flowY = this.node1.y + dy * flowPosition

        const gradient = ctx.createRadialGradient(flowX, flowY, 0, flowX, flowY, 8)
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)')
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.4)')
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(flowX, flowY, 8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initNetwork = () => {
      nodes = []
      connections = []

      // Create grid-like structure with some randomness
      const cols = Math.floor(canvas.width / 120)
      const rows = Math.floor(canvas.height / 120)
      
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = (i / cols) * canvas.width + (Math.random() - 0.5) * 40
          const y = (j / rows) * canvas.height + (Math.random() - 0.5) * 40
          nodes.push(new Node(x, y))
        }
      }

      // Create connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            connections.push(new Connection(nodes[i], nodes[j]))
          }
        }
      }
    }

    let time = 0
    const animate = () => {
      time += 1

      // Create dark tech background
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (behind nodes)
      connections.forEach(connection => {
        connection.draw(time)
      })

      // Update and draw nodes
      nodes.forEach(node => {
        node.update(time)
        node.draw()
      })

      animationRef.current = requestAnimationFrame((currentTime) => {
        const deltaTime = currentTime - lastTime
        if (deltaTime >= frameInterval) {
          lastTime = currentTime - (deltaTime % frameInterval)
          animate(currentTime)
        } else {
          animationRef.current = requestAnimationFrame(animate)
        }
      })
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Initial dark background
    ctx.fillStyle = 'rgba(3, 7, 18, 1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    animate(0)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  )
})

NetworkBackground.displayName = 'NetworkBackground'

export default NetworkBackground
