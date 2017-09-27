import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, Left, Body, Right, Icon, Content, Button, Card, CardItem, Text, Form, Item, Label, Input, List, ListItem } from 'native-base';

export default class Home extends Component {

  static navigatorStyle = {
    navBarHidden:true
  };

  handleClickBack(){
    this.props.navigator.push({
      screen: 'screen.Home',
      animationType: 'fade'
    });
  };

  location = [
    {
      icon:require('../img/pickup-location.png')
    },
    {
      icon:require('../img/distance.png')
    },
    {
      icon:require('../img/your-destination.png')
    }
  ];

  renderLocation(object,index){
    return(
      <View key={index}>
          <Image style={{ width:18, height:18 }}
            source={object.icon}/>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#000000'}}>
          <Left>
            <Button transparent onPress={()=>this.handleClickBack()}>
              <Icon name='arrow-back' style={{color:'#FFFFFF'}}/>
            </Button>
          </Left>
          <Body>
            <Image
              style={styles.header}
              source={require('../img/header2.png')}/>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Card style={{marginTop:2}}>
            <CardItem>
              <Left>
                <View style={{flexDirection:'column',marginLeft:-3}}>
                  {this.location.map((point,index)=>this.renderLocation(point,index))}
                </View>
              </Left>
              <Body
                style={{
                  margin:-20,
                }}>
                <View style={styles.inputLocation}>
                  <Item>
                    <Input placeholder='Lokasi jemput' style={[styles.input,{marginBottom:-8, marginTop:4.5}]}/>
                    <Image style={[styles.edit,{marginTop:13}]} source={require('../img/add-note.png')}/>
                  </Item>
                  <View style={{flexDirection:'row'}}>
                    <Input placeholder='Tujuan anda' style={[styles.input,{marginTop:-8}]}/>
                    <Image style={[styles.edit,{marginTop:7}]} source={require('../img/add-note.png')}/>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{marginTop:320}}>
            <CardItem>
              <View style={{flexDirection:'column', alignItems:'center', paddingLeft:10}}>
                <Text style={{fontSize:12, fontFamily:'roboto', color:'gray', marginBottom:10}}>GO-RIDE</Text>
                <Image style={styles.tab} source={require('../img/goRideButton.png')}/>
              </View>
              <View style={{flexDirection:'column', alignItems:'center', paddingLeft:10}}>
                <Text style={{fontSize:12, fontFamily:'roboto', color:'gray', marginBottom:10}}>GO-CAR</Text>
                <Image style={styles.tab} source={require('../img/goCarButton.png')}/>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = {
  header : {
    width: 110,
    height: 60,
    paddingTop:-8,
    marginLeft:-100,
    resizeMode: "contain"
  },
  content: {
    flex:1,
    alignItems:'center',
    width:322,
    height:504
  },
  input: {
    fontSize:10,
    fontFamily:'verdana',
  },
  edit: {
    width:18,
    height:18,
  },
  inputLocation: {
    alignItems:'center',
    marginLeft:-115,
    width:260
  },
  tab: {
    width:50,
    height:50
  }
}