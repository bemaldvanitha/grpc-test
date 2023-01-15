const client = require("./client");

client.getAllNews({}, (error, news) => {
  if (!error) throw error;
  console.log(news);
});

// add a news
client.addNews(
  {
    title: "news title 3",
    body: "news body 3",
    postImage: "https://images.pexels.com/photos/14963733/pexels-photo-14963733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  (error, news) => {
    if (error) throw error;
    console.log("news create successfully");
  }
);

// edit a news
client.editNews(
  {
    id: 2,
    body: "new news body",
    postImage: "https://images.pexels.com/photos/7006187/pexels-photo-7006187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "title 2 edited",
  },
  (error, news) => {
    if (error) throw error;
    console.log("news edited successfully");
  }
);

// delete a news
client.deleteNews(
  {
    id: 2,
  },
  (error, news) => {
    if (error) throw error;
    console.log("news delete successfully");
  }
);
