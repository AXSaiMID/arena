/**
 * Logo Nardo Planejados em SVG (recriada de forma vetorial a partir da
 * identidade original: pixels dourados + "NARDO" sólido + "Planejados" vazado).
 *
 * Variantes:
 * - "dark" (padrão): texto grafite, para fundos claros (cabeçalho)
 * - "light": texto claro, para fundos escuros (rodapé)
 */
export default function LogoImage({ variant = 'dark', className = 'h-11 w-auto' }) {
  const main = variant === 'light' ? '#f3ede1' : '#454545'
  const gold = '#c6a11c'

  return (
    <svg
      viewBox="0 0 276 96"
      className={className}
      role="img"
      aria-label="Nardo Planejados"
    >
      {/* Marca: pixels dourados */}
      <rect x="4" y="8" width="30" height="30" rx="2" fill={gold} />
      <rect x="38" y="8" width="24" height="24" rx="2" fill={gold} />
      <rect x="22" y="42" width="26" height="26" rx="2" fill={gold} />

      {/* NARDO */}
      <text
        x="70"
        y="50"
        fontFamily="'Arial Black', Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="44"
        letterSpacing="-1"
        fill={main}
      >
        NARDO
      </text>

      {/* Planejados (vazado) */}
      <text
        x="72"
        y="84"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="30"
        letterSpacing="1"
        fill="none"
        stroke={main}
        strokeWidth="1.2"
      >
        Planejados
      </text>
    </svg>
  )
}
