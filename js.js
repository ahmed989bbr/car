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