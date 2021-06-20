const users = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Fierro",
    username: "mfierro31",
    email: "mfierro31@yahoo.com",
    password: "mrboobybuyer",
    favorites: [
      // Should be minimized location objects - we only need what the ListingCard component needs:
      // {
      //   id: 3,
      //   name: 'Citadel of Ricks',
      //   type: 'Space station',
      //   dimension: 'unknown',
      //   cost: 60000,
      //   alt_cost_curr: null,
      //   alt_cost_amt: null,
      //   image: "citadel_of_ricks.png"
      // }
    ],
    viewings: [
      // Should be objects with the following layout:
      // {
      //   id: 1,
      //   location: {
      //     id: 3,
      //     name: 'Citadel of Ricks',
      //     type: 'Space station',
      //     dimension: 'unknown',
      //     cost: 60000,
      //     alt_cost_curr: null,
      //     alt_cost_amt: null,
      //     image: "citadel_of_ricks.png",
      //     agent: {
      //       id: 103,
      //       name: "Doofus Rick",
      //       image: "doofus_rick.jpeg"
      //     }
      //   },
      //   date: "Sunday, June 6, 2021"
      // }
    ],
    reviews: [
      //
    ]
  }
];

export default users;