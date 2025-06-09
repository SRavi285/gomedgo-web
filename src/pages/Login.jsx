import React, { useState } from "react";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setOtpSent(true);
    // Call backend to send OTP
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter a valid 6-digit OTP.");
      return;
    }
    // Verify OTP logic here
    alert("Logged in successfully!");
  };

  const handleGoogleLogin = () => {
    alert("Google Login clicked.");
    // Integrate with Firebase or OAuth logic
  };

  const handleFacebookLogin = () => {
    alert("Facebook Login clicked.");
    // Integrate with Firebase or Facebook SDK
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-[#007299] mb-6">
          Login to GoMedGo
        </h2>

        {/* Mobile Login */}
        {!otpSent ? (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              maxLength="10"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#007299]"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-[#007299] text-white font-medium py-2 rounded hover:bg-[#005f7a]"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter OTP
            </label>
            <input
              type="text"
              maxLength="6"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#007299]"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-[#007299] text-white font-medium py-2 rounded hover:bg-[#005f7a]"
            >
              Verify OTP & Login
            </button>
          </>
        )}

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-3 flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-full bg-[#3b5998] text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-[#2d4373]"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Facebook"
            className="w-5 h-5 bg-amber-50"
          />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
