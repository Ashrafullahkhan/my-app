import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useGetMortyQuery } from '../store/api/mortyApi';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const { isLoading, data, isFetching } = useGetMortyQuery();
  const onNavigate = (data) => {
    console.log('data', data);
    navigation.navigate('Details', { paramKey: data });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {data?.results.map((row) => (
          <TouchableOpacity key={row.id} onPress={() => onNavigate(row)}>
            <View style={styles.mainBlock}>
              <Image
                source={{
                  uri: row.image,
                }}
                style={styles.image}
              />
              <View style={styles.details}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  {row.name}
                </Text>
                <Text style={{ color: 'white' }}>Dead - {row.species}</Text>
                <Text style={{ marginTop: 20, color: 'gray' }}>
                  Last Known Location:
                </Text>
                <Text style={{ color: 'white' }}>{row.location.name}</Text>
                <Text
                  style={{ marginTop: 20, marginBottom: 20, color: 'gray' }}
                >
                  First Seen In:
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    borderRadius: 10,
  },
  details: {
    marginLeft: 20,
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    height: 200,
  },
});
