const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const vision = require('@google-cloud/vision');

const app = express();
const port = process.env.PORT || 80;

const fileToGenerativePart = async (path: string, mimeType: string) => {
  try {
    const data = await fs.promises.readFile(path);
    return {
      inlineData: {
        data: data.toString("base64"),
        mimeType
      },
    };
  } catch (error) {
    console.error('Erro ao processar o arquivo:', error);
    return null;
  }
};

app.get('/', async (req: any, res: any) => {
  try {
    const prompt = 'Extrair texto da imagem de hidrometro'
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
    });
    const imageData = await fileToGenerativePart('./assets/hidrometro.jpg', 'image/jpeg');
    if (!imageData) {
      return res.status(500).json({ error: 'Erro ao processar a imagem2' });
    }

    const generatedContent = await model.generateContent([prompt, imageData]);

    res.json(generatedContent);
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});