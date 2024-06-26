import axios from 'axios';
import moment from 'moment';
import { ComicData } from './interfaces';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const email = 'i.abdulkhakov@innopolis.university';
    const responseId = await axios.get<string>(`https://fwd.innopolis.university/api/hw2?email=${email}`);
    const comicId = responseId.data;

    const responseComic = await axios.get<ComicData>(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const comicData = responseComic.data;

    const comicImg = document.getElementById('comic-img') as HTMLImageElement;
    const comicTitle = document.getElementById('comic-title') as HTMLHeadingElement;
    const comicDate = document.getElementById('comic-date') as HTMLParagraphElement;

    comicImg.src = comicData.img;
    comicImg.alt = comicData.alt;
    comicTitle.textContent = comicData.safe_title;

    const date = new Date(Number(comicData.year), Number(comicData.month) - 1, Number(comicData.day));
    comicDate.textContent = `Published: ${moment(date).fromNow()}`;

  } catch (error) {
    console.error('Error fetching comic:', error);
  }
});
