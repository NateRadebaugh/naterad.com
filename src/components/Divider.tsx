import { Element } from "react-ui";

function Divider(props) {
  return (
    <Element
      css={{
        width: "100%",
        height: "2px",
        backgroundColor: "grays.400",
      }}
      {...props}
    />
  );
}

export default Divider;
