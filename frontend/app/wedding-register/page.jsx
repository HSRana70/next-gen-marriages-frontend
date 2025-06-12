'use client';

import { useState } from 'react';

export default function WeddingRegisterPage() {
  const [formData, setFormData] = useState({
    hostName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    address: '',
    brideName: '',
    groomName: '',
    weddingTitle: '',
    weddingDescription: '',
    startDate: '',
    endDate: '',
    venue: '',
    guests: '',
    languages: '',
    experienceType: 'Free',
    pricePerGuest: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log('Form Data:', formData);

    // Mark as submitted
    setSubmitted(true);

    // Scroll to top so user sees the thank you message
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // OPTIONAL: You can reset the form if needed
    // setFormData({ ...initialState });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">

        {/* Thank you message */}
        {submitted ? (
          <div className="text-center py-20 animate-fadeIn">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your wedding registration has been submitted successfully. We will review your details and contact you shortly.
            </p>
            {/* <button
              onClick={() => {
                // Optionally allow user to register again
                setSubmitted(false);
              }}
              className="bg-[#10325a] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0b264f] transition"
            >
              Register Another Wedding
            </button> */}
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-[#10325a] mb-6 text-center">Register Your Indian Wedding</h1>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Host Details */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Host Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="hostName" value={formData.hostName} onChange={handleChange} type="text" placeholder="Full Name of Host" className="border p-3 rounded w-full" required />
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="border p-3 rounded w-full" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone Number" className="border p-3 rounded w-full" required />
                  <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="City" className="border p-3 rounded w-full" required />
                  <input name="state" value={formData.state} onChange={handleChange} type="text" placeholder="State" className="border p-3 rounded w-full" />
                  <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Full Address" className="border p-3 rounded w-full" />
                </div>
              </div>

              {/* Wedding Details */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Wedding Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="brideName" value={formData.brideName} onChange={handleChange} type="text" placeholder="Bride's Name" className="border p-3 rounded w-full" required />
                  <input name="groomName" value={formData.groomName} onChange={handleChange} type="text" placeholder="Groom's Name" className="border p-3 rounded w-full" required />
                  <input name="weddingTitle" value={formData.weddingTitle} onChange={handleChange} type="text" placeholder="Wedding Title" className="border p-3 rounded w-full" required />
                  <input name="startDate" value={formData.startDate} onChange={handleChange} type="date" className="border p-3 rounded w-full" required />
                  <input name="endDate" value={formData.endDate} onChange={handleChange} type="date" className="border p-3 rounded w-full" required />
                  <input name="venue" value={formData.venue} onChange={handleChange} type="text" placeholder="Venue / Location Name" className="border p-3 rounded w-full" required />
                </div>
                <textarea name="weddingDescription" value={formData.weddingDescription} onChange={handleChange} placeholder="Wedding Description" rows="4" className="border p-3 rounded w-full mt-4" required />
              </div>

              {/* Cultural Experiences */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Guest Invitation Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="guests" value={formData.guests} onChange={handleChange} type="number" placeholder="Max Number of Guests You Can Host" className="border p-3 rounded w-full" required />
                  <input name="languages" value={formData.languages} onChange={handleChange} type="text" placeholder="Languages Spoken by Host Family" className="border p-3 rounded w-full" />
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h2 className="text-xl font-semibold text-[#45a183] mb-2">Experience Pricing</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="experienceType" value="Free" checked={formData.experienceType === 'Free'} onChange={handleChange} />
                    <span>Free</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="experienceType" value="Paid" checked={formData.experienceType === 'Paid'} onChange={handleChange} />
                    <span>Paid</span>
                  </label>
                </div>
                {formData.experienceType === 'Paid' && (
                  <input name="pricePerGuest" value={formData.pricePerGuest} onChange={handleChange} type="number" placeholder="Price per Guest (INR)" className="border p-3 rounded w-full" />
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2">
                <input name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} required />
                <label>
                  I agree to host guests and accept the platform’s Terms & Privacy Policy.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit" className="bg-[#10325a] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0b264f] transition w-full">
                  Submit Wedding Registration
                </button>
              </div>

            </form>
          </>
        )}
      </div>
    </div>
  );
}
