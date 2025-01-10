import { promises as fs } from 'fs';
async function fecthJSON(){
  try{
    const data = await fs.readFile('./me.json', 'utf-8');
    const json = JSON.parse(data);
    console.log(json);
  }
  catch (error) {
  console.error('Error fetching JSON:', error);
  }
}
fecthJSON();