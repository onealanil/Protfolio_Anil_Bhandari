import React, { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";
import { tabs } from "./Tabs";

function TabBar({ activeTab, setActiveTab }: any) {
  const [showModal, setShowModal] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSocialClick = (platform: string) => {
    openInNewTab(
      `${
        platform === "Facebook"
          ? "https://www.facebook.com/aneeel.7642/"
          : platform === "Instagram"
          ? "https://www.instagram.com/anil_oneal12/"
          : "https://x.com/AnilBhanda78713"
      }`
    );

    setShowModal(false);
  };

  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .hide-scrollbar {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
          
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 50;
          }
          
          .modal-content {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 300px;
            max-width: 90%;
          }
             .facebook-icon {
            color: #1877F2;
          }
          
          .instagram-icon {
            color: #E4405F;
          }
          
          .twitter-icon {
            color: #1DA1F2;
          }
        `}
      </style>
      <section className="lg:mt-24 flex justify-center lg:justify-normal">
        <div className="lg:w-full w-[90%] flex border-b-[0.25px] overflow-x-scroll border-gray-300 hide-scrollbar">
          <div className="lg:w-[13%] w-[0%]"></div>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`py-2 px-3 cursor-pointer ${
                activeTab === tab ? "border-b-[4px] border-black" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              <span
                className={`text-sm ${
                  activeTab === tab ? "text-black" : "text-gray-600"
                }`}
              >
                {tab}
              </span>
            </div>
          ))}
          <div
            className="flex items-center justify-center gap-x-1 ml-4 cursor-pointer"
            onClick={handleMoreClick}
          >
            <EllipsisVertical size={15} />
            <span className="text-sm text-gray-600">More</span>
          </div>
          <div
            className="py-2 px-3 ml-28 cursor-pointer"
            onClick={() => {
              openInNewTab(
                `${"https://www.npmjs.com/package/nepali-compiler"}`
              );
            }}
          >
            <span className="text-sm text-gray-600">Tools</span>
          </div>
        </div>
      </section>

      {/* Social Media Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content " onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-medium">Social Media</h3>
              <button
                onClick={handleCloseModal}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-2">
              <div
                className="p-3 hover:bg-gray-100 rounded cursor-pointer flex items-center"
                onClick={() => handleSocialClick("Facebook")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 facebook-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
                <span>Facebook</span>
              </div>
              <div
                className="p-3 hover:bg-gray-100 rounded cursor-pointer flex items-center"
                onClick={() => handleSocialClick("Instagram")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 instagram-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
                <span>Instagram</span>
              </div>
              <div
                className="p-3 hover:bg-gray-100 rounded cursor-pointer flex items-center"
                onClick={() => handleSocialClick("Twitter")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 twitter-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TabBar;
