import React from 'react'
import { Download } from 'lucide-react'

function CV({setShowModal}: any) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
    <div
      className="fixed inset-0 w-full h-full bg-black opacity-40"
      onClick={() => setShowModal(false)}
    ></div>
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg dark:bg-slate-700">
        <div className="mt-3 sm:flex">
          <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-slate-100 rounded-full">
            <Download color="green" />
          </div>
          <div className="mt-2 text-center sm:ml-4 sm:text-left">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white">
              Wanna know me more ?
            </h4>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-500 dark:text-red-200">
              The resume here, It includes information about me
              personally, academically, and in terms of my
              abilities.
            </p>
            <div className="items-center gap-2 mt-3 sm:flex">
              <a
                href="./assets/CV_AnilBhandari.pdf"
                download="CV_AnilBhandari.pdf"
              >
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-white bg-green-700 rounded-md outline-none ring-offset-2 ring-green-400 focus:ring-2"
                  onClick={() => setShowModal(false)}
                >
                  Download
                </button>
              </a>
              <button
                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 dark:bg-white ring-red-400 focus:ring-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CV