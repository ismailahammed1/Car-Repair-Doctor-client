const Bookingrows = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, email, img, price, service, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{service}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{service}</span>
      </td>
      <td>{email}</td>
      <td>${price}</td>
      <th>
        {status === 'confirm' ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default Bookingrows;
