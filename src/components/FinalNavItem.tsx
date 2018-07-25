import * as React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { IFinal } from '../models/IFinal';

interface IFinalNavItemProps {
  final: IFinal;
  onFinalClick: (final: IFinal) => void;
}

class FinalNavItem extends React.Component<IFinalNavItemProps> {

  constructor(props: IFinalNavItemProps) {
    super(props);
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
  }

  public handleNavLinkClick(): void {
    this.props.onFinalClick(this.props.final);
  }

  public render() {
    const {final} = this.props;

    return (
      <NavItem>
        <NavLink onClick={this.handleNavLinkClick} href="#">{final.descripcion}</NavLink>
      </NavItem>
    );
  }
}

export default FinalNavItem;
