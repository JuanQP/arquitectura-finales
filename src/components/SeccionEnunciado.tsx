import { faExclamationTriangle, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';
import { Button, Card, Collapse } from 'reactstrap';
import { IEnunciado } from '../models/IFinal';

interface ISeccionEnunciadoProps {
  enunciado: IEnunciado;
}

interface ISeccionEnunciadoState {
  collapse: boolean;
}

class SeccionEnunciado extends React.Component<ISeccionEnunciadoProps, ISeccionEnunciadoState> {
  constructor(props: ISeccionEnunciadoProps) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapse: false,
    };
  }

  public toggleCollapse(): void {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  public RenderDisclaimerEnRevision(props: {enunciado: IEnunciado}) {
    if(!props.enunciado.enRevision) {
      return null;
    }

    return (
      <div>
        <FontAwesomeIcon icon={faExclamationTriangle}/>
        <strong>En revisión</strong>: Esta respuesta podría no ser 100% correcta
      </div>
    );
  }

  public RenderExplicacion(props: {enunciado: IEnunciado}) {
    if(props.enunciado.explicacion === undefined) {
      return null;
    }

    return (
      <div>
        <strong>Explicación</strong>
        <div dangerouslySetInnerHTML={{__html: props.enunciado.explicacion}}/>
      </div>
    );
  }

  public render() {
    const {enunciado} = this.props;

    return (
      <div className="row">
        <div className="col-md-1">
          <Button color="info" onClick={this.toggleCollapse}><FontAwesomeIcon icon={faQuestion}/></Button>
        </div>
        <div className="col-md-11">
          <p className="lead" dangerouslySetInnerHTML={{__html: enunciado.pregunta}}/>
          <Collapse isOpen={this.state.collapse}>
            <Card className="text-white" body={true} color={enunciado.enRevision ? "warning" : "info"}>
              <this.RenderDisclaimerEnRevision enunciado={enunciado}/>
              <div>
                <strong>Respuesta</strong>
                <div dangerouslySetInnerHTML={{__html: enunciado.respuesta}}/>
              </div>
              <this.RenderExplicacion enunciado={enunciado}/>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default SeccionEnunciado;
