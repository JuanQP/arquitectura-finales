import * as React from 'react';
import { Alert } from 'reactstrap';
import { ISeccion } from '../models/IFinal';
import SeccionEnunciado from './SeccionEnunciado';

interface IFinalSeccionProps {
  seccion: ISeccion;
}

class FinalSeccion extends React.Component<IFinalSeccionProps> {
  public render() {
    const {seccion} = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Alert color="success">{seccion.descripcion}</Alert>
          </div>
        </div>
        {seccion.enunciados.map((e, i) => <SeccionEnunciado key={i} enunciado={e}/>)}
      </div>
    );
  }
}

export default FinalSeccion;
