import AddAMark from "./AddAMark/AddAMark";
import CheckboxItems from "./InputField/CheckboxItems";
import TextInput from "./InputField/TextInput";
import CommuneVillage from "./SelectOption/CommuneVillage";
import DayMonthYears from "./SelectOption/DayMonthYears";
import InAForestOf from "./SelectOption/InAForestOf";
import ClaimPV from "./Upload/ClaimPV";

const FormDetails = () => {
  const fromTitle = (idx, text) => (
    <>
      <h2>
        {" "}
        <span> {idx} </span> {text}{" "}
      </h2>

      <hr />
    </>
  );
  return (
    <section className="py-16">
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

          {/* Form */}
          <form>
            {/*  Tell us who you are */}
            <div>
              {fromTitle("1. ", " Tell us who you are")}

              {/* Name fields */}
              <div>
                {/* First Name */}
                {
                  <TextInput
                    id="firstName"
                    type="text"
                    label="first name"
                    placeholder="Ex: lon"
                    require={true}
                  />
                }

                {/* Name */}
                {
                  <TextInput
                    id="Name"
                    type="text"
                    label="name"
                    placeholder="Ex: Popescu"
                    require={true}
                  />
                }
              </div>

              {/* address fields */}
              <div>
                {/* Address */}
                {
                  <TextInput
                    id="address"
                    type="text"
                    label="address"
                    placeholder="Ex: Main Street, 21"
                    require={true}
                  />
                }

                {/* City */}
                {
                  <TextInput
                    id="city"
                    type="text"
                    label="City"
                    placeholder="Ex: lasi"
                    require={true}
                  />
                }
              </div>

              {/* Contact fields */}
              <div>
                {/* TelePhone */}
                {
                  <TextInput
                    id="telephone"
                    type="text"
                    label="telephone"
                    placeholder="Ex: 06468739172"
                    require={true}
                  />
                }

                {/* Email */}
                {
                  <TextInput
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Ex: adresa.ta@mgmail.com"
                    require={true}
                  />
                }

                {/* Ci Series */}
                {
                  <TextInput
                    id="CiSeries"
                    type="text"
                    label="ci series"
                    placeholder="Ex: ds"
                    require={true}
                  />
                }

                {/* ci number */}
                {
                  <TextInput
                    id="ciNumber"
                    type="text"
                    label="ci number"
                    placeholder="Ex: ds"
                    require={true}
                  />
                }

                <p>
                  {`The personal data will not be published on the site, but we need them to be able to register the notification, according to the regulations in force (Ordinance no. 27/30.01.2002)`}
                </p>
              </div>
            </div>

            {/* Tell us where it happened */}
            <div>
              {/* Commune village select */}
              <div> {<CommuneVillage />} </div>

              {/* When You Noticed */}
              {<DayMonthYears />}

              {/* Add A Mark */}
              {<AddAMark />}

              {/* In A Forest Of  */}
              {<InAForestOf />}

              {/* ON AN AREA OF ​​MINIMUM */}
              {
                <TextInput
                  id="minimumArea"
                  type="text"
                  label="ON AN AREA OF ​​MINIMUM"
                  placeholder=" "
                  require={true}
                />
              }

              {/* WITH THE INSCRIPTION */}
              {
                <TextInput
                  id="minimumArea"
                  type="text"
                  label="WITH THE INSCRIPTION"
                  placeholder=" "
                  require={false}
                />
              }
            </div>

            {/* Illegal activity you noticed */}
            <div>
              {fromTitle(
                "3. ",
                ` Tell us who you are ${(<span>(select at least one)</span>)}`
              )}

              {/* selected checkbox */}
              <div>{<CheckboxItems />}</div>
            </div>

            {/* Upload photos or video to support your claim: */}
            <div>
              {fromTitle(
                "4. ",
                ` Upload photos or video to support your claim: `
              )}

              {/* upload functionality */}
              <div>
                <ClaimPV />
              </div>

              {/* Accept */}
              <div>
                <label htmlFor="acceptAllCn">
                  I have the possibility and availability to travel to the area
                  together with the investigative team
                </label>
                <input type="checkbox" name="acceptAllCn" id="acceptAllCn" />
              </div>

              <p>
                {" "}
                I want you to check the situation in the area and send me the
                inspection report to the email address provided, as well as to
                info.romania@greenpeace.org{" "}
              </p>

              <div>
                <button
                  type="submit"
                  className="bg-primary py-2 px-9 rounded-lg"
                >
                  {" "}
                  Send{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormDetails;
