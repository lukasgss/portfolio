import { useEffect, useState } from 'react'

function ScrollUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M16 9l-4 -4" />
      <path d="M8 9l4 -4" />
    </svg>
  )
}

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const element = document.createElement('div')
    element.style.height = '10px'
    document.body.prepend(element)

    observer.observe(element)

    return () => {
      observer.disconnect()
      element.remove()
    }
  }, [])

  return (
    <a
      href="#home"
      className={`
        fixed h-[45px] w-[45px] 
        bottom-4 right-6 
        bg-[#b0b0b1] 
        flex items-center justify-center 
        rounded-full text-[#111212]
        opacity-80 hover:opacity-90 
        transition-all duration-300
        ${
          isVisible
            ? 'translate-y-0 opacity-80'
            : 'translate-y-20 opacity-0 pointer-events-none'
        }
      `}
    >
      <ScrollUpIcon />
    </a>
  )
}
