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
    clone.querySelector('.heart-icon').addEventListener('click', () => {
      this.onAddLike();
    });

    const heartCountEl = clone.querySelector('.heart-count');
    this.likesCountEl = heartCountEl;
    this.likesCountEl.textContent = routeData.likes;

    if (routeData.isFavorite) {
      clone.querySelector('.heart-icon').classList.add('heart-icon__active');
    }

    const imgEl = clone.querySelector('.route-header img');
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
    formEl.addEventListener('submit', (event) => {
      event.preventDefault();

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
      span.textContent = comment.text + " — ";

      const i = document.createElement('i');
      i.className = 'route-comments-date';
      i.textContent = comment.date;

      li.appendChild(strong);
      li.appendChild(span);
      span.appendChild(i);

      this.commentsListElement.appendChild(li);
    });
  }

  updateComments(updatedCommentsArray) {
    this._renderCommentsList(updatedCommentsArray);
    this.commentInputElement.value = '';
  }

  updateLikes(updatedLikes) {
    this.likesCountEl.textContent = updatedLikes;
  }

  updateFavoriteIds(updatedFavoriteIds, routeId) {
    const heartIconEl = document.querySelector(`#route-${routeId}-section .heart-icon`);
    if ( updatedFavoriteIds.includes(routeId)) {
      heartIconEl.classList.add('heart-icon__active');
    } else {
      heartIconEl.classList.remove('heart-icon__active');
    }
  }

  bindAddComment(handler) {
    this.onSubmitComment = handler;
  }

  bindAddLike(handler) {
    this.onAddLike = handler;
  }
}