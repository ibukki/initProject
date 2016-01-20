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

var REQUEST_URL = "http://wx.sh-ruida.com/topiccenter/topic/list.json";

var TopicList = React.createClass({
	getInitialState: function(){
		return {
			dataSource: new ListView.DataSource({
	        rowHasChanged: (row1, row2) => row1 !== row2,
	      }),
	      loaded: false,
		}
	},

	componentDidMount: function(){
		this.fetchData();
	},

	fetchData: function(){
		console.log("start to fetch data");
		fetch(REQUEST_URL,{
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
		})
		.then((response) => response.json() )
		.then((responseBody) => {
			this.setState({
				dataSource:this.state.dataSource.cloneWithRows(responseBody.topicListDTO.topics),
				loaded:true
			})
		})
	},
	_renderRow:function(rowData, sectionId, rowId){
		var beginDate = rowData.beginDate;
		if(beginDate){
			beginDate = new Date(beginDate).toISOString().substring(0,10);
		}
		return (
			<TouchableHighlight underlayColor='#ddd'>
				<View style={styles.topicContainer}>
					<Text style={styles.title}>{rowData.title}</Text>
					<Text numberOfLines={1} style={styles.description}>{rowData.description}</Text>
					<View style={styles.authorAndDate}>
						<Text style={styles.sLabel}>Owner:</Text><Text style={styles.owner}>{rowData.owner}</Text>
						<Text style={styles.seperator}></Text>
						<Text style={styles.sLabel}>Date:</Text><Text style={styles.date}>{beginDate}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	},
	render:function(){
		console.log("rendering list");
		return (
			<ListView
		        dataSource={this.state.dataSource}
		        renderRow={this._renderRow}
		        style={styles.listView} />
		);
	}
});

var styles = StyleSheet.create({
	listView:{
		flex:1
	},
	topicContainer:{
		flexDirection:'column',
		padding:8,
		borderBottomWidth:1,
		borderColor:'#eee',
		height:64	
	},
	title:{
		fontSize:12
	},
	description:{
		color:'#666',
		marginTop:3,
		fontSize:10,
		overflow:'hidden'
	},
	authorAndDate:{
		marginTop:8,
		flexDirection:'row'
	},
	sLabel:{
		fontSize:10,
		color:'#666'
	},
	owner:{
		fontSize:10,
		color:'#666'
	},
	seperator:{
		width:10,
		borderLeftWidth:1,
		borderColor:'#666'
	},
	date:{
		fontSize:10,
		color:'#666'
	}
});

module.exports = TopicList;
