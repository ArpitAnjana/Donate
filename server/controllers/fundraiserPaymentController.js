// // fundraiserPaymentController.js

// import { instance } from "../server.js";
// import crypto from "crypto";
// import { FundraiserPayment } from "../models/fundraiserPayment.js";

// export const checkoutFundraiser = async (req, res) => {
//   try {
//     // Logic for fundraiser checkout
//     const options = {
//       amount: Number(req.body.amount * 100),
//       currency: "INR",
//     };
//     const order = await instance.orders.create(options);

//     res.status(200).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// export const paymentVerificationFundraiser = async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
//       .update(body.toString())
//       .digest("hex");

//     const isAuthentic = expectedSignature === razorpay_signature;

//     if (isAuthentic) {
//       // Database logic for fundraiser payment verification
//       await FundraiserPayment.create({
//         target_amount,
//         paid_amount,
//         razorpay_order_id,
//         razorpay_payment_id,
//         razorpay_signature,
//       });

//       res.redirect(`http://localhost:3000/fundraiser-payment-success?reference=${razorpay_payment_id}`);
//     } else {
//       res.status(400).json({ success: false, message: "Invalid signature" });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };
