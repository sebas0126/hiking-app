// js/views/RouteView.js

export class RouteView {
  constructor() {
    this.template = document.getElementById('route-card-template');

    this.commentsListElement = null;
    this.commentInputElement = null;
  }

  render(routeData) {
    const clone = this.template.content.cloneNode(true);

    const sectionEl = clone.querySelector('.route');
    if (sectionEl) sectionEl.id = `route-${routeData.id}-section`;

    clone.querySelector('.route-title').textContent = routeData.title;
    clone.querySelector('.route-description').textContent = routeData.description;

    const imgEl = clone.querySelector('.route-image img');
    imgEl.src = routeData.image;
    imgEl.alt = routeData.title;

    const infoSpans = clone.querySelectorAll('.route-info span');
    if (infoSpans.length >= 3) {
      infoSpans[0].textContent = routeData.distance;
      infoSpans[1].textContent = routeData.difficulty;
      infoSpans[2].textContent = routeData.time;
    }

    this.commentsListElement = clone.querySelector('.route-comments-list');
    this.commentInputElement = clone.querySelector('.route-comments-textarea');

    this._renderCommentsList(routeData.comments);

    const formEl = clone.querySelector('.route-comments-form');
    formEl.addEventListener('submit', (evento) => {
      evento.preventDefault();

      const newCommentText = this.commentInputElement.value.trim();

      if (newCommentText !== '' && typeof this.onSubmitComment === 'function') {
        this.onSubmitComment(newCommentText);
      }
    });

    return clone;
  }

  _renderCommentsList(commentsArray) {
    this.commentsListElement.innerHTML = '';

    commentsArray.forEach(comment => {
      const li = document.createElement('li');
      li.className = 'route-comments-item';

      const strong = document.createElement('strong');
      strong.textContent = comment.author;

      const span = document.createElement('span');
      span.className = 'route-comments-message';
      span.textContent = comment.text;

      const i = document.createElement('i');
      i.className = 'route-comments-date';
      i.textContent = comment.date;

      li.appendChild(strong);
      li.appendChild(span);
      li.appendChild(i);

      this.commentsListElement.appendChild(li);
    });
  }

  updateComments(updatedCommentsArray) {
    this._renderCommentsList(updatedCommentsArray);
    this.commentInputElement.value = '';
  }

  bindAddComment(handler) {
    this.onSubmitComment = handler;
  }
}