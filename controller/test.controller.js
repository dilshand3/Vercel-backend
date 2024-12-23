export const testcontroller = async (req,res) => {
    res.status(200).json({success: true, message: 'Test controller is working'});
}