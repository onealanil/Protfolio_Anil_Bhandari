"use client";
import React, { useState, useEffect } from "react";
import { Search, Mic, Camera, X } from "lucide-react";

const SearchBar = () => {
  const [constSearchTerm, setConstSearchTerm] =
    useState<string>("Anil Bhandari");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [recognizedText, setRecognizedText] = useState<string>("");
  const [showVoiceModal, setShowVoiceModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`,
      "_blank"
    );
  };

  const handleVoiceSearch = () => {
    setShowVoiceModal(true);
    setIsListening(true);
    setRecognizedText("Listening...");
  };

  const searchHandler = () => {
    if (recognizedText && recognizedText !== "Listening...") {
      setSearchTerm(recognizedText);
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(recognizedText)}`,
        "_blank"
      );
    }
    window.location.reload();
  };

  const stopListening = () => {
    setIsListening(false);
    setShowVoiceModal(false);
  };

  useEffect(() => {
    if (!isListening) return;

    // @ts-ignore - TypeScript doesn't know about webkitSpeechRecognition
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setRecognizedText("Error occurred. Please try again.");
      setIsListening(false);
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-2xl bg-white border border-gray-100 rounded-full hover:shadow-md drop-shadow-md focus-within:shadow-md px-5 py-[0.5rem]"
      >
        <input
          type="text"
          value={constSearchTerm}
          onChange={(e) => setConstSearchTerm(e.target.value)}
          className="flex-grow w-[10rem] lg:w-[40rem] text-base text-gray-700 focus:outline-none"
          placeholder="Search Google or type a URL"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="p-1 mr-2"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        )}
        <div className="h-7 w-px bg-gray-200 mr-2"></div>
        {/* mic  */}
        <button type="button" className="p-1 mr-2" onClick={handleVoiceSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M12 2a2.5 2.5 0 0 0-2.5 2.5v7a2.5 2.5 0 0 0 5 0v-7A2.5 2.5 0 0 0 12 2Z"
              fill="#4285F4"
              stroke="#4285F4"
            />
            <path d="M19 11v1a7 7 0 0 1-14 0v-1" stroke="#EA4335" />
            <path d="M12 19v3" stroke="#34A853" />
            <circle cx="12" cy="19" r="0.5" fill="#FBBC05" />
          </svg>
        </button>
        {/* camera */}
        <button type="button" className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
              stroke="#4285F4"
              fill="#E8F0FE"
            />
            <circle cx="12" cy="13" r="3" stroke="#EA4335" fill="#FCECEA" />
            <circle cx="12" cy="13" r="1.5" fill="#34A853" />
            <path d="M9 6h6" stroke="#FBBC05" />
          </svg>
        </button>
        <Search className="h-6 w-6 text-blue-500 mr-3 ml-3" />
      </form>

      {/* Voice Modal */}
      {showVoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Voice Search</h2>
              <button
                onClick={stopListening}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center py-4">
              <div className="mb-4">
                {isListening ? (
                  <div className="animate-pulse flex justify-center">
                    <div className="h-10 w-10 bg-red-500 rounded-full"></div>
                  </div>
                ) : (
                  <div className="h-10 w-10 bg-gray-300 rounded-full mx-auto"></div>
                )}
              </div>
              <p className="text-lg font-medium">
                {recognizedText || "Speak now..."}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={searchHandler}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
              >
                {recognizedText ? "Search" : "Stop Listening"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
