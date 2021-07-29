import React from 'react'

export type TPlusProps = {
  size: number
  className?: string
}

export function Plus({ size, className }: TPlusProps): JSX.Element {
  return (
    <svg
      width={size}
      className={className}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.46173 1.21687C5.60016 1.07423 5.78954 0.992364 5.98828 0.989259C6.08866 0.98769 6.18834 1.00629 6.2814 1.04395C6.37446 1.08161 6.45901 1.13758 6.53005 1.20852C6.60108 1.27946 6.65715 1.36394 6.69493 1.45696C6.73272 1.54997 6.75144 1.64962 6.75 1.75V5.25H10.25C10.3494 5.2486 10.4481 5.26696 10.5403 5.30402C10.6325 5.34108 10.7165 5.3961 10.7872 5.46588C10.858 5.53567 10.9142 5.61882 10.9526 5.71051C10.9909 5.80221 11.0107 5.90061 11.0107 6C11.0107 6.0994 10.9909 6.1978 10.9526 6.28949C10.9142 6.38118 10.858 6.46434 10.7872 6.53412C10.7165 6.60391 10.6325 6.65893 10.5403 6.69599C10.4481 6.73305 10.3494 6.75141 10.25 6.75H6.75V10.25C6.75141 10.3494 6.73305 10.4481 6.69599 10.5403C6.65893 10.6325 6.60391 10.7165 6.53412 10.7872C6.46434 10.858 6.38118 10.9142 6.28949 10.9526C6.1978 10.9909 6.0994 11.0107 6 11.0107C5.90061 11.0107 5.80221 10.9909 5.71051 10.9526C5.61882 10.9142 5.53567 10.858 5.46588 10.7872C5.3961 10.7165 5.34108 10.6325 5.30402 10.5403C5.26696 10.4481 5.2486 10.3494 5.25 10.25V6.75H1.75C1.65062 6.75141 1.55195 6.73305 1.45972 6.69599C1.36749 6.65893 1.28355 6.60391 1.21277 6.53412C1.142 6.46434 1.0858 6.38118 1.04743 6.28949C1.00907 6.1978 0.989319 6.0994 0.989319 6C0.989319 5.90061 1.00907 5.80221 1.04743 5.71051C1.0858 5.61882 1.142 5.53567 1.21277 5.46588C1.28355 5.3961 1.36749 5.34108 1.45972 5.30402C1.55195 5.26696 1.65062 5.2486 1.75 5.25H5.25V1.75C5.24715 1.55126 5.3233 1.3595 5.46173 1.21687Z'
        fill='currentColor'
      />
    </svg>
  )
}