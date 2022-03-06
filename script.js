//hungry - prag - hungry- prag

var countries = [
  {
    name: "Kapadokya",
    image: "1.jpg",
  },
  {
    name: "Trabzon",
    image: "2.jpg",
  },
  {
    name: "Gelibolu",
    image: "3.jpg",
  },
  {
    name: "İstanbul",
    image: "4.jpg",
  },
];

var index = 0;
var slaytCount = countries.length;
var interval;

var settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }
  document
    .querySelector(".card-img-top")
    .setAttribute("src", countries[index].image);

  document.querySelector(".card-title").textContent = countries[index].name;
}

// var countries icine link koyucaz. Kullanici Read more a bastiginda ise direk osayfaya gidecek document.querySelector(".card-link").setAttribute("href", models[index].link);
