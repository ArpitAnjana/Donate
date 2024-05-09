import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);


// mongodb://localhost:27017

// Backend (Node.js with Express)

// Route to fetch existing fundraiser cards
// app.get('/api/fundraiser/cards', async (req, res) => {
//     try {
//         // Fetch fundraiser card data from the database
//         const cards = await FundraiserCardModel.find();
//         res.json(cards);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // Route to create a new fundraiser card
// app.post('/api/fundraiser/cards', async (req, res) => {
//     try {
//         // Extract fundraiser card data from request body
//         const cardData = req.body;

//         // Save the new fundraiser card data to the database
//         const newCard = new FundraiserCardModel(cardData);
//         await newCard.save();

//         res.status(201).send('Fundraiser card created successfully.');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });
