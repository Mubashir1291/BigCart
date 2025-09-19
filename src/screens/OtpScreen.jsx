import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { RF } from "../Utils/Responsive";
import HeadertText from "../components/header/HeaderText";
import Buttons from "../components/buttons/Buttons";
import { TextBold, TextRegular } from "../components/IconSize/Sizes";
import { SafeAreaView } from "react-native-safe-area-context";

const OtpScreen = () => {
  const navigation = useNavigation();

  // Timer State
  const [timeLeft, setTimeLeft] = useState(10);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  // OTP State
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  // Countdown Timer
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      setIsResendEnabled(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Format Timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle OTP Change
  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle Backspace
  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace") {
      let newOtp = [...otp];

      if (newOtp[index] !== "") {
        // Case 1: Clear current digit
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Case 2: Move focus back and clear previous
        inputs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  // Submit Button
  const SendOtpScreenHandle = () => {
    const enteredOtp = otp.join(""); // Combine all digits
    console.log("OTP Entered:", enteredOtp);
    navigation.navigate("NavBar");
  };

  // Resend OTP
  const resendOtpHandle = () => {
    setTimeLeft(10);
    setIsResendEnabled(false);
    setOtp(["", "", "", "", "", ""]);
    inputs.current[0].focus();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeadertText navigation={navigation} text="Verify Number " />
      <View style={styles.Maincontainer}>
        <Text style={styles.ForgotText}>Verify your number</Text>
        <Text style={styles.loremHeadings}>Enter your OTP code below</Text>

        {/* OTP Inputs */}
        <View style={styles.LinkTextContainer}>
          <View style={styles.FlagContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                style={styles.OtpContainersSize}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>
        </View>

        {/* Next Button */}
        <Buttons text={"Next"} onPress={SendOtpScreenHandle} />

        {/* Resend OTP Section */}
        <Text style={[TextRegular, { alignSelf: "center", fontSize: 15 }]}>
          Didn’t receive a code?
        </Text>

        {isResendEnabled ? (
          <Text
            style={[
              TextBold,
              { fontSize: RF(15), color: "blue", alignSelf: "center" },
            ]}
            onPress={resendOtpHandle}
          >
            Resend a new code
          </Text>
        ) : (
          <Text
            style={[
              TextBold,
              { fontSize: RF(15), color: "black", alignSelf: "center" },
            ]}
          >
            Resend a new code ({formatTime(timeLeft)})
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: RF(80),
    paddingHorizontal: RF(10),
  },
  ForgotText: {
    fontSize: RF(25),
    fontFamily: "Poppins-Bold",
    alignSelf: "center",
  },
  loremHeadings: {
    color: "#868889",
    fontSize: RF(15),
    alignSelf: "center",
  },
  LinkTextContainer: {
    flexDirection: "row",
  },
  FlagContainer: {
    width: "100%",
    flexDirection: "row",
    gap: RF(10),
    paddingTop: RF(70),
    paddingHorizontal: RF(10),
    justifyContent: "center",
    alignItems: "center",
  },
  OtpContainersSize: {
    height: RF(55),
width:'15%'    ,
backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: RF(8),
    textAlign: "center",
    fontSize: RF(20),
  },
});
