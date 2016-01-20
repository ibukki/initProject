'use strict';

var React = require('react-native');

var mainPage = require('./mainPage');

var {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
	Component
} = React;

var StartPage = React.createClass({
	getInitialState: function() {
	return {
			name: ""
		};
	},
	render: function() {
		return (
			<View style={styles.container}>

				<Text style={styles.description} >Input your name</Text>

				<View style={styles.inputForm}>
					<TextInput style={styles.nameInput} value={this.state.name} placeholder='input your name'></TextInput>
					<TouchableHighlight onPress={this._onVisitPress} style={styles.btn}
						underlayColor='#99d9f4'>
						<Text style={styles.btnTxt}>GO</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	},
	_onVisitPress: function() {
		this.props.navigator.push({
			title: 'Main',
			component: mainPage
		});
	}
});

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'left',
		color: '#656565'
	},
	nameInput: {
		flex: 4,
		borderColor: '#ccc',
		height: 36,
		borderRadius: 3,
		borderWidth: 1,
		paddingLeft: 3
	},
	container: {
		padding: 30,
		marginTop: 65
	},

	inputForm: {
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginTop: 10
	},
	btn: {
		marginLeft: 5,
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	btnTxt: {
		fontSize: 18,
		color: '#f2f2f2',
		alignSelf: 'center'
	}
});

module.exports = StartPage;