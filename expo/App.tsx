import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

type Building = {
  id: string;
  address: string;
  floors: number | null;
  elevators: number | null;
};

function describe(b: Building): string {
  const floors = b.floors ?? 'unknown';
  const elevators = b.elevators ?? 'unknown';

  return `${b.address}: ${floors} floors, elevators ${elevators}`;
}

const building: Building = {
  id: 'b-17',
  address: 'Str. Lipscani 12',
  floors: 4,
  elevators: null,
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rebeca Alexandra</Text>
      <Text>Hello from Expo on {Platform.OS}</Text>
      <Text style={styles.description}>{describe(building)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
  },
});