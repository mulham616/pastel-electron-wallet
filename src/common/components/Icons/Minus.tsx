import React from 'react'

export type TMinusProps = {
  size: number
  className?: string
}

export function Minus({ size, className }: TMinusProps): JSX.Element {
  return (
    <svg
      width={size}
      className={className}
      viewBox='0 0 12 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.74994 0.250075C1.65056 0.248669 1.55188 0.267031 1.45966 0.304091C1.36743 0.341151 1.28349 0.396172 1.21271 0.465955C1.14194 0.535739 1.08573 0.618893 1.04737 0.710585C1.00901 0.802278 0.989258 0.900681 0.989258 1.00008C0.989258 1.09947 1.00901 1.19787 1.04737 1.28957C1.08573 1.38126 1.14194 1.46441 1.21271 1.5342C1.28349 1.60398 1.36743 1.659 1.45966 1.69606C1.55188 1.73312 1.65056 1.75148 1.74994 1.75008H10.2499C10.3493 1.75148 10.448 1.73312 10.5402 1.69606C10.6325 1.659 10.7164 1.60398 10.7872 1.5342C10.8579 1.46441 10.9141 1.38126 10.9525 1.28957C10.9909 1.19787 11.0106 1.09947 11.0106 1.00008C11.0106 0.900681 10.9909 0.802278 10.9525 0.710585C10.9141 0.618893 10.8579 0.535739 10.7872 0.465955C10.7164 0.396172 10.6325 0.341151 10.5402 0.304091C10.448 0.267031 10.3493 0.248669 10.2499 0.250075H1.74994Z'
        fill='currentColor'
      />
    </svg>
  )
}