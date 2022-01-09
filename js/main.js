const Data = data.data;

// Load All Lessons
function loadLessons() {
    const details = document.querySelector('.details');
    // console.log(details);
    details.innerHTML = `${Data.map(function (lesson) {
        return `<div class="books">
                                <div class="subjects" onclick="openLessons(this)">
                                    <div class="subject">
                                        <p>${lesson.name}</p>
                                    </div>
                                    <div class="subject-icon">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                </div>
                                <div class="lessons-container">
                                ${lesson.modules.map(function (chapter) {
            return `<div class="lesson-row" onclick="openBanner(${chapter._id})">
                                        <span>
                                            <i class="fab fa-youtube"></i>
                                        </span>
                                        <p>${chapter.name}</p>
                                        <span class="class-duration">${chapter.duration}</span>
                                        <span class="uncomplete">
                                            <i class="far fa-circle"></i>
                                        </span>
                                    </div>`
        }).join("")}
                                </div>
                            </div>`
    }).join("")}`
}
loadLessons();
function openLessons(lessons) {
    //Change LIst Toggle============01=======================
    const currentPanel = lessons.nextElementSibling;
    const showPanel = document.querySelector(".lessons-container-show");
    // if (showPanel && !currentPanel.classList.contains("lessons-container-show")) {
    //     showPanel.classList.remove("lessons-container-show");
    // }
    currentPanel.classList.toggle("lessons-container-show");
    //Change List Icon Toggle=========02=====================
    const changeIcon = lessons.childNodes[3].childNodes[1];
    // console.log(changeIcon)
    if (changeIcon && changeIcon.classList.contains('fa-plus')) {
        changeIcon.classList.remove("fa-plus");
        changeIcon.classList.add("fa-minus");

    } else if (changeIcon && changeIcon.classList.contains('fa-minus')) {
        changeIcon.classList.remove("fa-minus");
        changeIcon.classList.add("fa-plus");
    }
    // change Img=============03==================
}
function openBanner(id) {
    // const imgContainer = document.querySelector(".player-content");
    // const subContent = document.querySelector(".sub-content");
    const source = Data.modules[id];
    console.log(source)
    // console.log(imgContainer)
    // console.log(subContent)
    // console.log(id.id)
}