import styles from './container.module.css'

export default function Container({ children, fillHeight }) {
  return(
    <div className={`${styles.container} ${fillHeight ? 'h-full' : ''}`}>
      {children}
    </div>
  )
}