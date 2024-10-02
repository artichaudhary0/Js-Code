// array = index , map : key
const quotes = [
  {
    text: "The best way to predict your future is to create it.",
    authorDetails: {
      personal: {
        fullName: {
          firstName: "Abraham",
          lastName: "Lincoln",
          middleNames: ["Hanks"],
        },
        birthInfo: {
          birthYear: 1809,
          birthMonth: "February",
          birthDay: 12,
          birthPlace: {
            city: "Hodgenville",
            state: "Kentucky",
            country: "USA",
          },
        },
        deathInfo: {
          deathYear: 1865,
          causeOfDeath: "Assassination",
          location: {
            city: "Washington, D.C.",
            place: "Ford's Theatre",
          },
        },
      },
      professional: {
        profession: "Politician",
        accomplishments: [
          {
            year: 1861,
            title: "16th President of the United States",
            details: {
              term: {
                startYear: 1861,
                endYear: 1865,
              },
              keyPolicies: [
                "Emancipation Proclamation",
                "Civil War Leadership",
              ],
            },
          },
          {
            year: 1863,
            title: "Emancipation Proclamation",
            details: {
              impact: "Freed slaves in Confederate states",
              // quotes[0]["authorDetails"]["professional"]["accomplishments"][1][details]["relatedLaws"]
              relatedLaws: [{ name: "13th Amendment", ratifiedYear: 1865 }],
            },
          },
        ],
      },
      family: {
        spouse: {
          name: "Mary Todd Lincoln",
          marriageYear: 1842,
        },
        children: [
          { name: "Robert Todd Lincoln", birthYear: 1843 },
          { name: "Edward Baker Lincoln", birthYear: 1846, deathYear: 1850 },
        ],
      },
    },
    category: {
      mainCategory: {
        name: "Motivation",
        relatedCategories: {
          success: {
            description: "Related to achieving goals",
            exampleQuotes: [
              "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            ],
          },
        },
      },
      subcategories: [
        "Leadership",
        {
          name: "Self-improvement",
          resources: [
            { title: "7 Habits of Highly Effective People", type: "Book" },
            { title: "How to Win Friends and Influence People", type: "Book" },
          ],
        },
      ],
    },
    year: 1861,
    tags: [
      { type: "keyword", value: "future" },
      { type: "keyword", value: "motivation" },
      { type: "theme", value: "self-improvement" },
    ],
    source: {
      publication: {
        title: "Speech",
        type: "Public Address",
        location: {
          venue: "Illinois State Capitol",
          city: "Springfield",
          country: "USA",
        },
      },
      additionalDetails: {
        audience: "General Public",
        context: {
          historicalPeriod: "Civil War",
          keyEvents: ["Union Victory", "Abolition of Slavery"],
        },
      },
    },
    reviews: [
      {
        reviewer: {
          name: "Jane Smith",
          profile: {
            occupation: "Motivational Speaker",
            location: {
              city: "Los Angeles",
              country: "USA",
            },
          },
        },
        rating: 4,
        comment: "Great wisdom for leadership.",
        interactions: {
          likes: 85,
          shares: 20,
          replies: [
            { user: "Chris", reply: "Very insightful!" },
            { user: "Dana", reply: "I use this quote in my seminars." },
          ],
        },

        reviewTimestamp: {
          date: "2023-09-18",
          time: "09:15:47",
          extra: {
            reviewer: {
              name: "John Doe",
              profile: {
                occupation: "Historian",
                location: {
                  city: "New York",
                  country: "USA",
                },
              },
            },
            rating: 5,
            comment: "Inspirational and timeless.",
            interactions: {
              likes: 120,
              shares: 30,
              replies: [
                {
                  user: "Alice",
                  reply: "I agree, it's very motivational!",
                  reviewer: {
                    name: "John Doe",
                    profile: {
                      occupation: "Historian",
                      location: {
                        city: "New York",
                        country: "USA",
                      },
                    },
                  },
                },
                { user: "Bob", reply: "Lincoln's speeches never get old." },
              ],
            },

            reviewTimestamp: [
              { date: "2023-09-15" },
              { time: "14:35:22" },
              {
                interactions: {
                  likes: 85,
                  shares: 20,
                  replies: [
                    { user: "Chris", reply: "Very insightful!" },
                    {
                      user: "Dana",
                      reply: "I use this quote in my seminars.",
                      replies: [
                        {
                          user: "Alice",
                          reply: "I agree, it's very motivational!",
                          reviewer: {
                            name: "John Doe",
                            profile: {
                              occupation: "Historian",
                              location: {
                                city: "New York",
                                country: "USA",
                              },
                            },
                          },
                        },
                        {
                          user: "Bob",
                          reply: {
                            result: [
                              "Lincoln's speeches never get old.",
                              "hello",
                              "Lincoln's speeches never get old.",
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            reviewTimestamp: [
              { date: "2023-09-15" },
              { time: "14:35:22" },
              {
                interactions: {
                  likes: 85,
                  shares: 20,
                  replies: [
                    { user: "Chris", reply: "Very insightful!" },
                    {
                      user: "Dana",
                      reply: "I use this quote in my seminars.",
                      replies: [
                        {
                          user: "Alice",
                          reply: "I agree, it's very motivational!",
                          reviewer: {
                            name: "John Doe",
                            profile: {
                              occupation: "Historian",
                              location: {
                                city: "New York",
                                country: "USA",
                              },
                            },
                          },
                        },
                        {
                          user: "Bob",
                          reply: {
                            result: [
                              "Lincoln's speeches never get old.",
                              "hello",
                              "Lincoln's speeches never get old.",
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            reviewTimestamp: [
              { date: "2023-09-15" },
              { time: "14:35:22" },
              {
                interactions: {
                  likes: 85,
                  shares: 20,
                  replies: [
                    { user: "Chris", reply: "Very insightful!" },
                    {
                      user: "Dana",
                      reply: "I use this quote in my seminars.",
                      replies: [
                        {
                          user: "Alice",
                          reply: "I agree, it's very motivational!",
                          reviewer: {
                            name: "John Doe",
                            profile: {
                              occupation: "Historian",
                              location: {
                                city: "New York",
                                country: "USA",
                              },
                            },
                          },
                        },
                        {
                          user: "Bob",
                          reply: {
                            result: [
                              "Lincoln's speeches never get old.",
                              "hello",
                              "Lincoln's speeches never get old.",
                            ],
                          },

                          replyy: {
                            reply: {
                              result: [
                                "Lincoln's speeches never get old.",
                                "hello",
                                "Lincoln's speeches never get old.",
                                {
                                  user: "Alice",
                                  reply: "I agree, it's very motivational!",
                                  reviewer: {
                                    name: "John Doe",
                                    profile: {
                                      occupation: "Historian",
                                      location: {
                                        city: "New York",
                                        country: "USA",
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    ],
  },
];
quotes[0]["reviews"][0]["reviewTimestamp"]["extra"]["reviewTimestamp"][2][
  "interactions"
].replies[1]["replies"][0].reviewer.profile.location.country;
console.log();
