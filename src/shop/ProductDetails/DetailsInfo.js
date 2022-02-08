import React from "react";
import Grid from "@material-ui/core/Grid";

const DetailsInfo = () => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <div className="productDescription">
        <div className="productMoreSubtitle">
          <p>
            Love plain furniture? Then this is the item for you. Is comfortable
            and it currently on sale
          </p>
        </div>

        <div className="productMoreDesc">
          <Grid item xs={6} md={4} lg={4}>
            <section>
              <div>
                <h5>ProductDetails</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit euismod
                  magnis sodales habitasse ut pharetra enim, auctor sociis
                  vestibulum netus
                </p>
                <h6>
                  <small>Specifications</small>
                </h6>
                <p>
                  suspendisse viverra phasellus tempus mattis vel duis erat.
                  Libero feugiat pretium dis aliquet in hac, lectus semper
                  posuere luctus iaculis inceptos
                </p>
                <h6>
                  <small>Manufacturer</small>
                </h6>
                <p>
                  Das aliquet in hac, lectus sempers himenaeos class in a, nam
                  lacus ante dictumst habitant aptent tincidunt.
                </p>
              </div>
            </section>
          </Grid>
          <Grid item xs={6} md={4} lg={4}>
            <section>
              <div>
                <h5>Size Guide</h5>
                <p>
                  Bitasse ut pharetra enim, auctor sociis vestibulum netus.
                  Placerat sem sed erat parturient turpis et arcu velit, purus
                  leo porttitor nulla neque himenaeos class in a, nam lacus ante
                  dictumst habitant aptent tincidunt.
                </p>
                <h6>
                  <small>Manufacturer</small>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit euismod
                  magnis sodales habitasse ut pharetra enim.
                </p>
              </div>
            </section>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <section className="productLastSection">
              <div>
                <h5>Items Like This</h5>
                <p>
                  Libero feugiat pretium dis aliquet in hac, lectus semper
                  posuere arcu velit purus.
                </p>
                <div className="productMoreLikethis">
                  <ul>
                    <li>
                      <a
                        className="likethisLink"
                        href="#morelikethis"
                        rel="nonreferrer nonopenenr"
                        title="title">
                        dis aliquet in hac
                      </a>
                    </li>
                    <li>
                      <a
                        className="likethisLink"
                        href="#morelikethis"
                        rel="nonreferrer nonopenenr"
                        title="title">
                        dis aliquet in hac
                      </a>
                    </li>
                    <li>
                      <a
                        className="likethisLink"
                        href="#morelikethis"
                        rel="nonreferrer nonopenenr"
                        title="title">
                        dis aliquet in hac
                      </a>
                    </li>
                  </ul>
                </div>
                <h6>
                  <small>We thought you might like this</small>
                </h6>
                <p>Libero feugiat pretium dis aliquet in hac.</p>
                <div className="productMoreLikethis">
                  <ul>
                    <li>
                      <a
                        className="likethisLink"
                        href="#morelikethis"
                        rel="nonreferrer nonopenenr"
                        title="title">
                        dis aliquet in hac
                      </a>
                    </li>
                    <li>
                      <a
                        className="likethisLink"
                        href="#morelikethis"
                        rel="nonreferrer nonopenenr"
                        title="title">
                        dis aliquet in hac
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default DetailsInfo;
