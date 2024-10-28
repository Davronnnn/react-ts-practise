import { FC } from "react";
import { ComponentChildrenProps } from "../../types";
import Select from "../../components/Select";

const InterPage: FC<ComponentChildrenProps> = () => {
  return (
    <section className="intern">
      <Select />
    </section>
  );
};

export default InterPage;
