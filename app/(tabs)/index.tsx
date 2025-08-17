import { Image } from 'expo-image';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handleAction = (action: string) => {
    console.log(`${action} button pressed!`);
    // TODO: connect with Firebase / Arduino functions later
  };

  return (
    <ImageBackground
      source={require('@/assets/images/crab.jpeg')} // crab image here
      style={styles.background}
      resizeMode="cover"
    >
      {/* --- Overlay --- */}
      <View style={styles.overlay} />

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>

        {/* --- Buttons Section --- */}
        <ThemedView style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#3b82f6aa' : '#3b82f6' },
            ]}
            onPress={() => handleAction('Feed Now')}>
            <Text style={styles.buttonText}>Feed Now</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#10b981aa' : '#10b981' },
            ]}
            onPress={() => handleAction('Change Water')}>
            <Text style={styles.buttonText}>Change Water</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#f59e0baa' : '#f59e0b' },
            ]}
            onPress={() => handleAction('Set Schedule Feed')}>
            <Text style={styles.buttonText}>Set Schedule Feed</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#8b5cf6aa' : '#8b5cf6' },
            ]}
            onPress={() => handleAction('Set Schedule Change Water')}>
            <Text style={styles.buttonText}>Set Schedule Change Water</Text>
          </Pressable>
        </ThemedView>
        {/* --- End Buttons --- */}

      </ParallaxScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // dark overlay with 30% opacity
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
