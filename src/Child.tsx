import styles from "./Child.module.scss";

type C = Record<keyof typeof styles, string[]>;

interface ChildProps {
  customClasses: Partial<C>;
}

// This could become a helper
const combineClasses = (...classes: string[]) => classes.join(" ");

// This can be made generic
const includeDefaults = (customClasses: Partial<C>) => {
  const defaultCustomClasses = {
    child: [],
    childDiv1: [],
    childDiv2: [],
    childDiv1Mod9: [],
  } satisfies C;

  return {
    ...defaultCustomClasses,
    ...customClasses,
  };
};

// Example of allowing to customise any style class
export default ({ customClasses }: ChildProps) => {
  const customClassesWithDefaults = includeDefaults(customClasses);

  // TODO: this seems to be a repeated pattern, maybe we could have an auxiliary function
  return (
    // defined in a type-safe way
    // extended("someClassKey", styles, mixClassname)
    <div
      className={combineClasses(
        styles.child,
        ...customClassesWithDefaults.child
      )}
    >
      <div
        className={combineClasses(
          styles.childDiv1,
          ...customClassesWithDefaults.childDiv1
        )}
      >
        Div 1
      </div>

      <div
        className={combineClasses(
          styles.childDiv2,
          ...customClassesWithDefaults.childDiv2
        )}
      >
        Div 2
      </div>
    </div>
  );
};
