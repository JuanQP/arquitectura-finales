import * as React from 'react';
import { IFinal } from '../models/IFinal';
import AppFinalSeleccionadoView from './AppFinalSeleccionadoView';
import NavbarFinales from './NavbarFinales';

interface IAppState {
	togglerOpened: boolean;
	finalSeleccionado: IFinal | null;
}

interface IAppProps {
	finales: IFinal[];
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.handleFinalClick = this.handleFinalClick.bind(this);
		this.handleTogglerClick = this.handleTogglerClick.bind(this);
		this.state = {
			finalSeleccionado: null,
			togglerOpened: false,
		};
	}

	public handleFinalClick(final: IFinal): void {
		this.setState({
			finalSeleccionado: final,
		});
	}

	public handleTogglerClick() : void {
		this.setState({
			togglerOpened: true,
		});
	}

	public render() {
		return (
			<div>
				<NavbarFinales
					finales={this.props.finales}
					togglerOpened={this.state.togglerOpened}
					onFinalClick={this.handleFinalClick}
					onTogglerClick={this.handleTogglerClick}
				/>
				<AppFinalSeleccionadoView final={this.state.finalSeleccionado}/>
			</div>
		);
	}
}

export default App;
