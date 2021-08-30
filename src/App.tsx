import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/main.navigation';

// const Section: React.FC<{
//   title: string;
// }> = ({children, title}) => {
//   return <View></View>;
// };

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
