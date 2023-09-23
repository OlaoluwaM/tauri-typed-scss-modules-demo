import { clsx } from "clsx";
import { default as classes, Styles as Classes } from "./Example.module.scss";

interface ChildProps {
  customClasses?: Partial<Classes>;
}

// Example of allowing to customise any style class
export default ({ customClasses = {} }: ChildProps) => {
  return (
    // defined in a type-safe way
    <div>
      <div className={clsx(classes["child__div1"], "dwed")}>Div 1</div>

      <div className={clsx(classes.child__div2, customClasses?.child__div2)}>
        Div 2
      </div>
    </div>
  );
};
