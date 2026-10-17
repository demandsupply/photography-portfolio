import styles from "./Button.module.css"
import Link from "next/link";

const VARIANTS = {
  primary: styles.primary,
  secondary: styles.secondary
}

export default function Button( { variant='primary', children, className, href } ) {
  const btnClasses = `${styles.btn} ${VARIANTS[variant]} ${className}`;

    // add href inside the component to avoid nested tags (<a><button>...)
    if (href) {
     return(
      <Link href={href} className={btnClasses}>
        { children }
      </Link>
     ) 
    }

  return(
    <button className={btnClasses}>
      { children }
    </button>
  )
}