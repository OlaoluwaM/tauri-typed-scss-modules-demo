import styles from "./Child.module.scss"

// Example of allowing to customise any style class
export default ({mixClassName}: { mixClassName?: Partial<typeof styles>}) => 
  // TODO: this seems to be a repeated pattern, maybe we could have an auxiliary function
  // defined in a type-safe way
  // extended("someClassKey", styles, mixClassname)
  <div className={`${styles.child} ${mixClassName?.child || ""}`}>
    <div className={`${styles.childDiv1} ${mixClassName?.childDiv1 || ""}`}>
      Div 1
    </div>
    <div className={`${styles.childDiv2} ${mixClassName?.childDiv2 || ""}`}>
      Div 2
    </div>
  </div>
