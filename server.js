import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

mongoose.connect('mongodb://localhost:27017/Achievements').then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema with status
const certificateSchema = new mongoose.Schema({
  achievement: String,
  category: String,
  image: String,
  date: String,
  status: { type: String, default: 'pending' }
}, { collection: 'Certificates' });

const Certificate = mongoose.model('Certificate', certificateSchema);

app.get('/', (req, res) => {
  res.send('Welcome to Innovation Excellence Portal API');
});

// Submit new certificate (default status: pending)
app.post('/certificates', async (req, res) => {
  try {
    const { achievement, category, image, date } = req.body;
    const newCert = new Certificate({ achievement, category, image, date, status: 'pending' });
    await newCert.save();
    res.status(201).json({ message: 'Certificate submitted for approval' });
  } catch (err) {
    console.error('Submission error:', err);
    res.status(500).json({ error: 'Submission failed' });
  }
});

// Fetch all certificates 
app.get('/certificates', async (req, res) => {
  try {
    const certificates = await Certificate.find(); // No filter
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
});


// Approve a certificate (PATCH preferred for partial update)
app.patch('/certificates/:id/approve', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Certificate.findByIdAndUpdate(
      id,
      { status: 'approved' },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    res.status(200).json({ message: 'Certificate approved successfully', data: result });
  } catch (error) {
    console.error('Approval error:', error);
    res.status(500).json({ error: 'Approval failed' });
  }
});

// Delete a certificate
app.delete('/certificates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Certificate.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    res.status(200).json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    console.error('Deletion error:', error);
    res.status(500).json({ error: 'Failed to delete certificate' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
