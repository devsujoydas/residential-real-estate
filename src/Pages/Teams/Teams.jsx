import { Helmet } from "react-helmet"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
import ScheduleVisit from "../../Components/Awards/ScheduleVisit"
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import MemberPage from "./MemberPage"


const Teams = () => {

  const {teamMembers} = useContext(AuthContext)
  console.log(teamMembers);
  return (
    <div className=" ">
      <Helmet>
        <title>RRE | Teams</title>
      </Helmet>


      {/* Navigaiton  */}
      <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
        <div className="max-w-7xl mx-auto space-y-5">
          <h1 className="text-5xl font-semibold  text-center">Team</h1>
          <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />Team</h1>
        </div>
      </div>


      {/* Teams Member  */}
      <div className="max-w-7xl mx-auto md:my-20 my-10 lg:p-0 p-5 grid md:grid-cols-3 gap-5">
        {
          teamMembers.map(tMember=><MemberPage tMember={tMember} key={tMember.id}/>)
        }
      </div>


      {/* brand logos  */}
      <div className=" bg-secondary">
        <div className="max-w-7xl mx-auto py-10 lg:px-0 px-5 lg:py-20">
          <div className='grid grid-cols-3 md:grid-cols-6 gap-10 pt-10'>

            <div>
              <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_1.svg" alt="" />
            </div>

            <div>
              <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_2.svg" alt="" />
            </div>

            <div>
              <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_3.svg" alt="" />
            </div>

            <div>
              <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_4.svg" alt="" />
            </div>

            <div>
              <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_5.svg" alt="" />
            </div>

            <div>
              <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_6.svg" alt="" />
            </div>

          </div>
        </div>
      </div>



      <div className="w-full bg-white">
        {/* Schedule a Visit  */}
        <div className="max-w-7xl mx-auto lg:py-20 py-10 lg:px-0 px-5 ">
          <ScheduleVisit />

        </div>
      </div>

    </div>
  )
}

export default Teams