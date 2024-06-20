document.addEventListener('DOMContentLoaded', async () => {
    try {
        const email = 'i.abdulkhakov@innopolis.university';
        const responseId = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
        const comicId = await responseId.text();

        const responseComic = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        const comicData = await responseComic.json();
        console.log(comicData);

        document.getElementById('comic-img').src = comicData.img;
        document.getElementById('comic-img').alt = comicData.alt;
        document.getElementById('comic-title').textContent = comicData.safe_title;
        const date = new Date(comicData.year, comicData.month - 1, comicData.day);
        document.getElementById('comic-date').textContent = `Published on: ${date.toLocaleDateString()}`;

    } catch (error) {
        console.error('Error fetching comic:', error);
    }
});
