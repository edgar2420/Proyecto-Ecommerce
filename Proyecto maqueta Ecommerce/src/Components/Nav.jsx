import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div className="section-header">
      <div className="header-main border-bottom">
        <div className="container">
          <div className="d-flex flex-nowrap align-items-center">
            <div className="col-lg-2 col-sm-3 col-3 unzoomMobile">
              <a href="#" className="brand-wrap">
                <img className="logo" height="20" src="/logo192.png" />
              </a>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 unzoomMobile">
              <form action="#" className="me-3">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                    style={{ width: "55%" }}
                  />
                  <button className="input-group-text btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-sm-3 col-3">
              <div className="float-md-end">
                <div className="widget-header">
                  <a className="icontext" href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <div className="text mobileinvisible">
                      <small className="text-muted">Mi carrito</small> <br />
                      <span className="text-dark"> 3 Productos </span>
                    </div>
                  </a>
                </div>
                <div className="widget-header dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle ms-3 icontext"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="text d-none d-lg-block">
                      <small className="text-muted">Iniciar sesión</small> <br />
                      <span className="text-dark"> Mi cuenta </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <form className="px-4 py-3">
                        <div className="mb-3">
                          <label className="form-label">Correo electrónico</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="email@ejemplo.com"
                          />
                        </div>
                        <div>
                          <label className="form-label">Contraseña</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                          />
                        </div>
                      </form>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signin">
                        ¿Ya tienes una cuenta? Inicia sesión
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-light bg-white navbar-expand-lg border-bottom">
        <div className="container">
          <button
            className="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_main6"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbar_main6">
            <ul className="navbar-nav">
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accesorios
                </a>
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contáctanos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Jabones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bolsas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shampoo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Aceites
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gomas y Resinas naturales
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Categoría
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Otra categoría
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
