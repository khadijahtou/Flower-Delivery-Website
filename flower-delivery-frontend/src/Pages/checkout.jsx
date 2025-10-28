import React, { useState, useEffect } from 'react'
import { TiLockClosedOutline } from 'react-icons/ti'
import CheckOutCard from '../components/checkOutCard'
import { useNavigate } from 'react-router-dom'
import useCartStore from '../store/useCartStore'
import useAuthStore from '../store/useAuthStore'
import toast from 'react-hot-toast'

function Checkout() {
	const navigate = useNavigate()
	const { items, getTotalPrice, clearCart } = useCartStore()
	const { user, isAuthenticated } = useAuthStore()

	const [customerInfo, setCustomerInfo] = useState({
		email: user?.email || '',
		name: user?.name || '',
		phone: '',
		address: '',
		city: '',
	})

	const [showForm, setShowForm] = useState(false)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)

	// Redirect if not authenticated or cart is empty
	useEffect(() => {
		if (isProcessingPayment) return

		if (!isAuthenticated) {
			toast.error('Please sign in to checkout')
			navigate('/')
			return
		}
		if (items.length === 0) {
			toast.error('Your cart is empty')
			navigate('/')
		}
	}, [isAuthenticated, items, navigate, isProcessingPayment])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setCustomerInfo((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handlePayment = () => {
		// Validate form
		if (
			!customerInfo.name ||
			!customerInfo.email ||
			!customerInfo.phone ||
			!customerInfo.address ||
			!customerInfo.city
		) {
			toast.error('Please fill in all delivery details')
			setShowForm(true)
			return
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(customerInfo.email)) {
			toast.error('Please enter a valid email address')
			return
		}

		const totalAmount = getTotalPrice()

		// Initialize Paystack
		const handler = window.PaystackPop.setup({
			key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
			email: customerInfo.email,
			amount: Math.round(totalAmount * 100), // Amount in kobo
			currency: 'NGN',
			ref: '' + Math.floor(Math.random() * 1000000000 + 1),
			metadata: {
				custom_fields: [
					{
						display_name: 'Customer Name',
						variable_name: 'customer_name',
						value: customerInfo.name,
					},
					{
						display_name: 'Phone Number',
						variable_name: 'phone_number',
						value: customerInfo.phone,
					},
					{
						display_name: 'Delivery Address',
						variable_name: 'delivery_address',
						value: `${customerInfo.address}, ${customerInfo.city}`,
					},
					{
						display_name: 'Cart Items',
						variable_name: 'cart_items',
						value: JSON.stringify(
							items.map((item) => ({
								name: item.name,
								quantity: item.quantity,
								price: item.price,
							}))
						),
					},
				],
			},
			callback: function (response) {
				console.log('Payment callback triggered:', response)
				setIsProcessingPayment(true)
				toast.success('Payment successful! Order confirmed.')
				console.log('Payment reference:', response.reference)
				console.log(
					'Navigating to order-success with reference:',
					response.reference
				)

				// Use setTimeout to ensure state is updated before navigation
				setTimeout(() => {
					clearCart()
					navigate('/order-success', {
						state: { reference: response.reference },
						replace: true,
					})
				}, 100)
			},
			onClose: function () {
				toast.error('Payment cancelled')
			},
		})

		handler.openIframe()
	}

	if (!isAuthenticated || items.length === 0) {
		return null
	}

	return (
		<div className="py-6 px-6 lg:w-1/2 md:py-[80px] md:px-[40px] bg-gray-200 flex flex-col gap-6">
			{/* Order Summary */}
			<div className="">
				{items.map((item) => (
					<CheckOutCard
						key={item.id}
						productImg={item.imageUrl}
						productName={item.name}
						quantity={item.quantity}
						price={item.price}
					/>
				))}
			</div>

			<div className="border-y border-tertiary flex flex-col gap-6 py-6">
				<div className="flex flex-row justify-between">
					<h4 className="text-[16px]">Subtotal</h4>
					<h5 className="text-[16px]">₦{getTotalPrice().toFixed(2)}</h5>
				</div>
			</div>

			<div className="flex flex-row justify-between">
				<h3 className="text-xl font-semibold">Total</h3>
				<h5 className="text-xl font-semibold">₦{getTotalPrice().toFixed(2)}</h5>
			</div>

			{/* Delivery Form */}
			{!showForm ? (
				<button
					onClick={() => setShowForm(true)}
					className="bg-gray-700 text-white w-full py-5 hover:bg-gray-800 transition-colors"
				>
					ENTER DELIVERY DETAILS
				</button>
			) : (
				<div className="bg-white p-6 rounded-lg space-y-4">
					<h3 className="text-lg font-semibold mb-4">Delivery Information</h3>

					<div>
						<label className="block text-sm font-medium mb-1">
							Full Name *
						</label>
						<input
							type="text"
							name="name"
							value={customerInfo.name}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Email Address *
						</label>
						<input
							type="email"
							name="email"
							value={customerInfo.email}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Phone Number *
						</label>
						<input
							type="tel"
							name="phone"
							value={customerInfo.phone}
							onChange={handleInputChange}
							placeholder="+234 xxx xxx xxxx"
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Delivery Address *
						</label>
						<input
							type="text"
							name="address"
							value={customerInfo.address}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
							required
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">City *</label>
						<input
							type="text"
							name="city"
							value={customerInfo.city}
							onChange={handleInputChange}
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-black"
							required
						/>
					</div>
				</div>
			)}

			<button
				onClick={handlePayment}
				className="bg-black text-white w-full py-5 hover:bg-gray-800 transition-colors"
			>
				CONTINUE TO PAYMENT
			</button>

			<div>
				<button className="flex items-center justify-center mx-auto mt-4 text-sm">
					Secure Checkout{' '}
					<TiLockClosedOutline className="ml-2 text-base text-[24px]" />
				</button>
			</div>
		</div>
	)
}

export default Checkout
