import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 40,
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
  difficultyButton: {
    padding: 15,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
  },
  timer: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
    color: 'lemonchiffon',
    fontWeight: '600',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lemonchiffon',
    padding: 15,
    marginVertical: 20,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
  },
  message: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    color: 'lemonchiffon',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: '#c8f4ff',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: 'pink',
    textShadowColor: 'white',
    textShadowRadius: 2,
    fontSize: 20,
    fontWeight: 'bold',
  }
});