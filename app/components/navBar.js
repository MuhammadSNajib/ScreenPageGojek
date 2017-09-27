import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import { FooterTab, Text, Button, Thumbnail } from 'native-base';


export default class NavBar extends Component {

  navBar = [
    {
        icon:require('../img/home.png'),
        label:'Beranda'
    },
    {
        icon:require('../img/clock.png'),
        label:'Pesanan'
    },
    {
        icon:require('../img/ask.png'),
        label:'Bantuan'
    },
    {
        icon:require('../img/profile.png'),
        label:'Akun Saya'
    }
  ];


  renderRow(object,index){
    return(
      <Button vertical key={index}>
        <Thumbnail
          square
          source={object.icon}
          style={styles.icon}
        />
        <Text style={styles.title}>{object.label}</Text>
      </Button>
    )
  }
  render() {
    return (
      <FooterTab style={{backgroundColor:'#000000'}}>
        {this.navBar.map((navigation,index)=>this.renderRow(navigation,index))}
      </FooterTab>
    );
  }
}

const styles = StyleSheet.create ({
  icon : {
    width:18,
    height:18
  },
  title : {
    fontSize:10,
    color:'#FFFFFF',
    fontFamily:'roboto',
    fontWeight:'bold'
  }
});
