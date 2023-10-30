const CheckItem = ({ data }) => {
  const { id, htmlId, img, label } = data;

  let markup;

  if (htmlId == "abandonedWood") {
    markup = (
      <div>
        <div>
          <label htmlFor={id}>
            <div>
              <figure>
                <img src={img} alt="" />
              </figure>
              <span>{label}</span>
            </div>
          </label>
          <input id={id} type="checkbox" />
        </div>

        <select
          name="data[Report][activity_abandoned_wood]"
          class="form-control select"
          autocomplete="off"
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
      <div>
        <label htmlFor={htmlId}>
          <div>
            <figure>
              <img src={img} alt="" />
            </figure>
            <span>{label}</span>
          </div>
        </label>
        <input id={htmlId} type="checkbox" />
      </div>
    );
  }

  return markup;
};

export default CheckItem;
