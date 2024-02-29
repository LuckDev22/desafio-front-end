import { FiMoreVertical } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { GoXCircleFill } from "react-icons/go";
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

const DesktopCarTable = ({ cars }: CarTableProps) => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 hidden md:block">
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
                        <th className="py-4 px-4 text-gray-500 text-xs uppercase font-semibold">
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
                            <td className="py-4 px-4 text-black">
                                <span className="h-5 w-5">{car.rating}</span>
                            </td>
                            <td className="py-4 px-4 text-black flex justify-center">
                                <div className="flex">
                                    <button className="border-none w-6 h-6">
                                        <FiMoreVertical
                                            style={{ color: "text-gray-800" }}
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

const MobileCarTable = ({ cars }: CarTableProps) => {
    return (
        <div className="md:hidden">
            <table className="w-full bg-white">
                <tbody>
                    {cars.map((car) => (
                        <tr
                            key={car.id}
                            className="border-b border-gray-200 space-y-4"
                        >
                            <td className="relative p-4">
                                <div className="flex items-center relative">
                                    {car.status === "Available" ? (
                                        <FaCircleCheck className="absolute top-1 left-1 text-green-600 w-6 h-6" />
                                    ) : (
                                        <GoXCircleFill className="absolute top-1 left-1 text-red-600 w-6 h-6" />
                                    )}
                                    <img
                                        src={car.imageUrl}
                                        alt={car.car}
                                        className="w-20 h-20 object-cover mr-2"
                                    />
                                    <div className="flex-col flex gap-1">
                                        <div className="font-semibold text-base text-gray-900">
                                            {car.car}
                                        </div>
                                        <div className="text-xs font-normal text-gray-500 ">{`Next Reservation: ${car.nextReservation}`}</div>
                                        <div className="text-xs font-normal text-gray-500 "></div>
                                        <div className="text-gray-900 font-black ">
                                            {car.rating}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-2 text-xs flex">
                                <button>
                                    <FiMoreVertical
                                        style={{ color: "text-gray-800" }}
                                        size={24}
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const CarTable = (props: CarTableProps) => {
    return (
        <>
            <DesktopCarTable {...props} />
            <MobileCarTable {...props} />
        </>
    );
};

export default CarTable;
