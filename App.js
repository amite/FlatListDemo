import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"

export default class App extends React.Component {
  state = {
    profiles: [],
    loading: false
  }

  componentDidMount = async () => {
    const url = `https://randomuser.me/api?results=60`
    this.setState({ loading: true })

    const res = await fetch(url)
    const profiles = await res.json()

    this.setState({
      profiles: profiles.results,
      loading: false
    })
  }

  render() {
    const { profiles } = this.state
    return (
      <ScrollView style={styles.container}>
        {profiles.map(({ name: { first, last }, login: { username } }) => {
          return (
            <Text key={username} style={styles.item}>
              {first} {last}
            </Text>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    paddingTop: 50,
    padding: 30
  },
  item: {
    marginBottom: 10
  }
})
