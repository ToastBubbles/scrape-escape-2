import TableButton from "./tableButton";

export default function TextInput({ dims }) {
  // const
  let content = [];
  let i = 0;
  let id = 1;
  while (i < dims.x) {
    let m = 0;
    let innerContent = [];
    while (m < dims.y) {
      innerContent.push(<TableButton info={{ id, dims }} />);
      id++;
      m++;
    }
    content.push(<div className="btnRow">{innerContent}</div>);
    i++;
  }
  return <div className="userInput">{content}</div>;
}
