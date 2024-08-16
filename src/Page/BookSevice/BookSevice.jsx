import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {
  // Load service data from the router loader
  const service = useLoaderData();
  const { _id, title, price, img } = service || {}; // Destructure with fallback
  const { user } = useContext(AuthContext);

  console.log("Service Data:",  _id); // Verify the service data

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const bookings = {
      customerName: name,
      email,
      date,
      img,
      service: title || "",
      service_id: _id,
      price: price,
    };

   

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Booking Response:", data);
        if (data.insertedId) {
          alert('This service booking success fully')
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="m-5 flex flex-col items-center justify-center w-auto">
      <div className="mb-4 grid grid-cols-2">
        <img src={img} alt="" className="h-40" />
        <div className="text-lg">
          <p className="font-bold">
            <span className="font-bold text-xl">Service Name:</span > {title}
          </p>
          <p className="font-bold">
            <span className="font-bold text-xl">Price:</span> {price}
          </p>
        </div>
      </div>
      <form onSubmit={handleCheckOut}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mx-12">
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={ user?.displayName}
              className="bg-silver rounded mt-2 h-10 w-96 border-metal"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="date">
              <span className="label-text font-bold">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="bg-silver rounded mt-2 h-10 w-96 border-metal"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="bg-silver rounded mt-2 h-10 w-96 border-metal"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="price">
              <span className="label-text font-bold">Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="bg-silver rounded mt-2 h-10 w-96 border-metal"
              readOnly
            />
          </div>
          <div className="w-full">
            <label className="label" htmlFor="title">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              defaultValue={title}
              placeholder="Your Message"
              className="bg-silver rounded mt-2 h-10 w-full border-metal"
            />
          </div>
        </div>
        <div className="mx-12">
          <input
            type="submit"
            value="Booking Confirm"
            className="mt-4 px-4 py-2 bg-blue-500 bg-btnrr rounded w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;

