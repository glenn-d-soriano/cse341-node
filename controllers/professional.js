const getAll = (req, res) => {
  res.json({
    "professionalName": "Glenn Soriano",
    "nameLink": {
      "firstName": "Glenn",
      "url": "https://github.com/glenn-d-soriano"
    },
    "base64Image": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    "firstName": "Glenn",
    "primaryDescription": " is a Software Engineering student.",
    "workDescription1": "I am building a Node.js API for my CSE 341 class.",
    "workDescription2": "This project uses Express and CORS to communicate with a frontend.",
    "linkTitleText": "My Professional Links",
    "linkedInLink": {
      "link": "https://linkedin.com",
      "text": "LinkedIn"
    },
    "githubLink": {
      "link": "https://github.com/glenn-d-soriano",
      "text": "GitHub"
    },
    "contactText": "Contact me at glenn@email.com"
  });
}; 

module.exports = { getAll };