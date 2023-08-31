import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

const Dashboard = () => {
  const { data, fetchStatus, setFetchStatus, functions } = useContext(Context);
  const { fetchData } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  let totalData = data.length;
  let totalOpen = data.filter((e) => {
    return e.job_status === 1;
  }).length;

  return (
    <div className="w-full max-w-screen-xl py-12 px-6 h-screen ">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>

        <div className="flex flex-wrap justify-between">
          <div className="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
            <div>
              <span className="text-6xl font-bold block leading-none text-center sm:text-left">{totalData}</span>
              <span className="mt-2 block text-center sm:text-left">Total Job Listed</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-users fa-w-20 mb-2 sm:mb-0 sm:ml-10  text-5xl sm:text-6xl text-pink-800" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <div className="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
            <div>
              <span className="text-4xl font-bold block leading-none text-center sm:text-left">{totalOpen}</span>
              <span className="mt-2 block text-center sm:text-left">Total Open Job</span>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye fa-w-18 mb-2 sm:mb-0 sm:ml-10 text-5xl sm:text-6xl text-pink-800"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              />
            </svg>
          </div>
          <div className="mb-6 xl:mb-0 w-96 sm:w-full max-w-full sm:max-w-xs flex flex-col-reverse sm:flex-row items-center justify-between border border-gray-300 rounded-sm bg-white p-6">
            <div>
              <span className="text-6xl font-bold block leading-none text-center sm:text-left">0</span>
              <span className="mt-2 block text-center sm:text-left">Unread Messages</span>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="svg-inline--fa fa-envelope fa-w-16 mb-2 sm:mb-0 sm:ml-10 text-5xl sm:text-6xl text-pink-800"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
