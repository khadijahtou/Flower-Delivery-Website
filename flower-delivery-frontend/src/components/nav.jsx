import { AiOutlineMenu, AiOutlinePinterest } from 'react-icons/ai'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
import useModalStore from '../store/useModalStore'
import useCartStore from '../store/useCartStore'
import toast from 'react-hot-toast'

export default function Navbar() {
	const { toggleModal, openModal } = useModalStore()
	const { isAuthenticated, logout } = useAuthStore()
	const { getTotalItems } = useCartStore()
	const cartItemCount = getTotalItems()

<<<<<<< HEAD
        {open && (
          <div className="lg:hidden border border-secondary bg-white absolute top-0 z-20 w-full md:w-1/2 ">
            <ul className="flex flex-col gap-3  font-medium divide-y divide-secondary">
              <button
                onClick={toggleNavBar}
                className="px-[14px] py-2 md:px-4 md:py-3"
              >
                {" "}
                <IoMdClose className="text-[28px]" />
              </button>
              <li>
                <Link to="/signIn" className="text-[18px] md:text-[21px] p-6">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="#shop" className="text-[18px] md:text-[21px] p-6">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-[18px] md:text-[21px] p-6">
                  Services
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-[18px] md:text-[21px] p-6">
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to={"/aboutus"}
                  className="text-[18px] md:text-[21px] p-6"
                >
                  About Us
                </Link>
              </li>
              <div className="text-secondary flex flex-col gap-4 p-6">
                <p className=" font-medium text-sm md:text-[16px]">
                  Shipping & returns
                </p>
                <p className=" font-medium text-sm md:text-[16px]">
                  Terms & conditions
                </p>
                <p className=" font-medium text-sm md:text-[16px]">
                  Privacy policy
                </p>
              </div>
              <div className="flex flex-row items-center justify-between  pt-4">
                <CiInstagram />
                <AiOutlinePinterest />
                <FiFacebook />
                <SlSocialTwitter />
                <PiTelegramLogo />
              </div>
              <div></div>
            </ul>
          </div>
        )}
        {open && (
          <div className="md:inset-0  md:bg-white/30    md:backdrop-blur-sm flex absolute z-10 top-0"></div>
        )}

        {active && (
          <div
            className="relative z-20  top-0 right-0  w-full  h-auto object-cover justify-end  bg-white
           lg:w-1/2 border border-secondary"
          >
            <div className=" flex flex-row border-b border-secondary md:py-[26px]  md:px-[40px] py-3 px-6">
              <h3 className="text-[16px]">Shopping cart</h3>
              <IoMdClose onClick={toggleCart} className="ml-auto " />
            </div>
            <div className="border-b border-secondary">
              <CartCard
                imgUrl={rosyDelight}
                title="Rosy Delight"
                quantity={1}
                price={100}
              />
            </div>
            <div className="flex flex-row justify-between py-[21px] pl-4 pr-[71px] md:p-[40px] border-b border-secondary">
              <p className="text-[18px]">Subtotal</p>
              <p className="text-[21px]">$100</p>
            </div>
            <div className="md:p-[40px] py-6 px-4 border-b border-secondary">
              <textarea
                placeholder="Gift Message"
                id=""
                className=" w-full h-[120px] border border-transparent hover:border-gray-400"
              ></textarea>
            </div>
            <div className="px-4 py-6 md:px-[40px] md:py-[45px]">
              <p className="text-center text-sm">
                Shipping & taxes calculated at checkout Free standard shipping
                within Kyiv
              </p>
            </div>
            <div className="">
              <Link to="/checkout">
                <button className="w-full bg-black text-white text-center md:h-[56px] h-[46px]">
                  Check Out{" "}
                </button>
              </Link>
            </div>
          </div>
        )}
        {active && (
          <div className="md:inset-0  md:bg-white/30    md:backdrop-blur-sm flex absolute z-10 top-0"></div>
        )}
      </header>
    </>
  );
=======
	const handleCartClick = () => {
		if (!isAuthenticated) {
			toast.error('Please sign in to view your cart')
			openModal('signIn')
			return
		}
		toggleModal('cart')
	}
	return (
		<>
			<header className="sticky z-10 top-0">
				<nav className=" bg-white border-b border-secondary flex flex-row justify-between items-center ">
					<div className="flex w-full lg:hidden">
						<button
							className="lg:hidden p-5 border-secondary border-r"
							onClick={() => toggleModal('mobileMenu')}
						>
							<AiOutlineMenu className="size-[18px]" />
						</button>
						<button
							className="p-5 border-secondary border-l ml-auto relative"
							onClick={handleCartClick}
						>
							<MdOutlineShoppingBag className="size-[18px]" />
							{isAuthenticated && cartItemCount > 0 && (
								<span className="absolute top-2 right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
									{cartItemCount}
								</span>
							)}
						</button>
					</div>
					<ul className="w-full hidden lg:flex">
						<li>
							<Link to={'/'} className="p-8 border-secondary border-r flex">
								Shop
							</Link>
						</li>
						<li>
							<Link
								to={'/aboutus'}
								className="p-8 border-secondary border-r flex"
							>
								Contact
							</Link>
						</li>
						<li className="ml-auto">
							{isAuthenticated ? (
								<button
									className="flex  border-r border-l p-8 border-secondary "
									onClick={() => logout()}
								>
									Sign Out
								</button>
							) : (
								<button
									onClick={() => toggleModal('signIn')}
									className="flex  border-r border-l p-8 border-secondary"
								>
									Sign In
								</button>
							)}
						</li>
						<li>
							<button
								className="p-8 border-secondary  text-center w-full flex relative"
								onClick={handleCartClick}
							>
								Cart
								{isAuthenticated && cartItemCount > 0 && (
									<span className="ml-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
										{cartItemCount}
									</span>
								)}
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
>>>>>>> f4855a4565984904169c8c4ca6162ef9b581214f
}
