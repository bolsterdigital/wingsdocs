import styles from './CaseCard.module.css';

function CaseCard(title, description, image) {
  return (
    <div class="card-demo">
      <div class="card">
        <div class="card__image">
          <img src={image} alt={title} title={title} />
        </div>
        <div class="card__body">
          <h4>{title}</h4>
          <small>{description}</small>
        </div>
        <div class="card__footer">
          <button class="button button--primary button--block">Visit</button>
        </div>
      </div>
    </div>
  );
}

export default CaseCard();
