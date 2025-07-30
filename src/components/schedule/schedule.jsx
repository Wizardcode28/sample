import React from 'react'
import "./schedule.css"
const Schedule = () => {
  return (
      <>
      <div className="flex justify-center mt-14">
        <div className='abouttitle text-6xl font-extrabold mb-5'>SCHEDULE</div>
      </div>
      <div className="container h-auto"id="schedule">
        <div className="row">
          <div className="col-md-12">
            <div className=" after:block after:clear-both">
              <div className=" w-[50%] float-left m-[0_2px_0_0] max-md:m-[0_0_2px] max-md:w-full p-[3px_0]">
                <a
                  href="#"
                  className=" tektur text-[#ccc] bg-transparent text-left ml-[10vw] max-md:ml-0 p-[20px_60px_20px_0] max-md:p-[20px_0_20px_120px] block relative"
                >
                  {/* <div className="absolute bg-[#897be2b5] skew-y-[-20deg] w-10 top-0 bottom-0 -right-5 max-md:left-[30px]"></div> */}
                  <img src="/Images/Rectangle8.png" className="absolute top-3 bottom-0 -right-5 h-[128vh] max-lg:h-[320vh] max-lg:w-[4vw] max-md:h-[260vh] max-md:left-[39px]" alt="" />
                  <div className=" text-[18px] text-center font-[600] leading-[100px] w-[100px] h-[100px]  translate-y-[-50%] top-[50%] right-[-50px] z-10  absolute max-md:left-0 max-md:right-auto">
                    {/* <div className="absolute bg-white rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.4)] top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10"></div> */}
                    <img src="/Images/image3.png" className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10" alt="" />
                    <div className='mt-3 ml-2'>18th Oct</div>
                  </div>

                  <div className="flex">
                    <img src="Images/50.png" width={"50px"} className='mr-3' alt="" />
                    <h3 className="text-4xl font-[500] text-[#F68A8A] mb-1  max-md:scale-90 max-md:mb-0">
                      Registration
                    </h3>
                  </div>

                  <p className=" text-[18px] text-left leading-normal font-normal font-[roboto] tracking-wide max-md:scale-90 ">
                    Version Beta is opening its doors for applications
                    starting from August 20th until October 5th.To apply, all
                    you need to do is to click on the “Register Here” Button
                    above and fill the registration form. After the
                    registration process is compeleted, A rundown of
                    shortlisted candidates for the hack will be declared.
                  </p>
                </a>
              </div>
              <div className=" w-[50%] float-right m-[0_2px_0_0] max-md:m-[0_0_2px] max-md:w-full p-[3px_0]">
                <a
                  href="#"
                  className=" tektur text-[#ccc] bg-transparent text-left mr-[10vw] max-md:mr-0 p-[20px_0_20px_60px] max-md:p-[20px_0_20px_120px] block relative"
                >
                  {/* <img src="Images/Rectangle 8.png" className="absolute top-28 bottom-0 -left-1 max-md:left-[39px]" alt="" /> */}
                  <div className=" text-[18px] text-center font-[600] leading-[100px] w-[100px] h-[100px]  translate-y-[-50%] top-[50%] left-[-50px] z-10  absolute max-md:left-0 max-md:right-auto">
                    {/* <div className="absolute bg-white rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.4)] top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10"></div> */}
                    <img src="/Images/image3.png" className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10" alt="" />
                    <div className='mt-3 ml-2' >Till 1 Nov</div>
                  </div>
                  <div className="flex">
                    <img src="Images/50.png" width={"50px"} className='mr-3' alt="" />
                    <h3 className=" text-4xl font-[500] text-[#F68A8A] mb-1  max-md:scale-90 max-md:mb-0">
                      Ideation
                    </h3>
                  </div>
                  <p className=" text-[18px] text-left leading-normal font-normal font-[roboto] tracking-wide max-md:scale-90">
                    Dive deep into current tech trends and challenges. Draw
                    inspiration from industry leaders, innovative startups,
                    and emerging technologies. Use brainstorming sessions to
                    generate a plethora of ideas, no matter how wild or
                    ambitious.{" "}
                  </p>
                </a>
              </div>
              <div className=" w-[50%] float-left m-[0_2px_0_0] max-md:m-[0_0_2px] max-md:w-full p-[3px_0]">
                <a
                  href="#"
                  className=" tektur text-[#ccc] bg-transparent text-left ml-[10vw] max-md:ml-0 p-[20px_60px_20px_0] max-md:p-[20px_0_20px_120px] block relative"
                >
                  {/* <img src="Images/Rectangle 8.png" className="absolute top-28 bottom-0 -right-5 max-md:left-[39px]" alt="" /> */}
                  <div className=" text-[18px] text-center font-[600] leading-[100px] w-[100px] h-[100px]  translate-y-[-50%] top-[50%] right-[-50px] z-10  absolute max-md:left-0 max-md:right-auto">
                    {/* <div className="absolute bg-white rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.4)] top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10"></div> */}
                    <img src="/Images/image3.png" className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10" alt="" />
                    <div className='mt-3 ml-2' >2nd Nov</div>
                  </div>
                  <div className="flex">
                    <img src="Images/50.png" width={"50px"} className='mr-3' alt="" />
                    <h3 className="text-4xl font-[500] text-[#F68A8A] mb-1  max-md:scale-90 max-md:mb-0">
                      Announcement
                    </h3>
                  </div>
                  <p className=" text-[18px] text-left leading-normal font-normal font-[roboto] tracking-wide max-md:scale-90">
                    After intense brainstorming and collaboration, Best ideas
                    would be selected by judges, Their creativity and
                    problem-solving skills have set the stage for the next
                    challenge.{" "}
                  </p>
                </a>
              </div>
              <div className=" w-[50%] float-right m-[0_2px_0_0] max-md:m-[0_0_2px] max-md:w-full p-[3px_0]">
                <a
                  href="#"
                  className=" tektur timeline-content text-[#ccc] bg-transparent text-left mr-[10vw] max-md:mr-0 p-[20px_0_20px_60px] max-md:p-[20px_0_20px_120px] block relative"
                >
                  {/* <img src="Images/Rectangle 8.png" className="absolute top-28 bottom-0 -left-1 max-md:left-[39px]" alt="" /> */}
                  <div className="timeline-year text-[18px] text-center font-[600] leading-[100px] w-[100px] h-[100px]  translate-y-[-50%] top-[50%] left-[-50px] z-10  absolute max-md:left-0 max-md:right-auto">
                    {/* <div className="absolute bg-white rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.4)] top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10"></div> */}
                    <img src="/Images/image3.png" className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10" alt="" />
                    <div className='mt-3 ml-2' >2-3 Nov</div>
                  </div>
                  <div className="flex">
                    <img src="Images/50.png" width={"50px"} className='mr-3' alt="" />
                    <h3 className=" text-4xl font-[500] text-[#F68A8A] mb-1  max-md:scale-90 max-md:mb-0">
                      Team
                    </h3>
                  </div>
                  <p className="description text-[18px] text-left leading-normal font-normal font-[roboto] tracking-wide max-md:scale-90">
                    Collaboration is key as students bring together their
                    unique skills and expertise. Enlist your teams and prepare
                    them to tackle the upcoming challenges. Get ready to
                    synergize and innovate with your peers as the codathon
                    journey continues!{" "}
                  </p>
                </a>
              </div>
              <div className=" w-[50%] float-left m-[0_2px_0_0] max-md:m-[0_0_2px] max-md:w-full p-[3px_0]">
                <a
                  href="#"
                  className=" tektur timeline-content text-[#ccc] bg-transparent text-left ml-[10vw] max-md:ml-0 p-[20px_60px_20px_0] max-md:p-[20px_0_20px_120px] block relative"
                >
                  {/* <img src="Images/Rectangle 8.png" className="absolute top-20 bottom-0 -right-5 max-md:left-[30px]" alt="" /> */}
                  <div className="timeline-year text-[18px] text-center font-[600] leading-[100px] w-[100px] h-[100px]  translate-y-[-50%] top-[50%] right-[-50px] z-10  absolute max-md:left-0 max-md:right-auto">
                    {/* <div className="absolute bg-white rounded-full shadow-[5px_5px_7px_rgba(0,0,0,0.4)] top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10"></div> */}
                    <img src="/Images/image3.png" className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] -z-10" alt="" />
                    <div className='mt-3 ml-2' >8-10 Nov</div>
                  </div>
                  <div className="flex">
                    <img src="Images/50.png" width={"50px"} className='mr-3' alt="" />
                    <h3 className="text-4xl font-[500] text-[#F68A8A] mb-1  max-md:scale-90 max-md:mb-0">
                      Hackathon
                    </h3>
                  </div>
                  <p className="description text-[18px] text-left leading-normal font-normal font-[roboto] tracking-wide max-md:scale-90">
                    Every truly novel concept appears insane at first, so come
                    present yours. The time for brainstorming is past; now is
                    the time to code and present hackathon presentations.{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Schedule
