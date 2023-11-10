import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <div>
      <Header />
      <div className="min-h-min container px-24 mt-12 pb-36">
        <div className="">
          <p className="font-semibold">ForestWatch Team</p>
          <p>Zurich Switzerland</p>
          <p>Email: forestwatch000@gmail.com</p>
        </div>
        <div className="mt-12">
          <p className="font-semibold">Disclaimer</p>
          <p>
            The author assumes no liability for the correctness, accuracy,
            timeliness, reliability and completeness of the information.
            Liability claims against the author for material or immaterial
            damage resulting from access to, use or non-use of the published
            information, from misuse of the connection or from technical
            malfunctions are excluded.
            <br />
            <br />
            All offers are non-binding. The author expressly reserves the right
            to change, add to, or delete parts of the pages or the entire offer
            without prior notice, or to temporarily or permanently cease
            publication
            <br />
            <br />
            <p>
              <span className="font-semibold">
                Disclaimer for content and links
              </span>
              <br /> References and links to third party websites are outside
              our area of responsibility. It rejected any responsibility for
              such websites. Access to and use of such websites is at the user's
              own risk.
              <br />
              <br />
              <span className="font-semibold">Copyright declaration</span>{" "}
              <br /> The copyrights and all other rights to content, images,
              photos or other files on this website belong exclusively to NAME
              NAME or the specifically named rights holders. The written consent
              of the copyright holder must be obtained in advance for the
              reproduction of any elements.
            </p>
          </p>
        </div>
      </div>

      <footer className="border border-gray-100 text-gray-800 py-6">
        <div className="container mx-auto text-center">
          <div className="flex gap-12 justify-center items-center">
            <p className="text-lg">
              &copy; 2023 Forest Watch. All rights reserved.
            </p>
            <Link
              to={"/impressum"}
              className="bg-primary px-6 w-36 py-2 rounded-md text-white"
            >
              Impressum
            </Link>
          </div>
          <div className="flex gap-12 justify-center items-center mt-3">
            <p className="">
              Contact us at{" "}
              <a
                href="mailto:forestwatch000@gmail.com"
                className="text-blue-300 hover:text-blue-400"
              >
                forestwatch000@gmail.com
              </a>
            </p>
            <Link
              to={"/data-privacy"}
              className="bg-primary px-6 ms-8 w-36 py-2 rounded-md text-white"
            >
              Data Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
