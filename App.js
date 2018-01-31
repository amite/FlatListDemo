import React from "react"
import { StyleSheet, Text, View } from "react-native"

const profileNames = [
  {
    name: "poonam"
  },
  {
    name: "munna"
  },
  {
    name: "owais"
  }
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {profileNames.map(({ name }) => {
          return <Text key={name}>{name}</Text>
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
