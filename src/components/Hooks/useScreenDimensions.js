import * as React from 'react';
import {Dimensions} from 'react-native';
const useScreenDimensions = type => {
  const [screenData, setScreenData] = React.useState(Dimensions.get(type));

  React.useEffect(() => {
    const onChange = result => {
      setScreenData(result[type]);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};
export default useScreenDimensions;
