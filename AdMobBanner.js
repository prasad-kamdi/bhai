import React from "react";
import { Platform, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

const BannerAd = () => {
    const unitID = Platform.select({
        ios: "ca-app-pub-2370317199140276/8667920321",
        android: "ca-app-pub-2370317199140276/8667920321",
    });

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <AdMobBanner
                adUnitID={unitID}
                bannerSize="smartBanner"
                servePersonalizedAds={true}
                style={{
                    padding: 30,
                }}
            />
        </View>
    );
};

export default BannerAd;