import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {Text} from '../Text';
import styles from './styles';
import StandardMButton from '../StandardButton';

interface InfoModalProp {
  modal: boolean;
  title: string;
  style?: ViewStyle;
  action?: () => void;
}
const InfoModal: FC<InfoModalProp> = ({modal, title, style, action}) => {
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={modal}
      swipeDirection="down"
      propagateSwipe={true}
      backdropOpacity={1}
      backdropColor="transparent"
      style={{margin: 0, justifyContent: 'flex-end'}}
      deviceHeight={900}>
      <View style={[styles.mainBlock, style]}>
        <Text style={[styles.title]}>{title}</Text>
        {action && (
          <StandardMButton
            title="Зареєструватись"
            size="big"
            onPress={action}
          />
        )}
      </View>
    </Modal>
  );
};

export default InfoModal;
