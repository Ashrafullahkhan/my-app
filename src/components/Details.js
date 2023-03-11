import { StyleSheet, Text, View } from 'react-native';

export default function Details({ route }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 30, marginTop: 30 }}>
        More Details
      </Text>
      <Text style={{ marginTop: 20, fontSize: 20, color: 'gray' }}>ID</Text>
      <Text style={{ color: 'white' }}>{route.params.paramKey.id}</Text>
      <Text style={{ marginTop: 20, fontSize: 20, color: 'gray' }}>Gender</Text>
      <Text style={{ color: 'white' }}>{route.params.paramKey.gender}</Text>
      <Text style={{ marginTop: 20, fontSize: 20, color: 'gray' }}>Origin</Text>
      <Text style={{ color: 'white' }}>
        {route.params.paramKey.origin.name}
      </Text>
      <Text style={{ marginTop: 20, fontSize: 20, color: 'gray' }}>
        Location
      </Text>
      <Text style={{ color: 'white' }}>
        {route.params.paramKey.location.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    paddingLeft: 60,
    backgroundColor: '#282b34',
  },
  mainBlock: {
    width: '80%',
    marginBottom: 10,
    backgroundColor: '#3b3e45',
  },
  details: {
    marginLeft: 20,
  },
  tinyLogo: {
    width: '100%',
    height: 200,
  },
});
