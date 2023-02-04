//LOCAL DATA
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk artisan kinfolk thundercats thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Gflexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


// GETTING ELEMENTS FROM THE DOM
const userPic = document.getElementById('user-image');
const userName = document.querySelector('.name');
const userJob = document.querySelector('.job');
const userDes = document.querySelector('.description');
const supriseBtn = document.getElementById('suprise');
const fwardBtn = document.querySelector('.fward-btn');
const bwardBtn = document.querySelector('.bward-btn');



//EVENT LISTENERS FOR RANDOM CLICKS
supriseBtn.addEventListener("click", function() {
    var num = randomNumbers();
    var item = reviews[num];  
    changeUI(item);
});


//RANDOM DIGIT GENERATOR
function randomNumbers (){
    return Math.floor(Math.random() * reviews.length);
}

//DEFAULT PROFILE 
let start = 0
init = reviews[0];  
changeUI(init);

//WHEN BACKWARD BUTTON IS CLICKED
bwardBtn.addEventListener("click", function () {
  var startPlus, prop ;
  startPlus = start--
  if(startPlus >= 0 && startPlus < reviews.length){
    prop = reviews[startPlus];  
    console.log(startPlus);
    changeUI(prop);
  }else{
    startPlus === (reviews.length - 1);
  }  
});

//WHEN FORWARD BUTTON IS CLICKED
fwardBtn.addEventListener("click", function () {
  var startPlus, prop ;
  startPlus = start++
  if(startPlus >= 0 && startPlus < reviews.length){
    prop = reviews[startPlus];  
    console.log(startPlus);
    changeUI(prop);
  }else{
    startPlus === (reviews.length - 1);
      
  } 
    
});

//WRITING A FUNCTION TO CHANGE THE UI
function changeUI(current){
  userName.textContent = current.name;
  userJob.textContent = current.job;
  userDes.textContent = current.text;
  userPic.src = current.img;
};

