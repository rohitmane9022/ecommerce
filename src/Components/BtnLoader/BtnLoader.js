import DotLoader from "react-spinners/DotLoader";

const override = {
  margin: "auto",
};

export function BtnLoader({ loading, color }) {
  return (
    <DotLoader
      color={color}
      cssOverride={override}
      loading={loading}
      size={16}
      speedMultiplier={2}
    />
  );
}
