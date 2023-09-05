// import React from 'react'
import '../Style/Program.css'
import { programData } from "../components/ProgramData"
import { BiRightArrowAlt } from 'react-icons/bi';



const Program = () => {


    return (
        <div className="programs" id="programs">
            <div className="programs-header">
                <span className='stroke-txt'>EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className='stroke-txt'>TO SHAPE YOU</span>
            </div>
            <div className='program-categories'>
                {programData.map((e: any) => (
                    <div className='category'>
                        {e.image}
                        <span> {e.heading}</span>
                        <span>{e.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <span><BiRightArrowAlt /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Program