import { Appearance, Dimensions } from "react-native";

const colorScheme = Appearance.getColorScheme();
const { width, height } = Dimensions.get("window");
// const mode = colorScheme == 'dark' ? 'dark' : 'light';
const mode = colorScheme;
console.log(mode);

// Light and Dark colour schemes
export const colors = {
	purpleColorLighter: "#A42DE8",
	blueColorLighter: "#318AFF",
	blueColorDarker: "#2D3DE8",
	blackColorTranslucentLess: "rgba(0,0,0,0.35)",
	blackColorTranslucentMore: "rgba(0,0,0,0.7)",
    whiteColor: "#ffffff",
    whiteColorTranslucent: "rgba(255,255,255, 0.5)",
	"light" : {
		bgColor: "#ffffff",
		fgColor: "#800080",
		fgColorLighter: "rgba(128,0,128,0.5)",
		headerTextColor: "#ffffff"
	},
	"dark" : {
		bgColor: "#422142",
		fgColor: "#f0c4f0",
		fgColorLighter: "rgba(210,169,210,0.5)",
		headerTextColor: "#f0c4f0",
	}
};

export const styles = {
    nearbyAndPlayContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: colors[mode].bgColor
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors[mode].fgColor,
        paddingBottom: 0
    },
    subHeading: {
        fontSize: 14,
        color: colors[mode].fgColor,
        paddingBottom: 25
    },
    songName: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors[mode].fgColor,
        paddingBottom: 0
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center", 
    },
    locationHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors[mode].fgColor,
        paddingBottom: 6
    },
    playButton: {
        backgroundColor: colors[mode].fgColor,
        color: colors[mode].bgColor,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
    },
    locationIcon: {
        width: 35,
        height: 105,
    },
    currentLocation: {
        marginBottom: 10
    }, 
    ratingComponent: {
        paddingTop: 15,
    },
    sampleInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    sampleInfoNameDate: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    sampleInfoRating: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    profileContainer: {
        padding: 20,
        backgroundColor: colors[mode].bgColor,
        flex: 1
    },
    input: {
        marginTop: 20,
        backgroundColor: colors[mode].fgColorLighter,
        color: colors[mode].fgColor,
        borderRadius: 5,
        textAlign: "center",
        height: 40
    },
    photoEmptyView: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors[mode].fgColorLighter,
        borderStyle: "dashed",
        height: height / 1.625
    },
    photoFullImage: {
        width: "100%",
        borderRadius: 10
    },
    addPhoto: {
        backgroundColor: colors[mode].fgColor,
        color: colors[mode].bgColor,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        width: "50%",
        marginLeft: "25%",
        marginTop: -(height / 3.25)
    },
    changePhoto: {
        backgroundColor: colors[mode].fgColor,
        color: colors[mode].bgColor,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        width: "50%",
        marginLeft: "25%",
        marginTop: -(height / 12)
    }
}


