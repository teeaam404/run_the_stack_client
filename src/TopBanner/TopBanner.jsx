import './TopBanner.css'
const TopBanner = () => {
    return (
        <>
            <div className='bg-zinc-800 my-4 h-[620px]'>
                <div className='text-center banner-card'>
                    <div className='bg-orange-200 py-[60px] mt-14 ms-[180px]'>
                        <h2 className='text-lg'>Find the best answer to your technical <br /> question, help others answer theirs</h2>
                        <div className='bg-orange-500 py-[5px] mx-[120px] mt-3 rounded-md text-white'><h2>Join the Community</h2></div>
                    </div>
                    <div className='bg-green-200 py-[60px] mt-14 me-[180px]'>
                        <h2 className='text-lg'>Want a secure, private space for your <br /> technical knowledge?</h2>
                        <div className='bg-green-500 py-[5px] mx-[120px] mt-3 rounded-md text-white'><h2>Discover Teams</h2></div>
                    </div>
                </div>
                <div className='text-center pt-[50px]'>
                    <h2 className='text-[40px] text-white font-bold'>Every <span className='text-red-500'>game developer</span> has a  <br />tab open to Stack Overflow</h2>
                </div>
                <div className='text-center mt-[70px] last-banner'>
                    <div className='text-white'>
                        <h2 className='font-bold text-lg'>100+ million</h2>
                        <h5 className='text-[12px]'>monthly visitors to stack <br /> Overflow & stack Exchange</h5>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-bold text-lg'>45.1+ billion</h2>
                        <h5 className='text-[12px]'>Times a developer got help <br /> since 2008</h5>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-bold text-lg'>191% ROI</h2>
                        <h5 className='text-[12px]'>From companies using stack <br /> Overflow for Teams</h5>
                    </div>
                    <div className='text-white'>
                        <h2 className='font-bold text-lg'>5000+</h2>
                        <h5 className='text-[12px]'>Stack Overflow for Teams <br />instance active every day</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;