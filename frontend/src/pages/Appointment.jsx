import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(-1); // ✅ no default selection
  const [slotTime, setSlotTime] = useState('');

  // Fetch doctor
  const fetchDocInfo = () => {
    const doctorInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(doctorInfo);
  };

  // Generate slots
  const getAvailableSlots = () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === date.getDate()) {
        date.setHours(date.getHours() > 10 ? date.getHours() + 1 : 10);
        date.setMinutes(date.getMinutes() > 30 ? 30 : 0);
      } else {
        date.setHours(10);
        date.setMinutes(0);
      }

      let slots = [];

      while (date < endTime) {
        let formattedTime = date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        slots.push({
          datetime: new Date(date),
          time: formattedTime,
        });

        date.setMinutes(date.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, slots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Image */}
          <div className="w-full sm:w-60 h-60 bg-primary rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white">
            <p className="flex items-center gap-2 text-xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div className="mt-3">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About
                <img className="w-3" src={assets.info_icon} alt="" />
              </p>

              <p className="text-sm text-gray-600 mt-1 max-w-[700px]">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee:{' '}
              <span className="text-gray-700">
                {currencySymbol} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Section */}
        <div className="sm:ml-72 sm:pl-4 mt-6">
          <p className="font-medium text-gray-700">Booking Slots</p>

          {/* Days */}
          <div className="flex gap-3 mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 px-4 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? 'bg-primary text-white'
                      : 'border border-gray-300'
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Time Slots */}
          {slotIndex !== -1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm px-5 py-2 rounded-full cursor-pointer ${
                    slotTime === item.time
                      ? 'bg-primary text-white'
                      : 'border border-gray-300 text-gray-500'
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
            </div>
          )}

          {/* Button */}
          <button
            className="bg-primary text-white px-14 py-3 rounded-full mt-6"
            onClick={() => {
              if (slotIndex === -1 || !slotTime) {
                alert('Please select a date and time');
                return;
              }
              console.log('Booked:', docInfo._id, slotTime);
            }}
          >
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
