import React from "react";

export default function FormularioRegistro() {
  return (
    <div className="card mb-4 my-5 col-lg-5 col-sm-8 col-10">
      <article className="card-body">
        <h4 className="mb-4">Crear cuenta</h4>
        <form>
          <div className="row gx-3">
            <div className="col mb-4">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col mb-4">
              <label className="form-label">Apellido</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="col-auto mb-3">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choose_a"
                  checked
                />
                <span className="form-check-label"> Comprador </span>
              </label>
            </div>
            <div className="col-auto mb-3">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choose_a"
                />
                <span className="form-check-label"> Vendedor </span>
              </label>
            </div>
            <div className="col-auto mb-3">
              <label className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="choose_a"
                />
                <span className="form-check-label"> Ambos </span>
              </label>
            </div>
          </div>
          <div className="row gx-3">
            <div className="col mb-3">
              <label className="form-label">Ciudad</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col mb-3">
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Dirección</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" placeholder="" />
              <small className="form-text">
                Nunca compartiremos tu correo electrónico
              </small>
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Teléfono</label>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="" />
              </div>
            </div>
            <div className="col mb-3">
              <label className="form-label">Crear contraseña</label>
              <input className="form-control" type="password" />
            </div>
            <div className="col mb-3">
              <label className="form-label">Repetir contraseña</label>
              <input className="form-control" type="password" />
            </div>
          </div>
          <div className="row mt-3 mb-4 align-items-center">
            <div className="col-auto">
              <button className="btn btn-primary" type="button">
                Registrarse ahora
              </button>
            </div>
            <div className="col">
              <label className="form-check me-auto">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label">
                  Acepto los Términos y Condiciones
                </span>
              </label>
            </div>
          </div>
        </form>
        <hr />
        <p className="mb-0">
          ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
        </p>
      </article>
    </div>
  );
}
