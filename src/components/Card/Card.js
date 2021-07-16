import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  id,
  title,
  imgUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imgUrl, price }

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="10" y="20" rx="10" ry="10" width="160" height="90" />
          <rect x="10" y="123" rx="3" ry="3" width="160" height="15" />
          <rect x="10" y="142" rx="3" ry="3" width="100" height="15" />
          <rect x="10" y="199" rx="3" ry="3" width="80" height="25" />
          <rect x="111" y="191" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
                alt="Unliked"
              />
            </div>
          )}
          <img width={133} height={122} src={imgUrl} alt="1" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;
