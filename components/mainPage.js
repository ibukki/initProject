'use strict';

var React = require('react-native');
var topicList = require('./topicList')

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

var MainPage = React.createClass({
	getInitialState: function() {

		var newsData =  [
				{title:"A good start", author:'Ryan', publishDate:'2015/01/01', description:'refresh start'},
				{title:"The third world war", author:'Ryan', publishDate:'2015/01/12', description:'The third world way would happen in any time'}
		];

		return {newsData: newsData};
	},

	componentDidMount: function(){

	},
	render: function() {
		var newsContent = [];

		for(var i in this.state.newsData){
			var news = this.state.newsData[i];
			newsContent.push(<View style={styles.news}>
					<Text style={styles.newsTitle}>{news.title}</Text>
					<Text style={styles.newsText}>{news.author}</Text>
					</View>);
		}
		return (

			<View style={styles.container}>
				<View style={styles.topNavi}>
					<TouchableHighlight style={styles.tile} underlayColor='#99d9f4'>
						<View style={styles.tileContent}>
							<Image style={styles.image} source={require('../img/user-male.png')}></Image>
							<Text style={styles.caption}>Profile</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={styles.tile} underlayColor='#99d9f4'>
						<View style={styles.tileContent}>
							<Image style={styles.image} source={require('../img/location-pointer.png')}></Image>
							<Text style={styles.caption}>Location</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={styles.tile} onPress={this._showEntertainment} underlayColor='#99d9f4'>
						<View  style={styles.tileContent}>
							<Image style={styles.image} source={require('../img/microphone.png')}></Image>
							<Text style={styles.caption}>Entertainment</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight style={styles.tile} onPress={this._showEntertainment} underlayColor='#99d9f4'>
						<View  style={styles.tileContent}>
							<Image style={styles.image} source={require('../img/email-envelope.png')}></Image>
							<Text style={styles.caption}>Message</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.sectionHeader}>
					<Text style={styles.newsHeaderTitle}>Lastest News</Text>
					<TouchableHighlight style={styles.viewMore}>
						<Text>View More</Text>
					</TouchableHighlight>
				</View>
				{newsContent}
				<View style={styles.sectionHeader}>
					<Text style={styles.newsHeaderTitle}>Topics</Text>
					<TouchableHighlight style={styles.viewMore} onPress={this._onJobListPress}>
						<Text>View More</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	},
	_onJobListPress:function(){
		this.props.navigator.push({
			title: 'Topic List',
			component: topicList
		});
	},
	renderRow: function(rowData, sectionId, rowID){
		return (
			<TouchableHighlight underlayColor='#ddd' style={styles.newsWrapper}>
				<View style={styles.news}>
					<Text style={styles.newsTitle}>{rowData.title}</Text>
					<View style={styles.newsFooter}>
						<Text style={styles.newsText}>{rowData.author}</Text>
						<Text style={styles.newsText}>{rowData.publishDate}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	},
	_showEntertainment: function(){

	}
});

var styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		marginTop: 60
	},

	topNavi:{
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor:'#333',
		height:120
	},
	description: {
		fontSize: 14
	},

	tile:{
		flex:1,
		marginLeft:15
	},

	tileContent:{
		alignItems:'center',
		alignSelf:'stretch',
		flexDirection:'column'
	},
	caption:{
		fontSize:14,
		color:'#f2f2f2',
		marginTop:5
	},

	image:{
		width:48,
		height:48
	},
	sectionHeader:{
		height:30,
		flexDirection:'row',
		backgroundColor:'#eee',
		alignItems:'center',
		marginTop:5,
		justifyContent:"space-between"
	},
	newsHeaderTitle:{
		flex:3
	},
	viewMore:{
		width:80
	},
	news:{
		flexDirection:'row',
		height:40,
		borderColor:'#ccc',
		borderBottomWidth:1,
		justifyContent:"space-between",
		alignItems:'center'
	},
	newsTitle:{
		paddingLeft:3,
		flex:2
	},
	newsText:{
		flex:1
	}
});

module.exports = MainPage;