
import PropTypes from 'prop-types';

function ClientesCard({cliente}) {
    return (
        <div>
            <h2>{cliente.nombre} {cliente.apellido}</h2>
            <p>{cliente.dni}</p>
            <p>{cliente.direccion}</p>
            <p>{cliente.telefono}</p>
            <p>{cliente.email}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    )
}

ClientesCard.propTypes = {
    cliente: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
        dni: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        telefono: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default ClientesCard;
 