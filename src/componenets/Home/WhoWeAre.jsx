

const WhoWeAre = () => {
    return (
        <div className="grid grid-cols-2 h-[620px] ">
            <div>
                <div className="relative mt-24 ">
                    <div className="w-52 h-52 bg-[#66eb8e] absolute ">
                        
                    </div>
                    <div className="w-52 h-52 bg-[#26b1e9] absolute top-72 left-[270px]">
                        
                    </div>
                    <img src="https://i.ibb.co/9Ghqqst/tall.jpg" alt="" className="h-[520px] absolute top-8 left-8 w-[400px]" />
                </div>
                
            </div>
            <div className="flex flex-col items-center justify-center"> 
                    <h2 className="font-head text-[40px] font-extrabold mt-24 leading-10 mb-5">Unique Virtual Health Fair Experience</h2>
                    <p className="mr-10 font-body text-[18px]">A Health Fair Experience Like Never Before! Educational, Entertaining, and Engaging in the comfort and convenience of a professional creative virtual event. We customize all of our virtual health fairs to meet your needs. Your Employees will have easy access to registrations, benefits document uploads, and a learning library. </p>
                </div>
        </div>
    );
};

export default WhoWeAre;