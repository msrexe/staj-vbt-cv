function getPositions() {
  //api işlemleri
  return ["IK", "Satış", "Java Developer", "C# Developer"];
}

function getTags() {
  //api işlemleri
  return [
    "C#",
    "Go",
    "Python",
    "Java",
    "JavaScript",
    "Docker",
    "Kubernetes",
    "React",
    "Angular",
    "TypeScript",
    "Vue",
    "Rust",
    "Elixir",
    "asd",
    "lfkld",
    "lfksdşl",
    "efksdşl",
    "lfksf",
    "sdkas",
    "sdlkşalf",
    "oqwkdlk",
    "dfksdşlf",
    "ofkşsdlkf",
  ];
}

function loadTags() {
  document.getElementById("tags").innerHTML = "";

  let tagsArr = getTags();
  tagsArr.forEach((element) => {
    document.getElementById("tags").innerHTML +=
      '<li><div class="tag"><input type="checkbox" class="checkbox-round" id="' +
      element +
      '" /><label for="' +
      element +
      '" >' +
      element +
      "</label></div></li>";
  });
}

function loadPositions() {
  document.getElementById("position-combobox").innerHTML =
    '<option value="" disabled selected>Pozisyon Seç</option>';

  let positionsArr = getPositions();
  positionsArr.forEach((element) => {
    document.getElementById("position-combobox").innerHTML +=
      '<option value="' + element + '">' + element + "</option>";
  });
}

function getSelectedTags() {
  let tagIds = getTags();
  let selectedTags = [];
  tagIds.forEach((element) => {
    if (document.getElementById(element).checked) {
      selectedTags.push(element);
    }
  });
  return selectedTags;
}

function getSelectedPosition() {
  let dropdown = document.getElementById("position-combobox");
  return dropdown.value;
}



function submitValues() {
  let selectedPosition = getSelectedPosition();
  let selectedTags = getSelectedTags();
  if (fileToUpload != null && selectedTags.length != 0 && selectedPosition != ''){
    console.log("gönderim başarılı")
  }else {
    
  }
}

//on init
loadPositions();
loadTags();

//drag & drop işlemleri
var fileToUpload = null
var dropZone = document.getElementById('drop-zone');

dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files;
    for (var i=0, file; file=files[i]; i++) {
        if (file.type.match(/.pdf/) || file.type.match(/.doc/) || file.type.match(/.docx/)) {
          dropZone.innerHTML = '<h4 style="text-align:center;">'+file.name+'</h4><br><button onClick="clearFile()">❌Temizle</button>'
          fileToUpload = file
        }
    }
});

function selectUploadFile() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf, .doc, .docx';
  input.onchange = e => { 
    fileToUpload = e.target.files[0];
    dropZone.innerHTML = '<h4 style="text-align:center;">'+fileToUpload.name+'</h4><br><button onClick="clearFile()">❌Temizle</button>'
  }

input.click();
}

function clearFile() {
  fileToUpload = null
  dropZone.innerHTML = `<div class="arrow">
  <svg
    width="58"
    height="49"
    viewBox="0 0 58 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.704834 10C0.704834 4.7533 4.95813 0.5 10.2048 0.5H47.8916C53.1383 0.5 57.3916 4.75329 57.3916 10V38.8281C57.3916 44.0748 53.1383 48.3281 47.8916 48.3281H10.2048C4.95813 48.3281 0.704834 44.0748 0.704834 38.8281V10Z"
      stroke="#6B5ACC"
    />
    <path
      d="M41.4824 20.8198C42.1632 20.2437 42.1632 19.194 41.4824 18.6178L34.8122 12.9719C31.5161 10.1819 26.6866 10.1819 23.3905 12.9719L16.7203 18.6178C16.0396 19.194 16.0396 20.2437 16.7203 20.8198C17.259 21.2758 18.0485 21.2751 18.5863 20.818L20.4375 19.2449C23.2348 16.8678 27.5332 18.8558 27.5332 22.5268L27.5332 32.718C27.5332 33.584 28.2353 34.2861 29.1014 34.2861C29.9674 34.2861 30.6695 33.584 30.6695 32.718L30.6695 22.5268C30.6695 18.8559 34.9679 16.8678 37.7652 19.2449L39.6164 20.818C40.1542 21.2751 40.9437 21.2758 41.4824 20.8198Z"
      fill="#6B5ACC"
    />
    <path
      d="M28.8605 40.9226L29.3421 40.9226C30.0752 40.9226 30.6694 40.3283 30.6694 39.5953C30.6694 38.8622 30.0752 38.268 29.3421 38.268L28.8605 38.268C28.1275 38.268 27.5332 38.8622 27.5332 39.5953C27.5332 40.3283 28.1275 40.9226 28.8605 40.9226Z"
      fill="#6B5ACC"
    />
  </svg>
</div>
<p>Sürükle Bırak</p>`
}
