const CheckItem = ({ data }) => {
  const { id, htmlId, img, label } = data;

  let markup;

  if (htmlId == "abandonedWood") {
    markup = (
      <div className="flex items-start justify-start">
        <div>
          <label htmlFor={id}>
            <div className="flex items-start justify-start">
              <figure className="w-[6.5rem] h-[6.5rem]">
                <img className="w-full h-full" src={img} alt="" />
              </figure>
              <span>{label}</span>
            </div>
          </label>
          <input className="hidden" id={id} type="checkbox" />
        </div>

        <select
          name="data[Report][activity_abandoned_wood]"
          className="form-control select"
          autoComplete="off"
          data-live-search="1"
          id="ReportActivityAbandonedWood"
        >
          <option value="">CHOOSE AN OPTION</option>
          <option value="Parchet">Parquet</option>
          <option value="în pădure">in the forest</option>
          <option value="Pe marginea drumurilor și potecilor">
            On the sides of roads and paths
          </option>
          <option value="În albia râului">In the riverbed</option>
          <option value="La platforma primară">At the primary platform</option>
        </select>
      </div>
    );
  } else {
    markup = (
      <div className="flex items-start justify-start">
        <label htmlFor={htmlId}>
          <div className="flex items-start justify-start">
            <figure className="w-[6.5rem] h-[6.5rem]">
              <img className="w-full h-full" src={img} alt="" />
            </figure>
            <span>{label}</span>
          </div>
        </label>
        <input className="hidden" id={htmlId} type="checkbox" />
      </div>
    );
  }

  return markup;
};

export default CheckItem;
