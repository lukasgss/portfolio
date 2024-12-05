type ButtonLinkProps = {
  icon?: React.ReactElement
  link: string
  newPage?: boolean
  children: React.ReactNode
  className?: string
}

export default function ButtonLink({
  icon: Icon,
  link,
  newPage = false,
  children,
  className,
}: Readonly<ButtonLinkProps>) {
  return (
    <a href={link} target={newPage ? '_blank' : '_self'}>
      <button
        type="button"
        className={`flex gap-2.5 bg-gradient-to-r font-bold from-[#8b1ba1] via-[#59218a] to-[#831699] px-8 py-5
             text-center transition-all duration-500 bg-[length:200%_auto]
              text-[var(--title-color)] rounded-[10px] hover:bg-right-top hover:text-white hover:no-underline ${className}`}
      >
        {children}
        {Icon}
      </button>
    </a>
  )
}
