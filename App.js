import React from "react"
import { StyleSheet, Text, View } from "react-native"

const profileNames = ["munna", "poonam", "owais"]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {profileNames.map((profile, index) => {
          return <Text key={index}>{profile}</Text>
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
