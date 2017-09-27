import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Header, View, Button, Thumbnail, Text, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper'

import NavBar from './../components/navBar.js';
import Menus from './../components/menus.js';

export default class Home extends Component {

  static navigatorStyle = {
    navBarHidden:true
  };
  constructor(props) {
    super(props);
  }

  services = [
    {
      service:require('./../img/service/goRide.png'),
      screen:'screen.GoRidePage'
    },
    {
      service:require('./../img/service/goCar.png')
    },
    {
      service:require('./../img/service/goFood.png')
    },
    {
      service:require('./../img/service/goSend.png')
    },
    {
      service:require('./../img/service/goMart.png'),
    },
    {
      service:require('./../img/service/goBox.png')
    },
    {
      service:require('./../img/service/goMassage.png')
    },
    {
      service:require('./../img/service/goClean.png')
    },
    {
      service:require('./../img/service/goGlam.png'),
    },
    {
      service:require('./../img/service/goTix.png')
    },
    {
      service:require('./../img/service/goBusway.png')
    },
    {
      service:require('./../img/service/goPay.png')
    },
    {
      service:require('./../img/service/goMed.png')
    },
    {
      service:require('./../img/service/goAuto.png')
    },
    {
      service:require('./../img/service/goPulsa.png')
    }
  ];

  slider = [
    {
      slide:require('./../img/slider/slide1.jpg')
    },
    {
      slide:require('./../img/slider/slide2.jpg')
    },
    {
      slide:require('./../img/slider/slide3.jpg')
    },
    {
      slide:require('./../img/slider/slide4.jpg')
    }
  ];

  handleClickService(screen){
    this.props.navigator.push({
      screen: screen,
    });
  };

  renderSlider(object,index){
    return(
      <View
        style={[styles.slider,{backgroundColor: '#9DD6EB'}]}
        key={index}
      >
        <Image
          source={object.slide}
          style={styles.slide}
        />
      </View>
    )
  }

  renderService(object,index){
    return(
      <Button
        bordered
        light
        key={index}
        onPress={()=>this.handleClickService(object.screen)}
        style={{width:80, height:80, borderRadius:null}}
      >
          <Thumbnail
            square
            source={object.service}
            style={{width:75, height:75}}
          />
      </Button>
    )
  }

  render() {
    return (
      <Container>
        {/*HEADER*/}
        <Header hasTabs style={{backgroundColor:'#000000'}}>
          <Body>
            <Image
              style={styles.header}
              source={require('../img/benner-gojek.png')}
            />
          </Body>
        </Header>
        <Content>

          {/*Navigasi Bar from ./../components/navBar.js file */}
          <NavBar/>

          {/*Menu from ./../components/navBar.js file */}
          <Menus/>

          {/*SWIPER or SLIDER BENNER*/}
          <Swiper style={styles.wrapper} autoplay>
            {this.slider.map((slide,index)=>this.renderSlider(slide,index))}
          </Swiper>

          {/*LOOPING OPTION SERVICES*/}
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {this.services.map((service,index)=>this.renderService(service,index))}
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  header:{
    width:120,
    height:33,
    marginTop:-10
  },
  wrapper: {
    height:140
  },
  slider: {
    height:100,
    width:null,
    margin:10,
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide: {
    height:100,
    width:300,
  }
});
