import React, { Component } from 'react'
import { Text, View, Alert, Modal, Button, StyleSheet, TextInput,KeyboardAvoidingView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class Calander extends Component {


    constructor(props){
        super(props);
        this.state={
            list:[{
                date:String,
                todos:[String]
            }],
            viewModal:false,
            selectedDate:String,
            tempTodo:String
        }
    }

    modalInputTextChanged = (text) =>{
        this.setState({
            tempTodo:text
        })
    }

    getIndexOfMatchDate = () =>{


        let tempData=this.state.selectedDate;
        let tempList = this.state.list;
        let temp=-1;

        for(var i=0;i<tempList.length;i++){
            if(tempList[i].date==tempData){
                temp= i;
                break;
            }
        }
        return temp;
    }

    addToList = () =>{


        
        let date=this.state.selectedDate;
        let temptodos=this.state.tempTodo;
        

        let tempList = this.state.list;
        let index = -1;

        console.log(tempList.length)
        
        if(tempList.length>1){  
            for(var i=0;i<tempList.length;i++){
                if(tempList[i].date==date){

                    tempList[i].todos.push(temptodos);
                    index=i;
                    break;
                }
            }
        }
        
        if(index==-1){
            let todos=[];
            todos.push(temptodos);
            tempList.push({date,todos})
            
        }


        this.setState({
            list:tempList,
            tempTodo:''
        })
    }

    render() {
        return (
            <View style={{marginTop:20}}>
                    <CalendarList 
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={0}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    
                    theme={{
                        backgroundColor: '#bcffcc',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#1391f2',
                        selectedDayBackgroundColor: '#eaaa3a',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        dayBackgroundColor:'#b6c1cd',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#000',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: '#efaf0b',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                      }}
                    
                    onDayPress={(day) => { 
                        this.setState({viewModal:true,selectedDate:day.dateString})}}
                    />

                <Modal  transparent={true}
                        visible={this.state.viewModal}
                        onRequestClose={()=>{console.warn("this is a close request")}}>
                        <KeyboardAvoidingView style={styles.mainModal} behavior="padding" enabled>
                            <View style={styles.modal}>
                                <Text style={{fontSize:25,marginTop:15}}>{this.state.selectedDate}</Text>
                                <Text>{"\n"}</Text>
                                
                                {this.getIndexOfMatchDate()>-1? <ListShower list={this.state.list[this.getIndexOfMatchDate()].todos}/> : <View>{console.log(this.getIndexOfMatchDate)}</View>}
                                <Text>{"\n"}</Text>
                                <TextInput
                                    style={{height: 40,fontFamily:'bold',fontSize:18}}
                                    value={this.state.tempTodo}
                                    placeholder="Type here to add"
                                    onChangeText={(text) => this.modalInputTextChanged(text)}
                                    />
                                    <Text>{"\n"}</Text>

                                <View style={styles.modalButtons}>
                                    <Button 
                                        style={styles.buttons}
                                        type="solid Button"
                                        onPress={this.addToList} 
                                        title="Add"
                                        />
                                    <Button 
                                        style={styles.buttons}
                                        type="solid Button"
                                        onPress={()=>{        this.setState({viewModal:false})}} 
                                        title="Cancel"
                                        />
                                        
                                       
                                    
                                </View>
                                
                            </View>
                        </KeyboardAvoidingView>
                </Modal>
            </View>
        )
    }
}

const ListShower = (props) =>{
    return(
        <View>
        {props.list.map((ele)=>
            <Text style={styles.listText}>{ele}</Text>
        )}    
        </View>
    );
}

var styles= StyleSheet.create({
    modal:{
        backgroundColor:"#aaa",
        width:300,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    closeText:{
        backgroundColor:'#333',
        color:'#fff',
        padding:5,
        margin:2
    },
    listText:{
        color:'#fff'
    },
    modalButtons:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        margin:15
    },
    buttons:{
        margin:15
    },
    mainModal:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
    }

})
