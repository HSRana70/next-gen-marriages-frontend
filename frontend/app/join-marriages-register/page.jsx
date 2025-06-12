'use client';

import { useState } from 'react';

export default function GuestRegisterPage() {
  const initialState = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    nationality: '',
    age: '',
    gender: '',
    experienceReason: '',
    attendedBefore: '',
    interests: [],
    availableMonths: [],
    regionPreference: '',
    stayDuration: '',
    travelArranged: '',
    needAssistance: '',
    paidExperience: '',
    budget: '',
    consent: false,
    promoConsent: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'interests') {
      if (checked) {
        setFormData({ ...formData, interests: [...formData.interests, value] });
      } else {
        setFormData({
          ...formData,
          interests: formData.interests.filter((item) => item !== value),
        });
      }
    } else if (type === 'checkbox' && name === 'availableMonths') {
      if (checked) {
        setFormData({ ...formData, availableMonths: [...formData.availableMonths, value] });
      } else {
        setFormData({
          ...formData,
          availableMonths: formData.availableMonths.filter((item) => item !== value),
        });
      }
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Mark as submitted
    setSubmitted(true);

    // Auto scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        {submitted ? (
          <div className="text-center py-20 animate-fadeIn">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your guest registration has been submitted successfully. We look forward to welcoming you to an Indian wedding!
            </p>
            <button
              onClick={() => {
                setFormData(initialState);
                setSubmitted(false);
              }}
              className="bg-[#10325a] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0b264f] transition"
            >
              Register Another Guest
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-[#10325a] mb-6 text-center">Join Indian Weddings — Guest Registration</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Full Name" className="border p-3 rounded w-full" required />
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="border p-3 rounded w-full" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone Number" className="border p-3 rounded w-full" required />
                  <input name="country" value={formData.country} onChange={handleChange} type="text" placeholder="Country" className="border p-3 rounded w-full" required />
                  <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="City" className="border p-3 rounded w-full" />
                  <input name="nationality" value={formData.nationality} onChange={handleChange} type="text" placeholder="Nationality" className="border p-3 rounded w-full" />
                  <input name="age" value={formData.age} onChange={handleChange} type="number" placeholder="Age" className="border p-3 rounded w-full" />
                  <input name="gender" value={formData.gender} onChange={handleChange} type="text" placeholder="Gender" className="border p-3 rounded w-full" />
                </div>
              </div>

              {/* Cultural Interests */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Cultural Interests</h2>
                <textarea name="experienceReason" value={formData.experienceReason} onChange={handleChange} placeholder="Why do you want to join an Indian wedding?" rows="4" className="border p-3 rounded w-full" required />

                <div className="mt-4 space-y-2">
                  <p>Have you attended an Indian wedding before?</p>
                  {['Yes', 'No'].map((val) => (
                    <label key={val} className="flex items-center space-x-2">
                      <input type="radio" name="attendedBefore" value={val} checked={formData.attendedBefore === val} onChange={handleChange} />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-4">
                  <p>What aspects are you excited about?</p>
                  {['Indian Dress', 'Rituals & Ceremonies', 'Music & Dance', 'Indian Food', 'Photography', 'Socializing', 'Learning Traditions', 'Others'].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input type="checkbox" name="interests" value={interest} checked={formData.interests.includes(interest)} onChange={handleChange} />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Availability & Travel</h2>
                <p>Select available months:</p>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                  <label key={month} className="flex items-center space-x-2">
                    <input type="checkbox" name="availableMonths" value={month} checked={formData.availableMonths.includes(month)} onChange={handleChange} />
                    <span>{month}</span>
                  </label>
                ))}

                <input name="regionPreference" value={formData.regionPreference} onChange={handleChange} type="text" placeholder="Preferred Region (North, South, East, West, Any)" className="border p-3 rounded w-full mt-4" />
                <input name="stayDuration" value={formData.stayDuration} onChange={handleChange} type="text" placeholder="Duration of Stay in India (days)" className="border p-3 rounded w-full mt-4" />

                <div className="mt-4 space-y-2">
                  <p>Do you already have travel arrangements?</p>
                  {['Yes', 'No'].map((val) => (
                    <label key={val} className="flex items-center space-x-2">
                      <input type="radio" name="travelArranged" value={val} checked={formData.travelArranged === val} onChange={handleChange} />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  <p>Will you need assistance with travel arrangements?</p>
                  {['Yes', 'No'].map((val) => (
                    <label key={val} className="flex items-center space-x-2">
                      <input type="radio" name="needAssistance" value={val} checked={formData.needAssistance === val} onChange={handleChange} />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Budget & Preferences</h2>
                <div className="space-y-2">
                  <p>Are you open to paid experiences?</p>
                  {['Yes', 'No'].map((val) => (
                    <label key={val} className="flex items-center space-x-2">
                      <input type="radio" name="paidExperience" value={val} checked={formData.paidExperience === val} onChange={handleChange} />
                      <span>{val}</span>
                    </label>
                  ))}
                </div>

                <input name="budget" value={formData.budget} onChange={handleChange} type="text" placeholder="Approximate Budget (INR)" className="border p-3 rounded w-full mt-4" />
              </div>

              {/* Terms */}
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} required />
                  <span>I accept platform’s Terms & Privacy Policy.</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input name="promoConsent" type="checkbox" checked={formData.promoConsent} onChange={handleChange} />
                  <span>I consent to be featured in JoinMarriages promotional content.</span>
                </label>
              </div>

              {/* Submit */}
              <div>
                <button type="submit" className="bg-[#10325a] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0b264f] transition w-full">
                  Submit Guest Registration
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
