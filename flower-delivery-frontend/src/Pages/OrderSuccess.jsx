import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

function OrderSuccess() {
	const location = useLocation()
	const navigate = useNavigate()
	const [reference, setReference] = useState(null)

	useEffect(() => {
		// Get reference from location state
		const ref = location.state?.reference

		if (!ref) {
			// If no reference, redirect after a short delay
			const timer = setTimeout(() => {
				navigate('/')
			}, 100)
			return () => clearTimeout(timer)
		}

		setReference(ref)
	}, [location, navigate])

	if (!reference) {
		return (
			<div className="container mx-auto px-4 py-16 max-w-2xl text-center">
				<p>Redirecting...</p>
			</div>
		)
	}

	return (
		<div className="container mx-auto px-4 py-16 max-w-2xl text-center">
			<FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
			<h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
			<p className="text-gray-600 mb-2">
				Thank you for your purchase. Your order has been confirmed.
			</p>
			<p className="text-sm text-gray-500 mb-8">
				Payment Reference: {reference}
			</p>
			<div className="space-y-4">
				<p className="text-gray-700">
					You will receive an email confirmation shortly with your order
					details.
				</p>
				<div className="flex gap-4 justify-center mt-8">
					<Link
						to="/"
						className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
					>
						Continue Shopping
					</Link>
				</div>
			</div>
		</div>
	)
}

export default OrderSuccess
