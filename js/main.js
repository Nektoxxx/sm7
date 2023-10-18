//массив данных
let news = [
    {
        id: 1,
        name: "Глазами клоуна",
        author: "Генрих Белль",
        date: "11.11.2011",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione illum velit odit odio necessitatibus rerum iste dolor iusto doloremque. In aspernatur nulla nam sapiente ipsum voluptates itaque commodi tempora.'
    },
    {
        id: 2,
        name: "Над пропасть. во ржи",
        author: "Кто то",
        date: "23.12.2014",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione illum velit odit odio necessitatibus rerum iste dolor iusto doloremque. In aspernatur nulla nam sapiente ipsum voluptates itaque commodi tempora.'
    },
    {
        id: 3,
        name: "Апофиоз",
        author: "Магоед чебдаров",
        date: "01.07.2021",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione illum velit odit odio necessitatibus rerum iste dolor iusto doloremque. In aspernatur nulla nam sapiente ipsum voluptates itaque commodi tempora.'
    },
    {
        id: 4,
        name: "Гурен лаган",
        author: "Япошка",
        date: "17.05.1999",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione illum velit odit odio necessitatibus rerum iste dolor iusto doloremque. In aspernatur nulla nam sapiente ipsum voluptates itaque commodi tempora.'
    },
    {
        id: 5,
        name: "Король кринжа",
        author: "Галиев Вадим",
        date: "12.09.2004",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione illum velit odit odio necessitatibus rerum iste dolor iusto doloremque. In aspernatur nulla nam sapiente ipsum voluptates itaque commodi tempora.'
    }
]
//Добавление в массив новости
let inp = 0;
let count = 5;
let btn = document.querySelector(".button");
btn.addEventListener("click", function () {
    let inp = document.querySelectorAll(".input");
    count++;
    news.push({
        id: count,
        name: inp[0],
        author: inp[1],
        date: inp[2],
        text: inp[3]
    });
    let for_box = document.querySelector('.news_block_body')
    let box = '<div class="news">' +
        '<div class="news_title_box">' +
        '<div class="news_title">' + inp[0] + '</div>' +
        '<div class="news_date">' + inp[1] + '</div>' +
        '</div>' +
        '<div class="news_text">' + inp[2] + '</div>' +
        '<div class="news_footer">' +
        '<div class="news_avtor">' + inp[3] + '</div>' +
        '<div class="news_id">id: ' + count + '</div>' +
        '</div>' +
        '</div>';
    for_box.innerHTML += box;

})



//Вывод новости
for (let index = 0; index < news.length; index++) {
    let id = news[index].id
    let name = news[index].name
    let author = news[index].author
    let date = news[index].date
    let text = news[index].text
    console.log(index)

    let for_box = document.querySelector('.news_block_body')
    let box = '<div class="news">' +
        '<div class="news_title_box">' +
        '<div class="news_title">' + name + '</div>' +
        '<div class="news_date">' + date + '</div>' +
        '</div>' +
        '<div class="news_text">' + text + '</div>' +
        '<div class="news_footer">' +
        '<div class="news_avtor">' + author + '</div>' +
        '<div class="news_id">id: ' + id + '</div>' +
        '</div>' +
        '</div>';
    for_box.innerHTML += box;


}