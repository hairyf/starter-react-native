import type { SvgProps } from 'react-native-svg'
import { cn } from '#/lib/utils'
import { cssInterop } from 'react-native-css-interop'

type IconProps = SvgProps & {
  as: React.ComponentType<SvgProps>
  size?: number
}

function IconImpl({ as: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />
}

cssInterop(IconImpl, {
  className: {
    nativeStyleToProp: { height: 'size', width: 'size' },
    target: 'style',
  },
})

/**
 * A wrapper component for Lucide icons with Nativewind `className` support via `cssInterop`.
 *
 * This component allows you to render any Lucide icon while applying utility classes
 * using `nativewind`. It avoids the need to wrap or configure each icon individually.
 *
 * @component
 * @example
 * ```tsx
 * import { ArrowRight } from 'lucide-react-native';
 * import { Icon } from '@/registry/components/ui/icon';
 *
 * <Icon as={ArrowRight} className="text-red-500" size={16} />
 * ```
 *
 * @param {IconProps} props - Icon component props.
 * @param {React.ComponentType<SvgProps>} props.as - The SVG icon component to render.
 * @param {string} [props.className] - Utility classes to style the icon using Nativewind.
 * @param {number} [props.size] - Icon size (defaults to 14).
 */
function Icon({ as: IconComponent, className, size = 14, ...props }: IconProps) {
  return (
    <IconImpl
      as={IconComponent}
      className={cn('text-foreground', className)}
      size={size}
      {...props}
    />
  )
}

export { Icon }
