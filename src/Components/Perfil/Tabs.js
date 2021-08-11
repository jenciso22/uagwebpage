import React, { useState } from "react";
import "./Tabs.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "flex",

    "& > *": {
      margin: theme.spacing(25),
    },
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const classes = useStyles();
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return (
    <>
      <div className="containernew">
        <div className="container1">
          <div className={classes.root}>
            <Avatar
              alt="Jose Enciso"
              className={classes.large}
              src="/static/images/avatar/1.jpg"
            />
          </div>
          <div className="user-name1">
            <p>Jose William Enciso Guzman</p>
          </div>
        </div>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Acerca de Mi
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Informacion Escolar
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Informacion Profesional
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Proyecto de Titulacion
            </button>
            <button
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
            >
              Contacto
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Acerca de Mi</h2>
              <hr />

              <form className="row-tabs" onSubmit={enviarDatos}>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    name="nombre"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Acerca de Mi"
                    className="form-control-aboutme"
                    onChange={handleInputChange}
                    name="acercademi"
                  />
                </div>
                <button type="submit" className="btntabs btn-primary-tabs">
                  Guardar
                </button>
                <button type="submit" className="btntabs btn-primary-tabs">
                  Editar
                </button>
              </form>

            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Informacion Escolar</h2>
              <hr />
              <form className="row-tabs" onSubmit={enviarDatos}>
                <div className="col-md-3">
                  <input
                    type="number"
                    placeholder="ID"
                    className="form-control-short"
                    onChange={handleInputChange}
                    name="id"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Maestria"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    name="maestria"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="number"
                    placeholder="Cuatrimestre"
                    className="form-control-normal"
                    onChange={handleInputChange}
                    name="cuatrimestre"
                  />
                </div>
                <button type="submit" className="btntabs btn-primary-tabs">
                  Guardar
                </button>
                <button type="submit" className="btntabs btn-primary-tabs">
                  Editar
                </button>
              </form>

            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Informacion Profesional</h2>
              <hr />
                <form className="row-tabs" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Experiencia Profesional"
                        className="form-control-medium"
                        onChange={handleInputChange}
                        name="experienciaprofesional"
                    />
                    </div>
                    <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Proyectos Profesionales"
                        className="form-control-medium"
                        onChange={handleInputChange}
                        name="proyectosprofesionales"
                    />
                    </div>
                    <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Habilidades"
                        className="form-control-medium"
                        onChange={handleInputChange}
                        name="habilidades"
                    />
                    </div>
                    <button type="submit" className="btntabs btn-primary-tabs">
                    Guardar
                    </button>
                    <button type="submit" className="btntabs btn-primary-tabs">
                    Editar
                    </button>
                </form>
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h2>Proyecto de Titulacion</h2>
              <hr />
              <form className="row-tabs" onSubmit={enviarDatos}>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Nombre Proyecto"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="nombreproyecto"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Asesor Proyecto"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="asesorproyecto"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Descripcion Proyecto"
                            className="form-control-medium"
                            onChange={handleInputChange}
                            name="descripcionproyecto"
                        />
                        </div>
                        <div className="col-md-3">
                        <label className="active-label">Activo</label>
                        <input
                            type="checkbox"
                            placeholder="Activo"
                            className="form-control-checkbox"
                            onChange={handleInputChange}
                            name="activoCheckbox"
                        />
                        </div>
                        <div className="col-md-3">
                        <label className="inactive-label"> Inactivo</label>
                        <input
                            type="checkbox"
                            placeholder="Inactivo"
                            className="form-control-checkbox"
                            onChange={handleInputChange}
                            name="inactivoCheckbox"
                        />
                        </div>
                        <button type="submit" className="btntabs btn-primary-tabs">
                        Guardar
                        </button>
                        <button type="submit" className="btntabs btn-primary-tabs">
                        Editar
                        </button>
                    </form>
            </div>

            <div
              className={
                toggleState === 5 ? "content  active-content" : "content"
              }
            >
              <h2>Contacto</h2>
              <hr />
                <form className="row-tabs" onSubmit={enviarDatos}>
                        <div className="col-md-3">
                        <input
                            type="tel"
                            placeholder="Telefono"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="telefono"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="email"
                            placeholder="Correo Electronico"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="email"
                        />
                        </div>
                        <div className="col-md-3">
                        <input
                            type="url"
                            placeholder="Linkeidn"
                            className="form-control-normal"
                            onChange={handleInputChange}
                            name="linkeidn"
                        />
                        </div>
                        <button type="submit" className="btntabs btn-primary-tabs">
                        Guardar
                        </button>
                        <button type="submit" className="btntabs btn-primary-tabs">
                        Editar
                        </button>
                    </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
