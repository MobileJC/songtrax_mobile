// Import modules
import React, { useState, useEffect } from "react";
import { PermissionsAndroid, Appearance, View, SafeAreaView, Text, Image } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { getDistance } from "geolib";

// Import data/css
import { getAllLocations, getLocationById } from "../data/api";
import { colors, styles } from "../data/styles";

const colorScheme = Appearance.getColorScheme();

function NearbyLocation(props) {
    if(typeof props.getAllLocations != "undefined") {
        return (
            <SafeAreaView>
                <View>
                    <Text>
                        {props.getAllLocations}
                    </Text>
                    {}
                </View>
            </SafeAreaView>
        );
    }
}