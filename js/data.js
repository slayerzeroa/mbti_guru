const main = document.querySelector("#main");
const mbti = document.querySelector("#mbti");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];

function goguru(){
  let guruname = setname();
  let guruname1 = toVar(guruname);
  result.style.WebkitAnimation = "fadeOut 1s";
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    guruname1.style.WebkitAnimation = "fadeIn 1s";
    guruname1.style.animation = "fadeIn 1s";
    setTimeout(() => {
      result.style.display = "none";
      guruname1.style.display = "block";
    }, 200)})
}

function toVar(varString) {
    var myVar = eval(valString);
    return myVar;
}

function setname(){
  var pointArray = [
    { name: 'ISTJ', value: 0, key: 0 },
    { name: 'ISFJ', value: 0, key: 1 },
    { name: 'INFJ', value: 0, key: 2 },
    { name: 'INTJ', value: 0, key: 3 },
    { name: 'ISTP', value: 0, key: 4 },
    { name: 'ISFP', value: 0, key: 5 },
    { name: 'INFP', value: 0, key: 6 },
    { name: 'INTP', value: 0, key: 7 },
    { name: 'ESTP', value: 0, key: 8 },
    { name: 'ESFP', value: 0, key: 9 },
    { name: 'ENFP', value: 0, key: 10 },
    { name: 'ENTP', value: 0, key: 11 },
    { name: 'ESTJ', value: 0, key: 12 },
    { name: 'ESFJ', value: 0, key: 13 },
    { name: 'ENFJ', value: 0, key: 14 },
    { name: 'ENTJ', value: 0, key: 15 },
  ]

  for(let i = 0; i < endPoint; i++){
    var target = qnaList[i].a[select[i]];
    for(let j = 0; j < target.type.length; j++){
      for(let k = 0; k < pointArray.length; k++){
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value += 1;
        }
      }
    }
  }

  var resultArray = pointArray.sort(function (a, b){
    if(a.value > b.value){
      return -1;
    }
    if(a.value < b.value){
      return 1;
    }
    return 0;
  })
  console.log(resultArray);
  let returnname = resultArray[0].name;
  return returnname;
}

function calculate(){
  var pointArray = [
    { name: 'ISTJ', value: 0, key: 0 },
    { name: 'ISFJ', value: 0, key: 1 },
    { name: 'INFJ', value: 0, key: 2 },
    { name: 'INTJ', value: 0, key: 3 },
    { name: 'ISTP', value: 0, key: 4 },
    { name: 'ISFP', value: 0, key: 5 },
    { name: 'INFP', value: 0, key: 6 },
    { name: 'INTP', value: 0, key: 7 },
    { name: 'ESTP', value: 0, key: 8 },
    { name: 'ESFP', value: 0, key: 9 },
    { name: 'ENFP', value: 0, key: 10 },
    { name: 'ENTP', value: 0, key: 11 },
    { name: 'ESTJ', value: 0, key: 12 },
    { name: 'ESFJ', value: 0, key: 13 },
    { name: 'ENFJ', value: 0, key: 14 },
    { name: 'ENTJ', value: 0, key: 15 },
  ]

  for(let i = 0; i < endPoint; i++){
    var target = qnaList[i].a[select[i]];
    for(let j = 0; j < target.type.length; j++){
      for(let k = 0; k < pointArray.length; k++){
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value += 1;
        }
      }
    }
  }

  var resultArray = pointArray.sort(function (a, b){
    if(a.value > b.value){
      return -1;
    }
    if(a.value < b.value){
      return 1;
    }
    return 0;
  })
  console.log(resultArray);
  let returnword = resultArray[0].key;
  return returnword;
}

function setResult(){
  let point = calculate();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  // var resultImg = document.createElement('img');
  // const imgDiv = document.querySelector('#resultImg');
  // var imgURL = 'img/imagee-' + point + '.png';
  // resultImg1.src = imgURL;
  // resultImg.alt = point;
  // resultImg.classList.add('img-fluid')
  // imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goresult(){
  mbti.style.WebkitAnimation = "fadeOut 1s";
  mbti.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      mbti.style.display = "none";
      result.style.display = "block";
    }, 200)})

    console.log(select);
    setResult();
    calculate();
}

function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList')
  answer.classList.add('my-3')
  answer.classList.add('py-3')
  answer.classList.add('mx-auto')
  answer.classList.add('fadeIn')
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 1s";
      children[i].style.animation = "fadeOut 1s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      next(++qIdx);
    }, 950)
  }, false)
}

function next(qIdx){
  if(qIdx === endPoint){
    goresult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
 main.style.WebkitAnimation = "fadeOut 1s";
 main.style.animation = "fadeOut 1s";
 setTimeout(() => {
   mbti.style.WebkitAnimation = "fadeIn 1s";
   mbti.style.animation = "fadeIn 1s";
   setTimeout(() => {
     main.style.display = "none";
     mbti.style.display = "block";
   }, 200)
   let qIdx = 0;
   next(qIdx);
 }, 200);
}
