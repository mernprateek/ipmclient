import React from "react";
function Index() {
    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className="w-full px-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                            </div>
                            <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                <p className="text-xl text-center text-gray-800 font-normal mb-1">Andres Berlin</p>
                                <p className="text-center text-base text-gray-600">Chief Executive Officer</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mx-4 mb-20 xl:max-w-sm lg:w-1/2 relative">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://cdn.tuk.dev/assets/side-view-woman-reading-sofa_23-2148294040.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                            </div>
                            <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                <p className="text-xl text-center text-gray-800 font-normal mb-1">Silene Tokyo</p>
                                <p className="text-center text-base text-gray-600">Chief Marketing Officer</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                            </div>
                            <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                <p className="text-xl text-center text-gray-800 font-normal mb-1">Richard Johnson</p>
                                <p className="text-center text-base text-gray-600">Head of Talent Manegement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
