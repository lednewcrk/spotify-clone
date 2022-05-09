import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './App.stack';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
