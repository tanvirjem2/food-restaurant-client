import burger from '../assets/Banner.avif'
import pasta from '../assets/Red-Sauce-Pasta-008.webp'
import sandwich from '../assets/Sandwich_PNG_Clipart_Vector_Picture.png'
import coldDrinks from '../assets/download.png'
import combo from '../assets/pngtree-delicious-burger-set-png-image_3198094.jpg'
import rightMark from '../assets/right_mark.png'
import delivery from '../assets/food_delivery.jpg'
import fry from '../assets/french-fries-10318928.webp'

const Home = () => {
    return (
        <div className='mt-20'>

            {/* Part - 1 */}

            <div className="flex flex-wrap gap-10 items-center justify-evenly">
                <img className='w-40 rounded-lg' src={burger} alt="" />
                <img className='w-40 rounded-lg' src={fry} alt="" />
                <img className='w-40 rounded-lg' src={pasta} alt="" />
                <img className='w-40 rounded-lg' src={sandwich} alt="" />
                <img className='w-40 rounded-lg' src={coldDrinks} alt="" />
                <img className='w-40 rounded-lg' src={combo} alt="" />
            </div>

            {/* Part - 2 */}

            <div className='flex flex-wrap-reverse items-center justify-evenly p-10'>
                <div>
                    <img className='w-96' src={sandwich} alt="" />
                </div>
                <div className='w-[500px] space-y-4 my-20'>
                    <h1 className='font-extrabold text-5xl'>About Tasty <span className='text-[red]'>Foods</span></h1>
                    <p className='text-[gray]'>
                        Welcome to About Tasty Food a culinary journey that transcends palates and celebrates the art of gastronomy. We take pride in curating a menu that combines passion with flavors, offering a delightful symphony of tastes crafted to tantalize your taste buds.
                    </p>
                    <p className='text-[gray]'>
                        Join us on a gastronomic adventure where every dish tells a story of culinary expertise, quality ingredients, and a commitment to delivering an exceptional dining experience.
                    </p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <img className='rounded-full w-10' src={rightMark} alt="" />
                            <p className='font-extrabold'>Delicious & Healthy Foods</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className='rounded-full w-10' src={rightMark} alt="" />
                            <p className='font-extrabold'>Best Price & Offers</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className='rounded-full w-10' src={rightMark} alt="" />
                            <p className='font-extrabold'>Made By Fresh Ingredients</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <button className='rounded-3xl btn bg-[#fec223] font-extrabold'>Order now</button>
                        <button className='rounded-3xl btn btn-outline font-extrabold'>Read More</button>
                    </div>
                </div>
            </div>

            {/* Part - 3 */}

            <div className='flex flex-wrap items-center justify-evenly rounded-xl p-10'>
                <div className='flex-1 space-y-6'>
                    <h1 className='text-5xl font-extrabold'>Choose your favorite food</h1>
                    <p className='text-[gray]'>
                        Indulging in my favorite, [favorite food], is like a flavor-packed journey in just a few bites. Each taste is a burst of happiness, making it more than just a meal it's a simple joy that brightens my day.
                    </p>
                </div>
                <div className='flex-1 p-10'>
                    <img className='rounded-xl' src={delivery} alt="" />
                </div>
                <div className='flex-1 lg:text-right space-y-6'>
                    <h1 className='text-5xl font-extrabold'>Order Online and Get Fast Delivery</h1>
                    <p className='text-[gray]'>
                        Order online for a hassle-free experience and enjoy fast delivery to your doorstep. Convenience at its best!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;