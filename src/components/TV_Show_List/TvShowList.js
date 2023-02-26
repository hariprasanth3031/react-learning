import s from "./style.module.css";

import { TVShowListItems } from "../TVShowListItems/TVShowListItems";



export function TvShowList({onClickItem,tvShowList}) {
  return (
    <div>
        <div className={s.title}>You are liking</div>
        <div className={s.list}>
            {
                tvShowList.map((tvShow) => {
                return (
                <span className={s.tv_show_items} key={tvShow.id}>
                    <TVShowListItems
                    tvShow={tvShow}
                    onClick={onClickItem}
                    />
                </span>
                );
            })}
        </div>
    </div>
  );
}
