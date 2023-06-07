import { useEffect } from "react";
import { IndividualProductCard } from "../../Components";
import { useData } from "../../contexts/DataContext";

export function IndividualProduct() {
  const { setTitle } = useData();

  useEffect(() => setTitle("Product"), []);

  return (
    <>
      <IndividualProductCard />
    </>
  );
}
