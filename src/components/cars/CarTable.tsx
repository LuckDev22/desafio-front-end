import { FiMoreVertical } from "react-icons/fi";

interface CarTableProps {
    cars: {
        id: number;
        car: string;
        imageUrl: string;
        nextReservation: string;
        status: string;
        rating: string;
    }[];
}

const CarTable = ({ cars }: CarTableProps) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="table-auto w-full bg-white border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-4 px-4 text-gray-500 text-xs uppercase font-semibold text-left">
                            Car
                        </th>
                        <th className="py-4 px-4 text-gray-500 text-xs uppercase font-semibold text-left">
                            Next Reservation
                        </th>
                        <th className="py-4 px-4 text-gray-500 text-xs uppercase font-semibold text-left">
                            Status
                        </th>
                        <th className="py-4 px-4 text-gray-500 text-xs uppercase font-semibold text-left">
                            Rating
                        </th>
                        <th className="py-4 px-4 text-gray-500 text-xs uppercase font-semibold text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id} className="border-b border-gray-200">
                            <td className="py-1 px-4">
                                <div className="flex items-center">
                                    <img
                                        src={car.imageUrl}
                                        alt={car.car}
                                        className="w-12 h-12 object-cover mr-2"
                                    />
                                    <span className="text-xs font-semibold text-gray-900">
                                        {car.car}
                                    </span>
                                </div>
                            </td>
                            <td className="py-4 px-4 text-gray-500 text-xs font-semibold">
                                {car.nextReservation}
                            </td>
                            <td className="py-4 px-4">
                                <span
                                    className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-md ${
                                        car.status === "Available"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                    } text-center`}
                                >
                                    {car.status}
                                </span>
                            </td>
                            <td className="py-4 px-4 color-gray-900">
                                <span className="h-5 w-5">{car.rating}</span>
                            </td>
                            <td className="py-4 px-4 text-black flex justify-center">
                                <div className="flex">
                                    <button className="border-none w-6 h-6">
                                        <FiMoreVertical
                                            style={{ color: "black" }}
                                            size={30}
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarTable;
