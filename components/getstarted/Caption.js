import React from 'react'
import { View,Text, StyleSheet} from 'react-native'

const Caption = () => {
    return (
        <View style={styles.wrapper}> 
            <Text style={styles.heading}>COVERS</Text>
            <Text style={styles.subtitle1}>
                (COVID-19 EMERGENCY RESPONSE SOLUTION)
            </Text>
            <Text style={styles.subtitle2}>
                Join the effort by well-meaning Africans using technology to slow down and eventually
                halt the spread of COVID-19
            </Text>
        </View>
    )
}

export default Caption
const styles = StyleSheet.create({
    wrapper: {
        borderColor: "#fff",
        width: "100%",
        alignItems: "center",
        paddingBottom: 10,
        marginBottom: 50
    },
    heading: {
        fontWeight: "700",
        fontSize: 80,
        color: "#fff",
    },
    subtitle1: {
        color: "#fff",
        paddingVertical: 5,
        fontWeight: "700"
    },
    subtitle2: {
        color: "#fff",
        textAlign: "center",
        fontSize: 13
    }
})

