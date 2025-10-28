"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface ArchetypalAudioProps {
  variant?: "hero" | "sacred-vow" | "floating"
  autoPlay?: boolean
  className?: string
}

export function ArchetypalAudio({ variant = "hero", autoPlay = false, className = "" }: ArchetypalAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    const updateDuration = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    if (autoPlay) {
      audio.play()
      setIsPlaying(true)
    }

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [autoPlay])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="bg-background/95 backdrop-blur-sm border border-accent/20 rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              onClick={togglePlay}
              className="h-10 w-10 rounded-full bg-accent hover:bg-accent/90"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <div className="text-sm">
              <div className="font-semibold text-accent">Sacred Manifesto</div>
              <div className="text-muted-foreground">Daniel Golman</div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleMute}
              className="h-8 w-8"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
          <div className="mt-2 w-48 bg-muted rounded-full h-1">
            <div 
              className="bg-accent h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <audio ref={audioRef} src="/archetypal-manifesto.mp3" />
      </div>
    )
  }

  if (variant === "sacred-vow") {
    return (
      <div className={`bg-accent/5 border border-accent/20 rounded-lg p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-accent">Listen: The Sacred Vow</h3>
            <p className="text-sm text-muted-foreground">Presidential promises invoking the Greek gods</p>
          </div>
          <Button
            onClick={togglePlay}
            className="h-12 w-12 rounded-full bg-accent hover:bg-accent/90"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </div>
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <audio ref={audioRef} src="/archetypal-manifesto.mp3" />
      </div>
    )
  }

  // Default hero variant
  return (
    <div className={`text-center space-y-4 ${className}`}>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-accent">Hear the Sacred Words</h3>
        <p className="text-muted-foreground">Experience the archetypal manifesto as it was meant to be heard</p>
      </div>
      
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Button
            size="lg"
            onClick={togglePlay}
            className="h-16 w-16 rounded-full bg-accent hover:bg-accent/90"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <div className="text-left">
            <div className="font-semibold text-accent">The Sacred Archetypes</div>
            <div className="text-sm text-muted-foreground">Daniel Golman</div>
            <div className="text-xs text-muted-foreground">{formatTime(duration)}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">
              {formatTime(audioRef.current?.currentTime || 0)}
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleMute}
              className="h-6 w-6 p-0"
            >
              {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
            </Button>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground italic">
        "When the gods speak through mortal flesh, the system calls it madness..."
      </p>
      
      <audio ref={audioRef} src="/01_Chapter 0.mp3" />
    </div>
  )
}
