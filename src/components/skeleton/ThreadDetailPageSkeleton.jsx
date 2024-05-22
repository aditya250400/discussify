import React from 'react';

function ThreadDetailPageSkeleton() {
  return (
    // null
    <div className="p-4 md:p-0 md:w-[716px] md:mx-auto overflow-y-auto ">
      <div className="rounded-xl bg-white shadow-lg my-5">
        {/* ThreadItem */}
        <div className="rounded-t-xl bg-white shadow-lg my-5 animate-pulse">
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

              <div className="bg-slate-300 w-full h-[200px] rounded-md animate-pulse" />
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
          {/* CommentThread */}
          <div className="h-[1px]  bg-[#C7C7C7] w-full" id="comments" />
          <div className="animate-pulse bg-slate-300 p-3 w-[150px] rounded-lg ml-4 mt-5" />
          <div className="h-[400px] p-4 overflow-y-auto">
            {/* CommentItem */}
            {
            Array.from({ length: 5 }, (_, index) => (
              <div key={index} className=" my-[25px]">
                <div className="flex gap-2">
                  <div className="rounded-full w-[30px] h-[30px] bg-slate-300 animate-pulse" />
                  <div className="w-full">
                    <div className="bg-[#F0F2F5] rounded-xl p-2">
                      <div className="flex items-center gap-1">
                        <div className="rounded-lg w-[30px] h-[10px] animate-pulse bg-slate-300" />
                        <div className="animate-pulse bg-slate-300 h-[10px] w-10" />
                      </div>
                      <div className="my-[10px]">
                        <div className="h-24 w-full rounded-lg animate-pulse bg-slate-300" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="rounded-lg bg-slate-300 w-10 h-7 animate-pulse" />
                      <div className="rounded-lg bg-slate-300 w-10 h-7 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))
           }
            {/* CommentItem End */}
            <div className="sticky -bottom-[17px] p-1 bg-white  mt-[60px]">
              <div className="flex gap-2">
                <div className="rounded-full w-[30px] h-[30px] animate-pulse bg-slate-300" />
                <form className="w-full">
                  <div className="bg-[#F0F2F5] rounded-xl animate-pulse p-2">
                    {/* eslint-disable-next-line react/self-closing-comp */}
                    <div className="bg-transparent w-full h-[80px] animate-pulse bg-slate-300" />
                    <div className="flex justify-end">
                      <div className="animate-pulse bg-slate-300 rounded-lg w-[50px] h-[10px]" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* CommentThread End */}
        </div>
        {/* ThreadItem End */}
      </div>
    </div>
  );
}

export default ThreadDetailPageSkeleton;
