import messageModel from "./messageModel.js";

const messageCreate = async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    
    const newMessage = await messageModel.create({
      email,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      message: newMessage
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export default messageCreate;