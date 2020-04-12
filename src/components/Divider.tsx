import { Element } from "react-ui";

function Divider(props) {
  return (
    <Element
      css={{
        width: "100%",
        height: 1,
        backgroundColor: "lightgray",
      }}
      {...props}
    />
  );
}

export default Divider;
