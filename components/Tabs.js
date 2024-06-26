// Import modules
import React from "react";
import { SafeAreaView, View, Text, Image, Appearance } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from "react-native-linear-gradient";

// Import screen
import Profile from "../screens/Profile";
import MAL from "../screens/MAL";
import Map from "../screens/Map";

// Import data/css
import icons from '../data/icons';
import { colors, styles } from '../data/styles';

const mode = Appearance.getColorScheme();

/**
 * Define properties/options of tab bar icons
 * @param {string} icon - variable name referring to a png or jpeg file.
 * @returns a tab icon and its properties
 */
function TabIcon({focused, icon}) {

    return (
        <View
        style={{
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            width: 50,
        }}
        >
            <Image 
                source={icon}
                resizeMode= "contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? colors.whiteColor : colors.whiteColorTranslucent,
                }}
            />
        </View>
    );
}

const Tab = createBottomTabNavigator();

/**
 * Define properties/options of Tab.Screen
 * @param {string} icon - variable name of icon
 * @returns properties of Tab.Screen tag.
 */
function tabOptions(icon) {
    return {
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icon} />,
        tabBarBackground: () => (
          <LinearGradient
            colors={[
              colors.purpleColorLighter,
              colors.blueColorDarker
            ]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
        tabBarActiveTintColor: colors.blueColorDarker,
        tabBarInactiveTintColor: colors.blueColorLighter,
        headerTintColor: colors.whiteColor,
        headerTitleAlign: "center",
    };
}

function Tabs() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: 
                    {
                        height: 55,
                    },
                headerTitleAlign: 'center',
                tabBarActiveTintColor: colors[mode].bgColor,
            }}
        >
            <Tab.Screen
                name="Map"
                component={Map}
                options={() => tabOptions(icons.mapW)}
            />
            <Tab.Screen
                name="MAL"
                component={MAL}
                options={() => tabOptions(icons.logoW)}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={() => tabOptions(icons.profileW)}
            />

            
        </Tab.Navigator>
    );
}

export default Tabs;