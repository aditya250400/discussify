/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

function ThreadsPageSkeleton() {
  return (
    <div className="py-[20px] px-3 max-w-screen-2xl mx-auto ">
      <div className="flex flex-col gap-5 md:gap-2 md:flex-row-reverse animate-fade-in">
        <div className="md:w-[345px] md:mx-auto animate-slide-left">
          <div className="md:sticky md:right-0 md:top-28">
            {/* Create Thread Button */}
            <div className="animate-pulse hidden bg-bluePrimary text-white p-2 rounded-xl md:flex md:justify-center md:gap-2 cursor-pointer hover:bg-blue-600 mb-5 animate-fade-in h-10">
              <div className="bg-white rounded-full w-[50px] animate-pulse" alt="Pencil Icon" />
              <div className="bg-white rounded-full w-[200px] animate-pulse " />
            </div>
            {/* Create Thread Button end */}
            {/* Trending Tag */}
            <div className="bg-white rounded-xl animate-pulse">
              <div className="flex items-center gap-2 p-4">
                <div className="bg-slate-300 rounded-full animate-pulse w-[50px] h-[20px]" alt="Tags Icon" />
                <div className="bg-slate-300 rounded-full animate-pulse w-[150px] h-[20px]" alt="Tags Icon" />
              </div>
              <div className="h-[1px] bg-[#C7C7C7] w-full" />

              <div className="flex flex-wrap justify-center my-3 py-3 px-2 gap-2">
                {
                    Array.from({ length: 20 }, (_, index) => (
                      <div key={index} className="p-1 h-[20px] w-[50px] rounded-lg animate-pulse bg-slate-300" />
                    ))
                }
              </div>
            </div>
            {/* Trending End */}
            {/* Discussify Stats */}
            <div className="bg-white rounded-xl animate-pulse ">
              <div className="flex items-center gap-2 p-4">
                <div className="p-1 h-[20px] w-[200px] rounded-lg animate-pulse bg-slate-300" />
              </div>
              <div className="h-[1px] bg-[#C7C7C7] w-full" />

              <div className="flex flex-wrap mx-6 my-3 pb-5 gap-2">
                <ul className="flex flex-col gap-3 w-full">
                  <li className="flex justify-between items-center animate-slide-left">
                    <div className="flex items-center gap-3">
                      <div className="w-[30px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                    </div>
                    <div className="w-[200px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                  </li>
                  <li className="flex justify-between items-center animate-slide-left">
                    <div className="flex items-center gap-3">
                      <div className="w-[30px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                    </div>
                    <div className="w-[200px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                  </li>
                  <li className="flex justify-between items-center animate-slide-left">
                    <div className="flex items-center gap-3">
                      <div className="w-[30px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                    </div>
                    <div className="w-[200px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                  </li>
                </ul>
              </div>
            </div>
            {/* Discussify Stats end */}
          </div>
        </div>

        <div className="md:w-[800px]  md:mx-auto animate-slide-right">
          {/* Thread Search */}
          <div className="flex animate-pulse">
            <div className="animate-pulse bg-white w-full p-5 rounded-s-xl placeholder:pl-3 focus:outline-none" placeholder="Search the Threads" autoComplete="off" />

            {/* eslint-disable react/button-has-type  */}
            <div className=" bg-bluePrimary rounded-e-xl p-2 w-[60px] flex justify-center items-center animate-pulse" />
          </div>
          {/* Thread Search end */}

          {/* Threads */}
          {
            Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="rounded-xl bg-white shadow-lg my-5 animate-pulse">
                <div>
                  <div className="flex justify-between flex-wrap w-full p-4">
                    {/* Head Section thread */}
                    <div className="flex items-center gap-2 animate-slide-up">
                      <div className="text-center animate-pulse rounded-full w-[40px] h-[40px] bg-slate-300" />
                      <div className="animate-pulse text-[12px] font-semibold bg-gray-300 w-[100px] h-[20px] rounded-md" />
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-[5px]">
                      <div className="w-[30px] animate-pulse h-[30px] rounded-full bg-slate-300" />
                      <div className="w-[90px] bg-gray-300 h-[20px] rounded-lg animate-pulse" />
                    </div>

                  </div>
                  <div className="h-[1px] bg-[#C7C7C7] w-full" />
                  {/* End Head Section thread */}

                  {/* Body Section thread */ }
                  <div className="p-4 animate-slide-up">
                    <div className="bg-slate-300 w-[90px] h-[20px] mb-5 animate-pulse rounded-lg p-2" />

                    <div className="bg-slate-300 w-full h-[100px] rounded-md animate-pulse" />
                  </div>
                  <div className="h-[1px] bg-[#C7C7C7] w-full mt-3" />
                  {/* End Body Section thread */}
                  {/* Footer Section thread */}
                  <div className="flex justify-between items-center p-4 animate-slide-up" id="comments">
                    <div className="flex gap-3 w-full">
                      <div className="animate-pulse h-[20px] w-[50px] rounded-lg bg-slate-300" />
                      <div className="animate-pulse h-[20px] w-[50px] rounded-lg bg-slate-300" />
                      <div className="animate-pulse h-[20px] w-[50px] rounded-lg bg-slate-300" />
                    </div>
                    <div className="hidden md:block bg-slate-300 w-[100px] h-[20px] rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
            ))
          }
          {/* Threads End */}
        </div>
      </div>
    </div>
  );
}

export default ThreadsPageSkeleton;
