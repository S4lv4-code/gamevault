import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Bienvenido a mi App!</Text>
      <Link href="/detalles">Ir a detalles</Link> 
    </View>
  );
}