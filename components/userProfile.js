'use strict';

var React = require("react-native");

var {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
	ListView,
	Component
} = React;

var UserProfile = React.createClass({
	render:function(){
		return (
			<View style={styles.container}>
				<View style={styles.avatorContainer}>
					<Image style={styles.avator} source={require('../img/user-male.png')}></Image>
					<Text style={styles.name}>王尼玛</Text>
				</View>
				<View style={styles.section}>
					<TouchableHighlight underlayColor='#ddd' style={styles.action}>
						<View style={styles.actionEntry}>
							<Text style={styles.actionText}>Location</Text>
							<Text>></Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='#ddd' style={styles.action}>
						<View style={styles.actionEntry}>
							<Text style={styles.actionText}>Entertainment</Text>
							<Text>></Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='#ddd' style={styles.action}>
						<View style={styles.actionEntry}>
							<Text style={styles.actionText}>Message</Text>
							<Text>></Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:60
	},
	avatorContainer:{
		height:150,
		backgroundColor:'#eee',
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
	},
	avator:{
		width:50,
		height:50
	},
	name:{
		fontSize:12,
		color:'#999',
		marginTop:3,
		width:100,
		textAlign:'center'
	},
	section:{
		marginTop:10,
		backgroundColor:'#eee'
	},
	action:{
		padding:8,
		borderBottomWidth:1,
		borderColor:'#ccc',
		height:40
	},
	actionEntry:{
		marginTop:5,
		flexDirection:'row',
		justifyContent:"space-between"	
	}
})

module.exports = UserProfile;