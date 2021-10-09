import styles from './CaseCard.module.css';

function CaseCard(title, description, image) {
  return (
    <div className="card-demo">
      <div className="card">
        <div className="card__image">
          <img src={image} alt={title} title={title} />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <small>{description}</small>
        </div>
        <div className="card__footer">
          <button className="button button--primary button--block">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseCard();
