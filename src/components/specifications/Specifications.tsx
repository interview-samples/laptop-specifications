import React from "react";
import CategoriesList from "./CategoriesList";
import { ComputerPartsCategory } from "../../interfaces/computerParts";

interface SpecififcationPropTypes {
  categories: ComputerPartsCategory[];
}

const Specification: React.FC<SpecififcationPropTypes> = ({ categories }) => {
  return (
    <div className="spec-sheet rounded-grey-border">
      <h2>Customisation Choices</h2>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default Specification;
