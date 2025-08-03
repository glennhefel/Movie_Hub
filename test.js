import mongoose from 'mongoose';

const Rating = mongoose.model("Rating", ratingSchema);

// Replace these IDs with actual ObjectIds from your Media and User collections
const sampleMediaId = "64cf67e3ecfa7e1cd436d123"; // <--- Replace with actual media _id
const sampleUserId = "64cf6894ecfa7e1cd436d456";  // <--- Replace with actual user _id

mongoose.connect('mongodb+srv://mythhunter19:nope@fate.rmek02r.mongodb.net/?retryWrites=true&w=majority&appName=fate');

const run = async () => {
  try {
    await Rating.create({
      media: sampleMediaId,
      user: sampleUserId,
      rating: 4.5,
      comment: "Amazing experience — loved the cinematography!",
      upvotes: 2,
      downvotes: 0
    });

    console.log("✅ Review inserted");
  } catch (err) {
    console.error("❌ Error inserting review:", err);
  } finally {
    mongoose.connection.close();
  }
};

run();