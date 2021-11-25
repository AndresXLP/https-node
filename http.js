const https = require("https");

https.get("https://jsonplaceholder.typicode.com/todos", (resp) => {
  let data = [];

  resp.on("data", (chuck) => {
    data += chuck;
  });

  resp.on("end", () => {
    newData = JSON.parse(data);
    for (const key in newData) {
      const title = newData[key].title;
      const id = newData[key].id;
      const userId = newData[key].id;
      const completed = newData[key].completed ? "Completed" : "Not Completed";
      console.log(
        `Titulo ${title} (${completed})\n - id: ${id}\n - userId: ${userId}
        `
      );
    }
  });
});
