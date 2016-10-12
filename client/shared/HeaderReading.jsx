
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

HeaderReading = React.createClass({

	propTypes: {
		showSearchModal: React.PropTypes.func,
		work: React.PropTypes.object,
		location: React.PropTypes.array.isRequired,
		toggleSidePanel: React.PropTypes.func.isRequired,
		toggleCommentary: React.PropTypes.bool.isRequired,
		toggleDefinitions: React.PropTypes.bool.isRequired,
		toggleTranslations: React.PropTypes.bool.isRequired,
		toggleScansion: React.PropTypes.bool.isRequired,
		toggleMedia: React.PropTypes.bool.isRequired,
		toggleEntities: React.PropTypes.bool.isRequired,
		toggleAnnotations: React.PropTypes.bool.isRequired,
	},

	getDefaultProps() {
		return {
			toggleDefinitions: false,
			toggleCommentary: false,
			toggleTranslations: false,
		};
	},

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	},

	toggleSidePanel(metadata) {
		if (typeof this.props.toggleSidePanel === 'function') {
			this.props.toggleSidePanel(metadata);
		}
	},

	render() {
		const styles = {
			flatButton: {
				width: 'auto',
				minWidth: 'none',
				height: '55px',
				padding: '10px 5px',
			},
			flatIconButton: {
				padding: '10px 20px',
				width: 'auto',
				minWidth: 'none',
				height: '55px',

			},

		};

		const work = this.props.work;
		const location = this.props.location;

		return (
			<header className="header-nav paper-shadow">
				<div className="navigation-primary">
					<div className="container close-navbar">

						<div className="navbar-header">
							<FlatButton
								className="left-drawer-toggle"
								style={styles.flatIconButton}
								icon={<FontIcon className="mdi mdi-menu" />}
							/>

							{work && location ?
								<div className="reading-location">
									<a
										className="reading-location-param reading-location-param--author"
										href="#author"
									>
										{work.authors.map((author, i) => (
											<span key={i} >
												{author.english_name}
											</span>
										))}
									</a>

									<a
										className="reading-location-param reading-location-param--work"
										href="#title"
									>
										{work.english_title}
									</a>

									<a
										className="reading-location-param reading-location-param--book-line"
										href="#textN"
									>
										{location.map((textN, i) => (
											<span key={i} >
												{textN}
											</span>
										))}
									</a>

								</div>
								:
								''
							}

						</div>

						<div className="navbar-collapse collapse module-group right">

							<div className="module left">
								<ul className="menu ">
									<li
										className={(this.props.toggleDefinitions) ? 'checked meta-toggle' :
										'meta-toggle'}
									>

										<FlatButton
											style={styles.flatButton}
											label="Definitions"
											onClick={this.toggleSidePanel.bind(this, 'definitions')}
										/>
									</li>

									<li
										className={(this.props.toggleCommentary) ? 'checked meta-toggle' :
										'meta-toggle'}
									>
										<FlatButton
											style={styles.flatButton}
											label="Commentary"
											onClick={this.toggleSidePanel.bind(this, 'commentary')}
										/>
									</li>

									<li
										className={(this.props.toggleTranslations) ? 'checked meta-toggle' :
										'meta-toggle'}
									>
										<FlatButton
											style={styles.flatButton}
											label="Translations"
											onClick={this.toggleSidePanel.bind(this, 'translations')}
										/>
									</li>

									<li
										className={(this.props.toggleEntities) ? 'checked meta-toggle' :
										'meta-toggle'}
									>
										<FlatButton
											style={styles.flatButton}
											label="Entities"
											onClick={this.toggleSidePanel.bind(this, 'entities')}
										/>
									</li>

									{work.genre === 'poetry' ? <li
										className={(this.props.toggleScansion) ? 'checked meta-toggle' :
										'meta-toggle'}
									>
										<FlatButton
											style={styles.flatButton}
											label="Scansion"
											onClick={this.toggleSidePanel.bind(this, 'scansion')}
										/>
									</li>
									: ''}

									<li
										className={(this.props.toggleMedia) ? 'checked meta-toggle' : 'meta-toggle'}
									>
										<FlatButton
											style={styles.flatButton}
											label="Media"
											onClick={this.toggleSidePanel.bind(this, 'media')}
										/>
									</li>
									{/* <li
										className={'meta-toggle'}
									>
										<FlatButton
											style={styles.flatButton}
											label=""
											onClick={this.toggleSidePanel.bind(this, 'show-more')}
											icon={<span className="mdi mdi-dots-horizontal" />}
										/>
									</li> */}

								</ul>

							</div>

							{this.props.showSearchModal ?
								<div className="module search-module widget-handle left">
									<ul className="menu icon-menu">
										<li>
											<FlatButton
												style={styles.flatIconButton}
												href="#"
												onClick={this.props.showSearchModal}
												icon={<FontIcon className="mdi mdi-magnify" />}
											/>
										</li>
									</ul>
								</div>
							: ''}


						</div>{/* <!-- .module-group.right -->*/}
					</div>{/* <!-- .container.close-navbar -->*/}
				</div>{/* <!-- .navigation-primary-->*/}
			</header>

		);
	},
});

HeaderReading.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
