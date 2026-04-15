import styles from "./Button.module.css"

const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary
}

export default function Button( { variant='primary', children, className } ) {
  const variantClass = VARIANTS[variant];

  return(
    <button className={`${styles.btn} ${variantClass} ${className}`}>
      { children }
    </button>
  )
}