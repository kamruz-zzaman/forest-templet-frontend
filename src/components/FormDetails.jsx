import AddAMark from "./AddAMark/AddAMark";
import CheckboxItems from "./InputField/CheckboxItems";
import TextInput from "./InputField/TextInput";
import CommuneVillage from "./SelectOption/CommuneVillage";
import Country from "./SelectOption/Country";
import DayMonthYears from "./SelectOption/DayMonthYears";
import InAForestOf from "./SelectOption/InAForestOf";
import ClaimPV from "./Upload/ClaimPV";

const FormDetails = () => {
  // from title
  const fromTitle = (idx, text) => (
    <>
      <h2 className="text-[#333] font-bold text-sm">
        <span> {idx} </span> {text}{" "}
      </h2>

      <hr className="my-5 border border-[#eee]" />
    </>
  );

  return (
    <section className="px-32 py-16">
      <div className="container mx-auto">
        <div>
          {/* top description */}
          <div className="text-sm text-[#333] mb-2">
            <p className="mb-4">
              In order to provide relevant information and clues to the Forest
              Guard or the local Forest Ranger, it is important to document the
              situation we encounter as well as possible.
            </p>

            <p>
              {`Download the "Greenpeace Guide" for details on what information to write down or photograph. The notification will be forwarded to the responsible authorities in the area where the problem was observed.`}{" "}
            </p>
          </div>

          {/* Form */}
          <form className="mt-5">
            {/*  Tell us who you are */}
            <div className="grid grid-cols-12 gap-x-8">
              <div className="col-span-12">
                {fromTitle("1. ", " Tell us who you are")}
              </div>

              {/* First Name */}
              {
                <TextInput
                  id="firstName"
                  type="text"
                  label="first name"
                  placeholder="Ex: lon"
                  require={true}
                  style="col-span-6"
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
                  style="col-span-6"
                />
              }

              {/* Address */}
              {
                <TextInput
                  id="address"
                  type="text"
                  label="address"
                  placeholder="Ex: Main Street, 21"
                  require={true}
                  style="col-span-8"
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
                  style="col-span-4"
                />
              }

              {/* TelePhone */}
              {
                <TextInput
                  style="col-span-4"
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
                  style="col-span-4"
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
                  style="col-span-2"
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
                  style="col-span-2"
                  id="ciNumber"
                  type="text"
                  label="ci number"
                  placeholder="Ex: ds"
                  require={true}
                />
              }

              <div className="col-span-12 mb-5">
                <p>
                  {`The personal data will not be published on the site, but we need them to be able to register the notification, according to the regulations in force (Ordinance no. 27/30.01.2002)`}
                </p>
              </div>

              {/* Tell us where it happened */}
              <div className="col-span-12">
                {fromTitle("2. ", " Tell us where it happened")}
              </div>

              {/* Commune village select */}
              <div className="col-span-4"> {<CommuneVillage />} </div>
              <div className="col-span-4"> {<Country />} </div>

              {/* When You Noticed */}
              <div className="col-span-4">{<DayMonthYears />}</div>

              {/* HELPFUL LANDMARKS or Add A Mark */}
              <div className="col-span-12">{<AddAMark />}</div>

              {/* In A Forest Of  */}
              {<InAForestOf />}

              {/* ON AN AREA OF ​​MINIMUM */}
              {
                <TextInput
                  style="col-span-6"
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
                  style="col-span-6"
                  id="minimumArea"
                  type="text"
                  label="WITH THE INSCRIPTION"
                  placeholder=" "
                  require={false}
                />
              }

              {/* Illegal activity you noticed */}

              <div className="col-span-12">
                {fromTitle(
                  "3. ",
                  ` Tell us who you are ${(<span>(select at least one)</span>)}`
                )}
              </div>

              {/* selected checkbox */}
              <div className="col-span-12">{<CheckboxItems />}</div>

              <div className="col-span-12">
                {fromTitle(
                  "4. ",
                  ` Upload photos or video to support your claim: `
                )}
              </div>
            </div>
            {/* Upload photos or video to support your claim: */}

            {/* upload functionality */}
            <div>
              <ClaimPV />
            </div>

            {/* Accept */}
            <div className="col-span-12">
              <label htmlFor="acceptAllCn">
                I have the possibility and availability to travel to the area
                together with the investigative team
              </label>
              <input type="checkbox" name="acceptAllCn" id="acceptAllCn" />
            </div>

            <div className="col-span-12">
              <p>
                I want you to check the situation in the area and send me the
                inspection report to the email address provided, as well as to
                info.romania@greenpeace.org
              </p>
            </div>

            <div className="col-span-12">
              <button type="submit" className="bg-primary py-2 px-9 rounded-lg">
                {" "}
                Send{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormDetails;
