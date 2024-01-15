import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet'
import {useRef, useMemo } from 'react'


export default function App() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['35%', '60%'], []);

  const handleSheetClose = () => {
    bottomSheetRef.current?.close()
  }
  const handleSheetOpen = () => {
    bottomSheetRef.current?.expand()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Button title="Open" onPress={() => {handleSheetOpen}} />
      

      <View style={styles.container}>
        <BottomSheet 
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{backgroundColor: "#FFF"}}
          enablePanDownToClose={true}
        >
          <View style={styles.contentContainer}>
            <Text>Hello World</Text>
            <Button title="Close" onPress={() => {handleSheetClose}} />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
