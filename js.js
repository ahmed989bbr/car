// let root = document.querySelector('.card-group');

async function s() {
    const time = new Date()
    const response = await fetch('./data.json');
    const json = await response.json();
    arr = [...json];
    console.log(arr); // Log inside the async function when arr is populated

    arr.forEach(el => {
        let div = document.createElement('div');
        div.innerHTML = `
            
                <div class="card">
                    <img src="${el.image}" class="card-img-top" alt="${el.title}">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.class}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated ${time.getFullYear()}</small>
                    </div>
                </div>
          
        `;
        root.appendChild(div);
    });
}

var arr;
s();



function loginFunction() {
    const loginU = document.querySelector('.Username');
    const password = document.querySelector('.Password');
    const subm = document.querySelector('.subm');

    const credentials = [
        { username: 'admin', password: 'admin' },
    ];

    const user = credentials.find(
        (user) => user.username === loginU.value && user.password === password.value
    );

    if (user) {
        // window.location.href = 'index.html';
        subm.href = "index.html"
    } else {
        alert('Invalid username or password');
    }
}



const videos = document.querySelectorAll('video');
const buttons = document.querySelectorAll('button');

videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
    pauseOtherVideos(video);
  });
});

videos.forEach(video => {
  video.addEventListener("mouseleave", () => {
    video.pause();
    pauseOtherVideos(video);
  });
});
function pauseOtherVideos(currentVideo) {
  videos.forEach(video => {
    if (video !== currentVideo) {
      video.pause();
    }
  });
}
