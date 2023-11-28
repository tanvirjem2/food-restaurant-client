import bannerImg from '../assets/Banner.avif'

const Banner = () => {
    return (
        <div className='flex justify-evenly items-center mb-10 p-5 bg-[#e6e5e4] rounded-xl'>
            <div className='space-y-6 w-1/2'>
                <p className='font-extrabold text-5xl'>Welcome To Our Tasty<span className='text-[red]'>Food</span></p>
                <p className='text-[gray]'>Savor Culinary Excellence at Tasty Food - Where Every Bite Tells a Delicious Story! Indulge in Unforgettable Flavors and Impeccable Dining Experiences.</p>
                <div className='flex gap-6'>
                    <button className='rounded-3xl btn bg-[#fec223] font-extrabold'>Order now</button>
                    <button className='rounded-3xl btn btn-outline font-extrabold'>Book a Table</button>
                </div>
            </div>
            <div>
                <img className='lg:w-96 rounded-lg' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;