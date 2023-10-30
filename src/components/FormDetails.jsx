import TextInput from "./InputField/TextInput";

const FormDetails = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {/* top description */}
          <div>
            <p>
              In order to provide relevant information and clues to the Forest
              Guard or the local Forest Ranger, it is important to document the
              situation we encounter as well as possible.
            </p>

            <p>
              {`Download the "Greenpeace Guide" for details on what information to write down or photograph. The notification will be forwarded to the responsible authorities in the area where the problem was observed.`}{" "}
            </p>
          </div>

          <form>
            {/*  Tell us who you are */}
            <div>
              <h1> Tell us who you are </h1>
              <hr />

              <div>
                {
                  <TextInput
                    id="firstName"
                    type="text"
                    label="first name"
                    placeholder="Ex: lon"
                    require={true}
                  />
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormDetails;
