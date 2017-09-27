import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import { FooterTab, Text, Button, Thumbnail } from 'native-base';

export default class Menus extends Component {

  render() {
    return (
      <FooterTab style={styles.FooterTab}>
        <Button vertical style={styles.Button}>
          <Thumbnail
            square
            source={require('../img/gopay.png')}
            style={{width:46, height:10}}
          />
          <Text note style={[styles.title,{marginTop:7}]}>Rp 0</Text>
        </Button>
        <Button vertical style={styles.Button}>
          <Thumbnail
            square
            source={require('../img/saldo.png')}
            style={{width:17, height:17}}
          />
          <Text note style={styles.title}>ISI SALDO</Text>
        </Button>
        <Button vertical style={styles.Button}>
          <Thumbnail
            square
            source={require('../img/accept.png')}
            style={{width:17, height:17}}
          />
          <Text note style={styles.title}>TERIMA</Text>
        </Button>
        <Button vertical>
          <Thumbnail
            square
            source={require('../img/gopoints.png')}
            style={{width:60, height:10}}
          />
          <Text note style={[styles.title,{marginTop:7}]}>0 pt</Text>
        </Button>
      </FooterTab>
    );
  }
}

const styles = StyleSheet.create ({
  FooterTab:{
    backgroundColor:'#FFFFFF',
    paddingTop:20,
    height:40
  },
  Button:{
    borderRightWidth:1,
    borderColor:'#e0e0e0',
    borderRadius:0
  },
  title:{
    fontSize:9,
    fontWeight:'bold',
    color:'gray',
    fontFamily:'roboto'
  }
});
