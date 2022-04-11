import A from "./Componets/A";
import B from "./Componets/B";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Higher Order Componets</h1>
      <A name="click counter" batch="pw1" />
      <B name="hover counter" batch="pw2" />
    </div>
  );
}
