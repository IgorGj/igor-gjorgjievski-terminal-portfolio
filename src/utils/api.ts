import axios from 'axios';
import config from '../../config.json';
// import fs from 'fs';
// import path from 'path';
export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

// export default function handler(req, res) {
//   const filePath = path.join(process.cwd(), 'public', 'Igor-Gjorgjievski-CV.pdf');

//   // Check if the file exists
//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ error: 'File not found' });
//   }

//   // Stream the file to the client
//   const fileStream = fs.createReadStream(filePath);
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'attachment; filename=CV.pdf');
//   fileStream.pipe(res);
// }
