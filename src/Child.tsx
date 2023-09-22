import { clsx } from "clsx";
import classes from "./Child.module.scss";

type Classes = typeof classes;

interface ChildProps {
  customClasses: Partial<Classes>;
}

// Example of allowing to customise any style class
export default ({ customClasses }: ChildProps) => {
  return (
    // defined in a type-safe way
    <div className={clsx(classes.child, customClasses?.child)}>
      <div className={clsx(classes.childDiv1, customClasses?.childDiv1)}>
        Div 1
      </div>

      <div className={clsx(classes.childDiv2, customClasses?.childDiv2)}>
        Div 2
      </div>
    </div>
  );
};
