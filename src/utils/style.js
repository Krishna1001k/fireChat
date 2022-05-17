import {StyleSheet} from "react-native"
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height"

const styles = StyleSheet.create({
    main:{
        paddingTop: getStatusBarHeight(),
    }

})

export default styles;