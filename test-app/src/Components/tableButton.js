export default function TableButton({ info }) {
  let content = " ";

  if (info.id == 1) {
    content = "┌";
  } else if (info.id < info.dims.x) {
    content = "─";
  } else if (info.id === info.dims.x) {
    // console.log()
    content = "┐";
  } else if (info.id == info.dims.x * info.dims.y - info.dims.x + 1) {
    content = "└";
  } else if (info.id == info.dims.x * info.dims.y) {
    content = "┘";
  } else if (info.id % info.dims.x == 0 || (info.id - 1) % info.dims.x == 0) {
    content = "│";
  } else if (info.id > info.dims.x * info.dims.y - info.dims.x) {
    content = "─";
  }

  return (
    <button className="tButton" id={"btn" + info.id}>
      {content}
    </button>
  );
}
