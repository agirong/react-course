import "./task.css";

export function TaskCard({ ready }) {
  //Puedo guardarlo como un objeto.
  // const cardStyles = {background: "#202020", color:"#ffffff", padding:"20px"}
  // const titleStyle = {fontWeight: "lighter"}

  return (
    <div className="card">
      <h1>Tarea</h1>
      <h2 style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Realizada" : "Pendiente"}
      </h2>
    </div>
  );
}
