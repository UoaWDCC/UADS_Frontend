import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../theme"
import { NativeBaseProvider, Box, Button} from "native-base"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const SponsorsScreen = observer(function LoginScreen() {
  const navigation = useNavigation()

  return (
    <Screen style={ROOT} preset="scroll">
      <NativeBaseProvider>
        <Box  flex ={1} alignItems="center" justifyContent="center">
          <Button
            onPress={() => { navigation.navigate("about")}}
          >
            to about
          </Button>
        </Box>
      </NativeBaseProvider>
    </Screen>
  )
})