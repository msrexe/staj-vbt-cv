function getPositions() {
        //api işlemleri
    return ["IK", "Satış", "Java Developer", "C# Developer"]
}

function getTags() {
    //api işlemleri
    return ["C#", "Go", "Python", "Java", "JavaScript", "Docker", "Kubernetes", "React", "Angular", "TypeScript", "Vue", "Rust", "Elixir"]
}


function loadTags() {
    document.getElementById("tags").innerHTML = ''

    let tagsArr = getTags()
    tagsArr.forEach(element => {
        document.getElementById("tags").innerHTML += '<li><div><input type="checkbox" class="checkbox-round" id="'+element+'" /><label for="'+element+'">'+element+'</label></div></li>'
    });

}

function loadPositions() {
    document.getElementById("position-combobox").innerHTML = '<option value="" disabled selected>Pozisyon Seç</option>'

    let positionsArr = getPositions()
    positionsArr.forEach(element => {
        document.getElementById("position-combobox").innerHTML += '<option value="'+element+'">'+element+'</option>'
    });
}

function getSelectedTags() {
    let tagIds = getTags()
    let selectedTags = []
    tagIds.forEach(element => {
        if (document.getElementById(element).checked) {
            selectedTags.push(element)
        }
    });
    console.log(selectedTags);
    return selectedTags
}

function getSelectedPosition() {
    let dropdown = document.getElementById("position-combobox")
    return dropdown.value
}

function getUploadedFiles() {

}

function submitValues() {
    console.log(getSelectedPosition())
    console.log(getSelectedTags())
}


//on init
loadPositions()
loadTags()