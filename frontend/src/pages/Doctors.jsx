
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const navigate = useNavigate();

const {speciality} = useParams();
const [filterDoctors, setFilterDoctors] = useState([]);
const[showFilter,setShowFilter] = useState(false);

const {doctors}=useContext(AppContext);
const applyFilter = () => {
  if(speciality){
    setFilterDoctors(doctors.filter(doc => doc.speciality === speciality));
  }else{
    setFilterDoctors(doctors);
  }
}
useEffect(() => {
  applyFilter();
}, [doctors,speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white':''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>

        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden'} sm:flex`}>
          <p onClick={()=> speciality==='General physician' ? navigate('/doctors'): navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${speciality
            === 'General physician' ? 'bg-[#70aab2] text-black border-[#70aab2] ': ""
          } `}>General physician</p>
          <p onClick={()=> speciality==='Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${speciality
            === 'Gynecologist' ? 'bg-[#70aab2] text-black border-[#70aab2] ': ""
          }  `}>Gynecologist</p>
          <p onClick={()=> speciality==='Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')}className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${speciality
            === 'Dermatologist' ? 'bg-[#70aab2] text-black border-[#70aab2] ': ""
          } `}>Dermatologist</p>
          <p onClick={()=> speciality==='Pediatrician' ? navigate('/doctors'): navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${speciality
            === 'Pediatrician' ? 'bg-[#70aab2] text-black border-[#70aab2] ': ""
          } `}>Pediatrician</p>
          <p onClick={()=> speciality==='Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${speciality
            === 'Neurologist' ? 'bg-[#70aab2] text-black border-[#70aab2] ': ""
          } `}>Neurologist</p>
          <p onClick={()=> speciality==='Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer ${speciality
            === 'Gastroenterologist' ? 'bg-[#70aab2] text-black border-[#70aab2] ': ""
          } `}>Gastroenterologist</p>
        </div>

        {/* Doctors cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
          {filterDoctors.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-[#70aab2] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                className="bg-[#70aab2] w-full h-52 object-cover"
                src={item.image}
                alt={item.name}
              />

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>

                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
