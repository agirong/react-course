import "./task.css";

export function TaskCard({ ready }) {
  //Puedo guardarlo como un objeto.
  // const cardStyles = {background: "#202020", color:"#ffffff", padding:"20px"}
  // const titleStyle = {fontWeight: "lighter"}

  return (
    <div className="card">
      <h1>Prueba: Tarea</h1>
      <h2 className={ready?'bg-green': 'bg-red'}>
        {ready ? "Realizada" : "Pendiente"}
      </h2>
    </div>
  );
}
