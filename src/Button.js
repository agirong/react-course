import PropTypes from "prop-types";

export function Button({ text, name = "Boton" }) {
  console.log(text);
  // if(!text){
  //     console.error("El texto es requerido")
  // }
  return (
    <button
      onClick={function () {
        console.log("Evento Boton");
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//  Button.defaultProps ={
//     name: 'Default'
//  }
