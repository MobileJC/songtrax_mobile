// Import modules
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import css
import { colors, styles } from '../data/styles';

export function changeButton({ buttonText, onPress }) {
    return (
        <TouchableOpacity
                onPress={onPress}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{x: 1, y: 1}}
                    // colors={colors}
                    style={styles.changePhoto}
                >
                    <Text>
                        {buttonText}
                    </Text>
                </LinearGradient>
        </TouchableOpacity>

    );
}

export function addButton({ buttonText, onPress }) {
    return (
        <TouchableOpacity
                onPress={onPress}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{x: 1, y: 1}}
                    // colors={colors}
                    style={styles.addPhoto}
                >
                    <Text>
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
    );
}