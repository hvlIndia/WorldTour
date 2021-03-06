import React from "react";
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from "react-vr";

const places = [
  {
    title: "Starry Sky",
    image: "starry-sky.jpg"
  },
  {
    title: "Island Garden",
    image: "island-garden.jpg"
  },
  {
    title: "Light Show",
    image: "light-show.jpg"
  },
  {
    title: "Louvre Vr",
    image: "louvre-vr.jpg"
  }
];

export default class WorldTour extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      place: 'drawn-vr.jpg'
    };
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    return (
      <View>
        <Pano source={asset(this.state.place)} />
        <View style={styles.menuButton} onEnter={() => this.toggleMenu()}>
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? "Close Menu" : "Open Menu"}
          </Text>
        </View>
        {this.state.showMenu ? (
          <View style= {styles.menu}>
            {places.map((place, index) => {
              return (
                <View 
                style = {styles.menuItem}
                 key={index} 
                 onEnter= {() => this.setState({place: place.image})}
                 >
                  <Text style = { styles.menuItemText}> {place.title} </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View></View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 5,
    height: 1.25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-around",
    transform: [{ translate: [-2, 0, -7.5] }]
  },

  menuButton: {
    backgroundColor: "#fff",
    borderRadius: 0.25,
    width: 0.5,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.01,
    transform: [{ translate: [-2, 0, -5] }]
  },
  menuButtonText: {
    textAlign: "center",
    fontSize: 0.15,
    color: "#000",
  },
  menuItem: {
    backgroundColor: "#fff",
    borderRadius: 0.5,
    width: 1,
    height: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.02,
  },
  menuItemText: {
    textAlign: "center",
    fontSize: 0.2,
    color: "#000"
  }
});

AppRegistry.registerComponent("WorldTour", () => WorldTour);


