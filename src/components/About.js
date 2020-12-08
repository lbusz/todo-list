import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Caption, withTheme } from 'react-native-paper';

const About = ({ theme }) => {
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
            <Text>To-Do List App</Text>
            <Caption>Made for GSQuad</Caption>
            <Caption>© {new Date().getFullYear()}</Caption>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    divider: {
        alignSelf: 'stretch',
        marginVertical: 20
    },
    link: {
        color: '#0366d6'
    },
    creditsContainer: {
        flexDirection: 'row',
        marginTop: 2
    },
    dribble: {
        height: 18,
        marginLeft: 2
    }
})

export default withTheme(About);