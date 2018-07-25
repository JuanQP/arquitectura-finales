import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IFinal } from '../models/IFinal';
import FinalSeccion from './FinalSeccion';

interface IAppFinalSeleccionadoViewProps {
  final: IFinal | null;
}

class AppFinalSeleccionadoView extends React.Component<IAppFinalSeleccionadoViewProps> {
  public render() {
    const {final} = this.props;

    if(final === null) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="mt-4 lead">Seleccioná alguno de los finales para continuar</p>
              <p className="lead">
                Podés ver el código de esta página
                <a href="https://github.com/JuanQP/arquitectura-finales">
                  {" "}en GitHub <FontAwesomeIcon icon={faGithub}/><FontAwesomeIcon icon={faHeart}/>
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>{final.descripcion}</h2>
            <p>Hacé click en el botón celeste para obtener la respuesta de cada pregunta.</p>
          </div>
        </div>
        {final.secciones.map((s, i) => <FinalSeccion key={i} seccion={s}/>)}
      </div>
    );
  }
}

export default AppFinalSeleccionadoView;
