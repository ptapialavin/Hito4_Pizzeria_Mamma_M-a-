import { formatNumber } from '../utils/formatNumber';

const Navbar = ({ total = 0 }) => {
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4 py-2">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
        <span className="navbar-brand mb-0">¡Pizzería Mamma Mia!</span>

        <div className="d-flex flex-wrap gap-2 order-3 order-lg-2">
          <button className="btn btn-outline-light btn-sm">🍕 Inicio</button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Perfil</button>
              <button className="btn btn-outline-light btn-sm">🔒 Cerrar sesión</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">🔐 Iniciar Sesión</button>
              <button className="btn btn-outline-light btn-sm">🔐 Registrarse</button>
            </>
          )}
        </div>

        <button className="btn btn-outline-info btn-sm order-2 order-lg-3">
          🛒 Total: ${formatNumber(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
