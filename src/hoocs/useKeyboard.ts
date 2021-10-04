import {useState, useEffect} from 'react';
import {Keyboard, Platform} from 'react-native';
import {onKeyboardActions} from '../types/shared';

function useKeyboardOffset(actions?: onKeyboardActions) {
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const _keyboardDidShow = (event: any) => {
      setKeyboardOffset(event.endCoordinates.height);
      actions?.onShow && actions?.onShow();
    };
    const _keyboardDidHide = () => {
      setKeyboardOffset(0);
      actions?.onHide && actions?.onHide();
    };

    if (Platform.OS === 'ios') {
      const keyboardWillShowSubscription = Keyboard.addListener(
        'keyboardWillShow',
        _keyboardDidShow,
      );
      const keyboardWillHideSubscription = Keyboard.addListener(
        'keyboardWillHide',
        _keyboardDidHide,
      );

      return () => {
        keyboardWillShowSubscription.remove();
        keyboardWillHideSubscription.remove();
      };
    } else {
      const keyboardDidShowSubscription = Keyboard.addListener(
        'keyboardDidShow',
        _keyboardDidShow,
      );
      const keyboardDidHideSubscription = Keyboard.addListener(
        'keyboardDidHide',
        _keyboardDidHide,
      );

      return () => {
        keyboardDidShowSubscription.remove();
        keyboardDidHideSubscription.remove();
      };
    }
  }, [actions]);

  return keyboardOffset;
}

export default useKeyboardOffset;
