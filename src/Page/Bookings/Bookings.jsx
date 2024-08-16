import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Bookingrows from "./Bookingrows";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;

  useEffect(() => {
    if (user?.email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [url, user]);

  const handleDelete = (id) => {
    const processed = confirm(`Are you sure you want to delete this?`);
    if (processed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const updatedBookings = bookings.map((booking) =>
            booking._id === id ? { ...booking, status: "confirm" } : booking
          );
          setBookings(updatedBookings);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="bg-neutral-300">
          <tr>
            <th>Delete</th>
            <th>Name</th>
            <th>Service</th>
            <th>Email</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <Bookingrows
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
