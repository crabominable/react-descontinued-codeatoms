import React from 'react';

class CadastreForm extends React.Component {
  render() {
		return(
			<form>
				<fieldset className="fieldset">
					<div className="input-div">
						<label /><p className="email">Email</p><input id="text-input" className="form-control" type="email" placeholder="Seu email:"/>
					</div>
					<div className="input-div2">
						<label /><p className="password">Senha</p><input id="text-input2" className="form-control" type="password" placeholder="Sua senha:"/>
					</div>
					<div className="submit-div">
						<div className="button-div">
							<label>
								<input class="btn btn-primary entry-button" type="button" value="Entrar"/>
							</label>
						</div>
						<div className="checkbox-div">
							<label >
								<input className="checkbox-input" type="checkbox"></input>
								Lembre-se de mim.
							</label>
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default CadastreForm;