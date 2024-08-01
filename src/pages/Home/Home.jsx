import MainLayout from "../../layouts/MainLayout.jsx";

const Home = () => {
    return (
        <MainLayout>
            <div className="relative h-screen">
                <div className="absolute w-full top-1/3 z-50 text-gray-200 text-center">
                    <h1 className="font-playfair text-6xl uppercase">Thodoris <span
                        className="text-orange-400 font-extrabold">Nikolaidis</span></h1>
                    <p className="font-roboto text-gray-200 text-3xl">I am a Full Stack Developer</p>
                </div>
                <div
                    className="absolute top-0 right-0 left-0 bottom-0 z-30 bg-cover bg-center bg-home-bg opacity-50">
                </div>
                <div
                    className={`absolute top-0 right-0 left-0 bottom-0 z-0 bg-cover bg-center bg-home-img`}>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;