import React from "react";
import CategoriesList from "./CategoriesList";
import { ComputerPartsCategory } from "../../interfaces/computerParts";
import Card from "../Card";

interface SpecififcationPropTypes {
  categories: ComputerPartsCategory[];
}

const Specification: React.FC<SpecififcationPropTypes> = ({ categories }) => {
  return (
    <Card title='Customisation Choices' className='spec-sheet'>      
      <CategoriesList categories={categories} />
    </Card>
  );
};

export default Specification;
