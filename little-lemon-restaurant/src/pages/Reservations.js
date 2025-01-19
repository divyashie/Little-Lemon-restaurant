import React, { useEffect, useState } from 'react';
import reservation_page from '../images/reservation_page.jpeg';

function Reservations() {
    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00']);
    const [bookings, setBookings] = useState({
        date: '',
        time: '17:00',
        guests: '',
        occasion: 'Birthday',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        localStorage.setItem('Bookings', JSON.stringify(bookings));
    }, [bookings]);

    const validateForm = () => {
        const newErrors = {};
        if (!bookings.date) {
            newErrors.date = 'Please select a valid date.';
        }
        if (!bookings.guests || bookings.guests < 1 || bookings.guests > 20) {
            newErrors.guests = 'Please enter a number of guests between 1 and 20.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            setBookings({
                date: '',
                time: '17:00',
                guests: '',
                occasion: 'Birthday',
            });
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookings({ ...bookings, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const renderFormContent = () => (
        <>
            <h2 className="form-title">Make Your Reservation</h2>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookings.date}
                    onChange={handleChange}
                    required
                />
                {errors.date && <p className="error-text">{errors.date}</p>}
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <select
                    id="time"
                    name="time"
                    value={bookings.time}
                    onChange={handleChange}
                    required
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of Guests</label>
                <input
                    type="number"
                    id="guests"
                    name="guests"
                    placeholder="1-20"
                    min="1"
                    max="20"
                    value={bookings.guests}
                    onChange={handleChange}
                    required
                />
                {errors.guests && <p className="error-text">{errors.guests}</p>}
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={bookings.occasion}
                    onChange={handleChange}
                    required
                >
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                    <option>Wedding</option>
                </select>
            </div>
            <div>
                <button type="submit">Reserve Now</button>
            </div>
        </>
    );

    return (
        <div className="reservations-container">
            <div className="reservations-background">
                <img
                    src={reservation_page}
                    alt="Reservation for amazing food"
                    className="reservation-image"
                />
                <div className="overlay-content">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="booking-form">
                            {renderFormContent()}
                        </form>
                    ) : (
                        <div className="confirmation-message">
                            <h1>Your booking has been confirmed!</h1>
                            <p>Thank you for choosing our restaurant!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Reservations;