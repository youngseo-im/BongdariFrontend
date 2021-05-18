import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { CommonButton } from '../../assets/globalStyles';
import { useNavigation } from '@react-navigation/core';

const MemberTerms = ({ route }) => {
  // const { navigate } = useNavigation();
  // const onPress = ({ type }) => {
  //   navigate(type);
  // };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />
      <View style={styles.viewContainer}>
        <Text style={styles.comment}>추가 동의가 필요합니다.</Text>
        <Text style={styles.description}>
          &#183; 전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
          개별적으로도 동의를 선택할 수 있습니다.
        </Text>
        <Text style={styles.description}>
          &#183; 선택항목에 대한 동의를 거부하는 경우에도 서비스 이용이
          가능합니다.
        </Text>
        <CommonButton onPress={() => true} title="약관에 모두 동의" />
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;필수&#41; 서비스 이용 약관
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;필수&#41; 위치 정보 이용 동의
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;필수&#41; 만 14세 이상입니다
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <View style={styles.checkListBox}>
          <Text style={styles.checkListItem}>
            &#40;선택&#41; 마케팅 정보 메일, SMS 수신동의
          </Text>
          <CheckBox style={styles.checkbox} />
        </View>
        <CommonButton title="완료" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87a9b8',
  },
  topCircle: {
    position: 'absolute',
    top: '13%',
    right: '20%',
    width: 25,
    height: 25,
    backgroundColor: '#d9e1e2',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 6,
  },
  bottomCircle: {
    position: 'absolute',
    bottom: '11%',
    left: '-2%',
    width: 44,
    height: 44,
    backgroundColor: '#2de2ac',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 4,
  },
  viewContainer: {
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  comment: {
    width: 220,
    color: '#6c6c6c',
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#c4c4c4',
  },
  description: {
    marginTop: 10,
    color: '#696969',
    fontSize: 12,
  },
  checkListBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkListItem: {
    marginTop: 10,
    color: '#898989',
    textDecorationLine: 'underline',
  },
  checkbox: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default MemberTerms;
