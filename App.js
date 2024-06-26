// Import modules
import React, { useEffect, useState, createContext } from "react";
import { Appearance } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

// Import component
import Tabs from "./components/Tabs";

/**
 * Stores states, variables, functions globally and pass into other components.
 * @returns All variables stored in here must be defined in App component.
 */
export const GlobalContext = createContext(null);

function App() {

    // Declaring general variables
    const colorScheme = Appearance.getColorScheme();

    // Declaring API-related variables
    const sampleURL = 'https://comp2140.uqcloud.net/api/sample/';
    const locURL = 'https://comp2140.uqcloud.net/api/location/';
    const srURL = 'https://comp2140.uqcloud.net/api/samplerating/';
    const slURL = 'https://comp2140.uqcloud.net/api/sampletolocation/';
    const APIKEY = 'gdJY8BdnNf';
    const sampleURLAPI = `${sampleURL}?api_key=${APIKEY}`;
    const locURLAPI = `${locURL}?api_key=${APIKEY}`;
    const srURLAPI = `${srURL}?api_key=${APIKEY}`;
    const slURLAPI = `${slURL}?api_key=${APIKEY}`;

    // Declaring data related states
    const [locations, setLocations] = useState([]);

    // Fetching location data from API
    


    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

export default App;