document.addEventListener('DOMContentLoaded', () => {
    const editInfoBtn = document.getElementById('edit-info-btn');
    const addSubjectBtn = document.getElementById('add-subject-btn');
    const addCommentBtn = document.getElementById('add-comment-btn');
    const uploadArticleBtn = document.getElementById('upload-article-btn');

    editInfoBtn.addEventListener('click', () => {
        const name = prompt('Nhập họ tên:', document.getElementById('name').innerText);
        const dob = prompt('Nhập ngày sinh:', document.getElementById('dob').innerText);
        const email = prompt('Nhập email:', document.getElementById('email').innerText);

        if (name) document.getElementById('name').innerText = name;
        if (dob) document.getElementById('dob').innerText = dob;
        if (email) document.getElementById('email').innerText = email;
    });

    addSubjectBtn.addEventListener('click', () => {
        const newSubject = document.getElementById('new-subject').value;
        if (newSubject) {
            const li = document.createElement('li');
            li.innerText = newSubject;
            document.getElementById('subject-list').appendChild(li);
            document.getElementById('new-subject').value = '';
        }
    });

    addCommentBtn.addEventListener('click', () => {
        const newComment = document.getElementById('new-comment').value;
        if (newComment) {
            const li = document.createElement('li');
            li.innerText = newComment;
            document.getElementById('comment-list').appendChild(li);
            document.getElementById('new-comment').value = '';
        }
    });

    uploadArticleBtn.addEventListener('click', () => {
        const uploadInput = document.getElementById('upload-article');
        if (uploadInput.files.length > 0) {
            const file = uploadInput.files[0];
            const li = document.createElement('li');
            li.innerHTML = `<a href="${URL.createObjectURL(file)}" target="_blank">${file.name}</a>`;
            document.getElementById('article-list').appendChild(li);
            uploadInput.value = '';
        }
    });
});
