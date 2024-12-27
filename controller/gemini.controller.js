import Gemini from "gemini-ai";
const API_KEY = process.env.API_KEY;
const gemini = new Gemini(API_KEY);


export const geminiContrller = async (req, res) => {
    const {text} = req.body;
    try {
        const data = text;
        const data1 = `translate in HINDI , dont send anything except HINDI tranlsation : ${data}`
        const ask = await gemini.ask(data1);
        res.status(200).json({ success: true, data: ask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

