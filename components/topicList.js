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
		console.log("rendering list entry" + rowData);
		return (
			<TouchableHighlight underlayColor='#ddd'>
				<View>
					<Text style={styles.jobTitle}>{rowData.title}</Text>
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
	jobTitle:{
		fontSize:10
	}
});

module.exports = TopicList;
