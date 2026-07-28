import type {
  AnchorHTMLAttributes,
  ReactNode,
} from 'react'

type LinkButtonVariant = 'primary' | 'secondary' | 'dark'
type LinkButtonSize = 'medium' | 'large'

type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children'
> & {
  children: ReactNode
  variant?: LinkButtonVariant
  size?: LinkButtonSize
  external?: boolean
}

const variantClasses: Record<LinkButtonVariant, string> = {
  primary:
    'border-brand-700 bg-brand-700 text-white hover:border-brand-900 hover:bg-brand-900',
  secondary:
    'border-brand-700 bg-transparent text-brand-700 hover:bg-brand-100',
  dark:
    'border-ink bg-ink text-white hover:bg-brand-700',
}

const sizeClasses: Record<LinkButtonSize, string> = {
  medium: 'min-h-11 px-5 py-2.5 text-sm',
  large: 'min-h-13 px-6 py-3.5 text-base',
}

export function LinkButton({
  children,
  variant = 'primary',
  size = 'medium',
  external = false,
  className = '',
  target,
  rel,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={`
        inline-flex items-center justify-center gap-2
        border font-bold
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand-500
        focus-visible:ring-offset-3
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      target={external ? (target ?? '_blank') : target}
      rel={external ? (rel ?? 'noopener noreferrer') : rel}
      {...props}
    >
      {children}
    </a>
  )
}