export function Mostrar() {
  function Suma(a, b) {
    return a + b;
  }

  return <h1>{Suma(10, 50)}</h1>;
}

// export function UserCard({usuario, lastname = "Apellido"}) {
//   console.log(usuario, lastname)
//   return <h1>{usuario}, de {lastname}</h1>;
// }

export function UserCard({name, amount, married,point, address, alerta}) {
  console.log(name, amount, married,point, address, alerta);
  return (
    <div>
      <h1>Nombre: {name}</h1>
      <h2>Monto: L.{amount}</h2>
      <p>Estado Civil: {married ? 'Casado':'Soltero'}</p>
      <ul>
        <li>Ciudad: {address.city}</li>
        <li>Dirección: {address.street}</li>
      </ul>
    </div>
  );
}
