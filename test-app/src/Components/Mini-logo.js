import logo from "../logo.svg";

export default function MiniLogo({ pos }) {
  const myPos = {
    top: pos[1] + "%",
    left: pos[0] + "%",
  };
  return <img src={logo} style={myPos} className="Mini-logo" />;
}
