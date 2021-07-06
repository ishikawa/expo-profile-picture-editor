import { registerRootComponent } from 'expo';

// It’s recommended to use the index.js file (in the root of your project) to register the root component,
// it avoids some additional complications finding the entry point of your app.
import App from './app/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
