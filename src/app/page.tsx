import carsData from "../../public/db";
import CarTable from "../components/cars/CarTable";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto my-8">
           
                <CarTable cars={carsData} />
           
        </div>
    );
};

export default Home;
