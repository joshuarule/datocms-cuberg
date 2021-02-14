import React, { useState } from "react";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import Cta from "../components/Cta";
import TextColumns from "../components/TextColumns";
import HeroText from "../components/HeroText";

export default ({
  data: {
    datoCmsPageCompany: pageData,
    allDatoCmsMilestone: milestones,
    allDatoCmsAward: awards,
    allDatoCmsPerson: people,
  },
}) => {
  const awardsByYear = {};
  awards.nodes.forEach((award) => {
    if (!awardsByYear[award.year]) {
      awardsByYear[award.year] = [];
    }
    awardsByYear[award.year].push(award);
  });

  // const [activeProfile, setActiveProfile] = useState(false)
  // const profileRef = useRef()

  // scroll on profile change
  // useEffect(() => {
  //   if (activeProfile && profileRef.current) {
  //     profileRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //     })
  //   }
  // }, [activeProfile, profileRef])

  // creates object of arrays for people
  const peopleByCategory = {};
  people.nodes.forEach((person) =>
    person.categories.forEach((item) => {
      if (!peopleByCategory[item.category]) {
        peopleByCategory[item.category] = [];
      }
      peopleByCategory[item.category].push(person);
    })
  );

  const [currentCategory, setCurrentCategory] = useState(
    Object.keys(peopleByCategory)[0]
  );

  return (
    <Layout>
      <Hero {...pageData.hero} className="mb-20" />
      <div className="container">
        <Cta {...pageData.ctaOne} />
        <HeroText {...pageData.heroText} className="text-center py-g" />
        <section>
          <nav className="my-f">
            <ul className="flex justify-center">
              {Object.keys(peopleByCategory).map((key) => {
                return (
                  <li
                    key={key}
                    className={`mr-e f-h3 border-b-2 border-transparent h2 font-medium pb-a ${
                      currentCategory === key
                        ? "border-blue text-black"
                        : "text-black-40"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setCurrentCategory(key);
                      }}
                    >
                      {key}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-4">
            {/* {activeProfile && (
              <Profile
                person={activeProfile.person}
                index={activeProfile.index}
                onClose={() => setActiveProfile(false)}
              />
            )} */}

            {peopleByCategory[currentCategory].map((person, i) => {
              return (
                <li className={`person mb-f relative order-${i} group`}>
                  <div className="flex justify-center md:block">
                    <div className="flex-1">
                      <div className="aspect-h-1 aspect-w-1 relative overflow-hidden mb-d border-b-10 border-black-20">
                        <Img
                          fluid={person.image.fluid}
                          alt={person.image.alt}
                          style={{
                            position: "absolute",
                          }}
                          imgStyle={{
                            height: "auto",
                          }}
                          className={`absolute`}
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="group-hover:text-seaGreen">
                    {person.firstName} {person.lastName}
                  </h4>
                  <p className="mb-c">{person.job}</p>
                  <p className="mb-c">{person.bio}</p>
                  <span className="group-hover:text-seaGreen">[Read More]</span>
                  <button
                    onClick={() => alert("set active profile")}
                    className="absolute block w-full top-0 right-0 bottom-0 left-0"
                  >
                    <span className="sr">Read Full Bio</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="bg-cyan">
        <section className="container text-white">
          <TextColumns {...pageData.textGrid} className="text-center py-f" />
        </section>
      </div>
      <div className="container">
        {/* Awards */}

        <section className="py-g mb-g">
          <h1 className="h1 mb-f text-center">{pageData.awardsTitle}</h1>
          <ul className="grid grid-cols-3">
            {Object.keys(awardsByYear).map((key) => {
              return (
                <li key={key}>
                  <div className="font-medium h2">{key}</div>
                  {awardsByYear[key].map((item) => {
                    return (
                      <dl key={item.comapny}>
                        <dt className="font-bold">{item.company}</dt>
                        <dd>{item.award}</dd>
                      </dl>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Timeline */}

        <section>
          <h1 className="h1 mb-f text-center">{pageData.timelineTitle}</h1>
          <ol className="timeline mx-20">
            {milestones.nodes.map((milestone) => (
              <li className="timeline-event border-r border-black-40 py-f pr-20 relative">
                <div className="timeline-event-content border-blue border-l-8  bg-wafer-20 py-d pl-10 pr-20">
                  <div className="font-bold mb-c">
                    {milestone.date} | {milestone.title}
                  </div>
                  <p className="h3">{milestone.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CompanyQuery {
    datoCmsPageCompany {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      hero {
        ...heroImageFields
      }
      ctaOne {
        ...ctaFields
      }
      textGrid {
        ...textColumnsFields
      }
      heroText {
        ...heroTextFields
      }
      timelineTitle
      awardsTitle
    }
    allDatoCmsMilestone {
      nodes {
        title
        text
        date
      }
    }
    allDatoCmsAward(sort: { fields: year }) {
      nodes {
        award
        company
        year(formatString: "YYYY")
      }
    }
    allDatoCmsPerson(sort: { fields: lastName }) {
      nodes {
        bio
        job
        firstName
        lastName
        image {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        categories {
          category
        }
      }
    }
  }
`;
