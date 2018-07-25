import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import { IFinal } from "../models/IFinal";
import FinalNavItem from './FinalNavItem';

interface INavbarFinalesProps {
  finales: IFinal[]
  togglerOpened: boolean;
  onTogglerClick: () => void;
  onFinalClick: (final: IFinal) => void;
}

class AppNavbarFinales extends React.Component<INavbarFinalesProps> {

  constructor(props: INavbarFinalesProps) {
    super(props);
    this.handleFinalClick = this.handleFinalClick.bind(this);
  }

  public handleFinalClick(final: IFinal) {
    this.props.onFinalClick(final);
  }

  public render() {
    const {finales, togglerOpened, onTogglerClick} = this.props;

    return (
      <Navbar color="light" light={true} expand="md">
        <NavbarBrand href="https://github.com/JuanQP/arquitectura-finales">
          <FontAwesomeIcon icon={faGithub}/> Finales de Arquitectura
        </NavbarBrand>
        <NavbarToggler onClick={onTogglerClick} />
        <Collapse isOpen={togglerOpened} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            {finales.map((f, i) => <FinalNavItem key={i} final={f} onFinalClick={this.handleFinalClick}/>)}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AppNavbarFinales;
