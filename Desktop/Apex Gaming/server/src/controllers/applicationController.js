const Application = require('../models/Application');
const { uploadToCloudinary } = require('../utils/helpers');

exports.submitApplication = async (req, res, next) => {
  try {
    const body = { ...req.body };
    if (req.files?.resume?.[0]) {
      const result = await uploadToCloudinary(req.files.resume[0].buffer, 'applications');
      body.resume = result.secure_url;
    }
    if (req.files?.clips) {
      body.gameplayClips = [];
      for (const file of req.files.clips) {
        const result = await uploadToCloudinary(file.buffer, 'applications/clips');
        body.gameplayClips.push(result.secure_url);
      }
    }
    const application = await Application.create(body);
    res.status(201).json({ success: true, data: application, message: 'Application submitted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const app = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, notes: req.body.notes },
      { new: true }
    );
    res.json({ success: true, data: app });
  } catch (error) {
    next(error);
  }
};
