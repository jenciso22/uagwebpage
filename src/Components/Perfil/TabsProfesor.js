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


const TabsProfesor = () => {
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
                Contacto
              </button>
              {/* <button
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
              >
                Contacto
              </button> */}
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
                    <textarea className="textarea" name="acercademi" rows="10" cols="50">Acerca de mi</textarea>
                    {/*<input
                      type="text"
                      placeholder="Acerca de Mi"
                      className="form-control-aboutme"
                      onChange={handleInputChange}
                      name="acercademi"
                    />*/}
                  </div>
                  <div className="btn-group">
                    <button type="submit" className="btntabs btn-primary-tabs">
                      Guardar
                    </button>
                    <button type="submit" className="btntabs btn-primary-tabs">
                      Editar
                    </button>
                  </div>
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
                    <textarea className="textarea" name="areasInvestigacion" rows="10" cols="50">Areas de Investigacion</textarea>
                    {/*<input
                      type="text"
                      placeholder="Areas de Investigacion"
                      className="form-control-medium"
                      onChange={handleInputChange}
                      name="areainvestigacion"
                    />*/}
                  </div>
                  <div className="col-md-3">
                    <textarea className="textarea" name="Materias" rows="10" cols="50">Materias Asignadas</textarea>
                    {/*<input
                      type="text"
                      placeholder="Materias Asignadas"
                      className="form-control-medium"
                      onChange={handleInputChange}
                      name="materiaasignadas"
                    />*/}
                  </div>
                  <div className="btn-group">
                    <button type="submit" className="btntabs btn-primary-tabs">
                      Guardar
                    </button>
                    <button type="submit" className="btntabs btn-primary-tabs">
                      Editar
                    </button>
                  </div>
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
                        <textarea className="textarea" name="experiencia" rows="10" cols="50">Experiencia Profesional</textarea>
                        {/*<input
                            type="text"
                            placeholder="Experiencia Profesional"
                            className="form-control-medium"
                            onChange={handleInputChange}
                            name="experienciaprofesional"
                        />*/}
                      </div>
                      <div className="col-md-3">
                        <textarea className="textarea" name="proyectos" rows="10" cols="50">Proyectos Profesionales</textarea>
                        {/*<input
                            type="text"
                            placeholder="Proyectos Profesionales"
                            className="form-control-medium"
                            onChange={handleInputChange}
                            name="proyectosprofesionales"
                        />*/}
                      </div>
                      <div className="col-md-3">
                        <textarea className="textarea" name="habilidades" rows="10" cols="50">Habilidades</textarea>
                        {/*<input
                            type="text"
                            placeholder="Habilidades"
                            className="form-control-medium"
                            onChange={handleInputChange}
                            name="habilidades"
                        />*/}
                      </div>
                      <div className="btn-group">
                        <button type="submit" className="btntabs btn-primary-tabs">
                        Guardar
                        </button>
                        <button type="submit" className="btntabs btn-primary-tabs">
                        Editar
                        </button>
                      </div>
                  </form>
              </div>
  
              {/* <div
                className={
                  toggleState === 4 ? "content  active-content" : "content"
                }
              >
                <h2>Content 4</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos voluptatum
                  beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
                </p>
              </div> */}
  
              <div
                className={
                  toggleState === 4 ? "content  active-content" : "content"
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
                          <div className="btn-group">
                            <button type="submit" className="btntabs btn-primary-tabs">
                            Guardar
                            </button>
                            <button type="submit" className="btntabs btn-primary-tabs">
                            Editar
                            </button>
                          </div>
                      </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default TabsProfesor;