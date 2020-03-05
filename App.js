import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';

export default class App extends Component {

  componentWillMount = () => {
    this.boxsize = new Animated.Value(15);
    this.smallboxsize = new Animated.Value(15);
    this.addBox = Animated.add(this.boxsize, this.smallboxsize);
  }

  change = () => {
    var a = Animated.timing(this.boxsize,
      {
        toValue: 80,
        duration: 3000
      })
    var b = Animated.timing(this.smallboxsize,
      {
        toValue: 80,
        duration: 3000
      })
    var c = Animated.sequence([a, b])
    Animated.loop(c,
      {
        iterations: 3,
      }
    ).start()
  }

  render() {
    const AnimatBox = { height: this.boxsize, width: this.boxsize };
    const AnimateSmallBox = { height: this.smallboxsize, width: this.smallboxsize }
    const AnimateBigBox = { height: this.addBox, width: this.addBox };
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Applicating Animations</Text>
        </View>
        <View style={styles.screen}>
          <Animated.View style={[styles.smallbox, AnimateSmallBox]} />
          <Text style={styles.symbol}>+</Text>
          <Animated.View style={[styles.box, AnimatBox]} />
          <Text style={styles.symbol}>=</Text>
          <Animated.View style={[styles.bigbox, AnimateBigBox]} />
          <TouchableOpacity style={styles.button} onPress={this.change.bind(this)}>
            <Text style={styles.buttonText}>CLICK</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
    },
    appHeader: {
      height: '8.5%',
      alignItems: 'center',
      backgroundColor: '#e15f41',
    },
    headerText: {
      marginTop: '4.25%',
      fontWeight: 'bold',
      fontSize: 21,
      color: 'snow'
    },
    button:
    {
      height: 43,
      width: 110,
      backgroundColor: '#e15f41',
      alignItems: 'center',
      margin: '10%',
    },
    buttonText:
    {
      marginTop: '3.8%',
      fontSize: 24,
      color: 'snow',
    },
    smallbox:
    {
      marginTop: '35%',
      height: 100,
      width: 100,
      borderWidth: 0.2,
      borderColor: 'black',
      margin: 2,
      backgroundColor: '#0f0'
    },
    box:
    {
      height: 150,
      width: 150,
      borderWidth: 0.2,
      borderColor: 'black',
      margin: 2,
      backgroundColor: '#0f0'
    },
    bigbox:
    {
      borderWidth: 0.2,
      borderColor: 'black',
      margin: 2,
      backgroundColor: '#e15f41'
    },
    symbol:
    {
      fontSize: 30,
      fontWeight: '600'
    },
    screen: {
      alignItems: 'center',
    }
  }
)