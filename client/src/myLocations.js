import locations from './apiLocations';

const myLocations = [
  {
    description: "Are you a cronenberg and feel like an outcast everywhere you go?  Well, look no further than here!  Earth: Dimension C-137!  Here, by a happy accident, everyone was turned into cronenbergs by mad scientist Rick Sanchez.  Feel right at home here where you'll be surrounded by fellow cronenbergs!  Contact the agent today to view this planet!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "earth_c_137.jpeg",
      "earth_c_137_family.png"
    ],
    reviews: [
      {
        id: 1,
        text: "I'm a cronenberg, and I loved it!  Very nice neighborhoods all around the planet.  Made me feel safe and secure.  Definitely making this place my home!",
        user: {
          id: 1,
          username: "cronenMorty92"
        }
      },
      {
        id: 2,
        text: "Definitely not a place for non-cronenbergs!  I nearly died on that planet!",
        user: {
          id: 2,
          username: "jerr_jerr_69"
        }
      }
    ],
    agent: {
      id: 82,
      name: "Cronenberg Rick",
      image: "cronenberg_rick.jpeg"
    }
  },
  {
    description: "Are you a Rick or Morty trying to find your place in this crazy multiiverse?  Well, come on down to The Citadel!  Here, no Rick or Morty will be left behind.  Here, every Rick and Morty has value and a purpose.  And with the new leadership of President Morty, life is even better!  Crime is down, jobs are up, and reconstruction is in full swing.  The Citadel has never looked better!  Come make this place your home!",
    cost: 60000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "citadel_of_ricks.png",
      "citadel_of_ricks_ricks.png",
      "citadel_of_ricks_ricks_and_mortys.jpeg",
      "citadel_of_ricks_president_morty.png",
      "citadel_of_ricks_morty_takeover.jpeg"
    ],
    reviews: [
      {
        id: 3,
        text: "President Morty is the best, bro!  He personally greeted me on my visit to the Citadel and offered me a good-paying job if I moved there!  Totally doing it now!",
        user: {
          id: 3,
          username: "rocker_morty"
        }
      },
      {
        id: 4,
        text: "Well, President Morty might not be my flask of liquor, but damn it I'm impressed by this place.  It's really been cleaned up.  I'm seriously thinking of moving here now.",
        user: {
          id: 4,
          username: "greasy_rick"
        }
      }
    ],
    agent: {
      id: 103,
      name: "Doofus Rick",
      image: "doofus_rick.jpeg"
    }
  },
  {
    description: "Do you love the idea of spending the rest of your life in a creepy, Hell-like lair?  Looking for a place full of peace and quiet?  Visit Worldender's Lair today!  Worldender and his minions are long dead, so you have their lair all to yourself!  Contact the agent today!",
    cost: 10000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "worldenders_lair.png",
      "worldenders_lair_worldender_dead.jpeg"
    ],
    reviews: [
      {
        id: 5,
        text: "Dead, rotting bodies still litter the ground, but I'm a Satanist, so that don't bother me none!  I love the stench of death.",
        user: {
          id: 5,
          username: "Goth_Lord"
        }
      },
      {
        id: 6,
        text: "Totally unlivable.  No way in hell I'm ever living there!  Don't waste your time!",
        user: {
          id: 6,
          username: "Summers_Here"
        }
      }
    ],
    agent: {
      id: 340,
      name: "Supernova",
      image: "supernova.jpeg"
    }
  },
  {
    description: "Have you ever wanted to live in another person's body???  Well, now you can!  Anatomy Park, located inside young teenager, Ethan, is definitely a rival to Disneyland.  It features living, microscopic organisms as some of its attractions, as well as thrilling rides.  Make Anatomy Park your home today!  Units are being built just outside the park.  It's an exciting time to be inside Ethan!  Contact the agent today!",
    cost: 5000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "Anatomy_Park.png",
      "Anatomy_Park_spleen_mountain.jpeg",
      "Anatomy_Park_river.jpeg",
      "Anatomy_Park_pirates_of_the_pancreas.jpeg",
      "Anatomy_Park_its_a_small_small_intestine.jpeg",
      "Anatomy_Park_food_court.png",
      "Anatomy_Park_bladder_falls.png"
    ],
    reviews: [
      {
        id: 7,
        text: "Way better than Disneyland!  Definitely won't get tired of Anatomy Park!  Keep me here forever!  I'm in!",
        user: {
          id: 7,
          username: "pichael_thompson"
        }
      },
      {
        id: 8,
        text: "Most of Ethan is pretty cool, except for the colon.  Don't stay there.  It stinks so bad there.  And don't wander off too far from the park, Gonorrhea and Hepatitis B are constantly on the prowl and will eat you up in an instant if you're not careful!",
        user: {
          id: 8,
          username: "michael_thompson"
        }
      }
    ],
    agent: {
      id: 17,
      name: "Annie",
      image: "annie.jpeg"
    }
  },
  {
    description: "Ever fantasize about living inside of a TV?  Well, fantasy has become reality!  Live inside the world of Interdimensional Cable today!  Travel across dimensions and say hello to your favorite Interdimensional Cable stars like Ants In My Eyes Johnson, Glenn, Gazorpazorpfield, Ball Fondlers, and many more!  Contact the agent today!",
    cost: 25000,
    alt_cost_curr: "Brapples",
    alt_cost_amt: 50000,
    neighborhood: "OK",
    images: [
      "interdimensional_cable_ants_in_my_eyes_johnson.png",
      "interdimensional_cable_ball_fondlers.png",
      "interdimensional_cable_corn_people.png",
      "interdimensional_cable_gazorpazorpfield.jpeg",
      "interdimensional_cable_glenn.jpeg",
      "interdimensional_cable_jan_michael_vincents.jpg",
      "interdimensional_cable_lil_bits.png",
      "interdimensional_cable_opposite_got.jpeg",
      "interdimensional_cable_real_fake_doors.jpeg",
      "interdimensional_cable_stealy.jpeg",
      "interdimensional_cable_Strawberry_Smiggles.jpeg",
      "interdimensional_cable_two_brothers.png",
      "interdimensional_cable_unmuscular_michaels.png",
    ],
    reviews: [
      {
        id: 9,
        text: "Ball Fondlers were awesome!  Got to meet them and join them on a couple adventures.  I'm definitely spending the rest of my life here!",
        user: {
          id: 9,
          username: "n00b_master_69"
        }
      },
      {
        id: 10,
        text: "I was being shown around by Ants In My Eyes Johnson, but because he can't see or feel anything, Stealy started robbing him of all his clothes, then he took me and robbed me!  Watch out for Stealy.",
        user: {
          id: 10,
          username: "not_a_clone_beth"
        }
      }
    ],
    agent: {
      id: 20,
      name: "Ants In My Eyes Johnson",
      image: "ants_in_my_eyes_johnson.jpeg"
    }
  },
  {
    description: "Who doesn't wish they could live in an immortality field?  Here, at the Immortality Field Resort, they have recently put in houses, apartments, and condos on the resort grounds!  Now, you can enjoy immortality for as long as you want!  Eat as much as you want without having a heart attack, shoot your friends for real and watch them come back to life instantly, ride the Whirly Dirly!  It's all here at the Immortality Field Resort.  Check it out and make it your home today!",
    cost: 150000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "immortality_field_resort.png",
      "immortality_field_resort_fat_guy.jpeg",
      "immortality_field_resort_rick_and_jerry.jpeg",
      "immortality_field_resort_rick_dead.jpeg",
      "immortality_field_resort_ricks_friend.jpeg",
      "immortality_field_resort_riding_whirly_dirly.jpg",
      "immortality_field_resort_whirly_dirly.jpeg"
    ],
    reviews: [
      {
        id: 11,
        text: "Beautiful place!  I lived out my 300 fantasy by dressing up as a Spartan and had my friends shoot me with arrows, stab me spears, and hack me to pieces with swords.  It was the coolest thing ever!",
        user: {
          id: 11,
          username: "molon_labe_480"
        }
      }
    ],
    agent: {
      id: 320,
      name: "Shnoopy Bloopers",
      image: "shnoopy_bloopers.jpeg"
    }
  },
  {
    description: "Want to live out your Mad Max fantasies for the rest of your life?  Then move on over to the Post-Apocalyptic Dimension and make Post-Apocalyptic Earth your forever home!  Enjoy the violent shows at the Blood Dome, savor the exotic cuisine of human and mutant human BBQ'd meat in your backyard, go on violent Mad Max-like car chases through the desert wasteland... It's all here on Post-Apocalyptic Earth!  View now!",
    cost: 25000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Dangerous",
    images: [
      "post_apocalyptic_earth_car_chase.png",
      "post_apocalyptic_earth.png",
      "post_apocalyptic_earth_mutants.png",
      "post_apocalyptic_earth_house.png",
      "post_apocalyptic_earth_convoy.jpeg",
      "post_apocalyptic_earth_blood_dome.jpeg",
      "post_apocalyptic_earth_bbq.jpeg"
    ],
    reviews: [
      {
        id: 12,
        text: "I will arrive, shiny and chrome!  This place is DOPE!  The Blood Dome rules!  Hunting mutants is so fun.  Definitely making this my home!",
        user: {
          id: 12,
          username: "chrome_dome"
        }
      }
    ],
    agent: {
      id: 110,
      name: "Eli",
      image: "eli.jpeg"
    }
  },
  {
    description: "Who says The Purge is a stupid idea?  I say, look at the fine beings on Purge Planet in the Replacement Dimension.  They have a utopia there and it's all thanks to their yearly purge night, where everyone can go and murder, rob, and commit any crime they want and not get punished for it.  They have a beautiful planet and everyone is super nice 364 days a year.  Check out Purge Planet today!",
    cost: 40000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "purge_planet.jpg",
      "purge_planet_store_owner.jpeg",
      "purge_planet_peaceful_person.jpeg",
      "purge_planet_morty_purging.png",
      "purge_planet_aftermath.jpeg"
    ],
    reviews: [
      {
        id: 13,
        text: "Everyone is as nice as can be on this planet!  I'm waiting to go back on Purge Night though, and see how that is.  Maybe I'll join in on the fun, I don't know... haven't decided yet.  But damn, is it an awesome place.  Definitely thinking of moving there!",
        user: {
          id: 13,
          username: "billy_bob"
        }
      }
    ],
    agent: {
      id: 26,
      name: "Arthricia",
      image: "arthricia.jpeg"
    }
  },
  {
    description: "Ahhh, Venzenulon 7.  One of the most picturesque planets in the whole multiverse.  Located in an unknown dimension, Venzenulon 7 has beautiful towering mountains, waterfalls, lakes, oceans, flying creatures, and a land mammal only known as Beebo, who is a blue-colored gentle giant that can lead you to water if you are in need.  It's one of the dreamiest places you can call home.  View this planet now and make it your home today!",
    cost: 1000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "venzenulon_7.png",
      "venzenulon_7_beebo.png"
    ],
    reviews: [
      {
        id: 14,
        text: "OMG, I am so totally running away from home and living here now.  It's THE. BEST.  And all the Beebos here are SO freakin' cute!",
        user: {
          id: 6,
          username: "Summers_Here"
        }
      }
    ],
    agent: {
      id: 244,
      name: "Mr. Poopybutthole",
      image: "mr_poopybutthole.jpeg"
    }
  },
  {
    description: "Nuptia 4, the multiverse's leading couple's counseling resort, has just recently completed construction on permanent housing on their grounds!  It's a beautiful planet with beautiful weather year-round and the resort grounds are just amazing.  And, if you are in need of the best couple's counseling in the multiverse, it's only a short walk away.  Come make this place your home today!",
    cost: 70000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "nuptia_4.png",
      "nuptia_4_mythologs.jpeg",
      "nuptia_4_grounds.png",
      "nuptia_4_greeting.jpeg"
    ],
    reviews: [
      {
        id: 15,
        text: "I'm a pornstar and my wife is also a pornstar, and our marriage was falling apart.  These beings at Nuptia 4, with the help of our mythologs, saved our marriage.  Now we're happier than ever.  And when we heard they were building homes, we just had to move in to the first one.  Nuptia 4 is the place to be, baby!",
        user: {
          id: 14,
          username: "long_dong_silver"
        }
      }
    ],
    agent: {
      id: 146,
      name: "Glexo Slim Slom",
      image: "glexo_slim_slom.jpeg"
    }
  },
  {
    description: "Located in the Fantasy Dimension, Giant's Town is every nerd's dream.  You can live out your Jack and The Giant Bean Stock fantasies and live like an ant in Giant's Town!  The Giant people of Giant's Town are friendly enough.  Just make sure they can see you as they walk by, or else, you will get squished to death!  New tiny homes are popping up all over the place in Giant's Town.  View them today!",
    cost: 40000,
    alt_cost_curr: "Schmeckles",
    alt_cost_amt: 65000,
    neighborhood: "OK",
    images: [
      "giants_town.png",
      "giants_town_dale.png"
    ],
    reviews: [
      {
        id: 16,
        text: "Wow, this place is so cool.  I actually like living like an ant in a place where everyone and everything is giant.  Really nice tiny homes too.  I'm definitely moving here.  Giant people don't even really know we're here.  It's perfect!",
        user: {
          id: 15,
          username: "allen_jefferson"
        }
      }
    ],
    agent: {
      id: 326,
      name: "Slippery Stair",
      image: "slippery_stair.jpeg"
    }
  },
  {
    description: "Come call Bird World home today!  A beautiful planet in an unknown dimension of the multiverse, Bird World is the perfect place to spend the rest of your life in peace.  A sparsely populated planet, you don't have to worry about overpopulation, crowds, or civil unrest.  The few Bird People there are super friendly, helpful, and welcoming.  Great scenery, great Bird People, what more could you ask for?  Come make Bird World your home today!",
    cost: 35000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "bird_world.png",
      "bird_world_bird_persons_house.jpeg",
      "bird_world_bird_persons_house_3.jpeg",
      "bird_world_bird_persons_house_2.jpeg",
      "bird_world_bird_person.png"
    ],
    reviews: [
      {
        id: 17,
        text: "Bird World is the shit, dawg!  Definitely moving here when I'm old enough!",
        user: {
          id: 16,
          username: "morty_smith"
        }
      }
    ],
    agent: {
      id: 592,
      name: "Phoenixperson",
      image: "phoenix_person.jpeg"
    }
  },
  {
    description: "Your home... in a hospital?  YES!  Hear us out.  St. Gloopy Noops is the multiverse's leading hospital, boasting the multiverse's best doctors.  But their facility is huge.  Located in an unknown dimension, St. Gloopy Noops is a large space station that had room to spare.  They recently just completed construction on brand new luxury homes, apartments, and condos inside their space station.  And hey, what could be safer than living walking-distance from the best doctors in the multiverse?  Come make St. Gloopy Noops your home today!",
    cost: 65000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "st_gloopy_noops.png",
      "st_gloopy_noops_waiting_room.png",
      "st_gloopy_noops_surgery.png",
      "st_gloopy_noops_press_conference.png",
      "st_gloopy_noops_just_masturbating.png",
      "st_gloopy_noops_facility.jpeg"
    ],
    reviews: [
      {
        id: 18,
        text: "Gotta admit, it is kinda weird living in an alien hospital space station, but man, I've grown to love it.  The facilities here are just so top-notch and the homes really are luxurious.  I feel right at home here.",
        user: {
          id: 17,
          username: "chadster_meyster"
        }
      }
    ],
    agent: {
      id: 455,
      name: "St. Gloopy Noops Nurse",
      image: "st_gloopy_noops_nurse.jpeg"
    }
  },
  {
    description: "Calling all Inception fans!  Ever DREAM (get it?) of living in a dream forever?  Well, now you can!  Mr. Goldenfold's Dream is a great place to call home!  Live in his Mrs. Pancakes-themed top-level dream world or go down one level further to Mrs. Pancakes' dream world in the Pleasure Chamber, or go to the very bottom level of the Pleasure Chamber's Centaur's dream in the realm of Scary Terry.  If he doesn't try to kill you, he's actually a very pleasant neighbor.  Come make Mr. Goldenfold's Dream your home today!",
    cost: 10000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "mr_goldenfolds_dream.png",
      "mr_goldenfolds_dream_shot_at.jpeg",
      "mr_goldenfolds_dream_sex_dungeon.jpeg",
      "mr_goldenfolds_dream_scary_terry.jpeg",
      "mr_goldenfolds_dream_mrs_pancake_hostage.jpeg"
    ],
    reviews: [
      {
        id: 19,
        text: "Okay, so first of all, Scary Terry isn't even scary anymore.  He's the agent for this place!  Other than calling me 'bitch' several times, he's really a cool guy!  He showed me around the dream levels, and a few months later, I decided to move in to the Pleasure Chamber, and life has been good ever since!",
        user: {
          id: 18,
          username: "juicy_larry"
        }
      }
    ],
    agent: {
      id: 306,
      name: "Scary Terry",
      image: "scary_terry.jpeg"
    }
  },
  {
    description: "Ahh, good ol' Earth.  For all intents and purposes, if you're an Earth-bound human, this is already your home.  However, there are many different Earths in many different dimensions, and this is just one of them.  Located in the dimension only known as The Replacement Dimension, this is the dimension where mad scientist Rick Sanchez nearly turned the entire human race into deformed mutants, called Cronenbergs, but saved us all at the last second.  If you're not already living here as you're reading this, please come visit our planet in all its wonderful normalness!  You won't be disappointed!  Make it your home today!",
    cost: 60000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "earth.png",
      "earth_smith_house.jpeg",
      "earth_genetic_epidemic_averted.png"
    ],
    reviews: [
      {
        id: 20,
        text: "Wow, what a cool version of Earth.  My dimension is full of giant ants with top hats that spit on you and curse at you whenever you walk by them.  They're such jerks.  I gotta move here like ASAP!",
        user: {
          id: 19,
          username: "ant_dimension_morty"
        }
      }
    ],
    agent: {
      id: 170,
      name: "Jacqueline",
      image: "jacqueline.jpeg"
    }
  },
  {
    description: "Do you love the idea of spending the rest of your life in a trippy, far-out world?  Well, come to the Testicle Monster Dimension!  The only creatures that inhabit this dimension are giant testicle monsters.  They do not eat humans, but they do like to 'play' with humans for sexual arousal, so don't get caught by their long, creepy tenticles.  You can teleport your existing home to this oxygen-rich planet and enjoy the crazy, beautiful views for the rest of your life!  View this dimension today!",
    cost: 40000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "testicle_monster_dimension.jpeg",
      "testicle_monster_dimension_rick.jpeg",
      "testicle_monster_dimension_monster.png"
    ],
    reviews: [
      {
        id: 21,
        text: "Views of the day and night sky here are the most beautiful I've ever seen!  Such an awesome place to live!  I am teleporting my house right now to Testicle Monster Dimension!",
        user: {
          id: 20,
          username: "just_a_guy_guy"
        }
      }
    ],
    agent: {
      id: 7,
      name: "Abrodolf Lincler",
      image: "abrodolf_lincler.jpeg"
    }
  },
  {
    description: "The Signus 5 Expanse is open for settlement!  The Cromulons are opening their dimension up to outsiders in a multiverse first!  Located in the Cromulon Dimension, the Signus 5 Expanse offers breathtaking views of outer space, and of course, the giant floating heads that occupy it.  Teleport your home to this dimension or live in the newly constructed ones that have just been built.  Visit the Signus 5 Expanse today!",
    cost: 60000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "Cromulon_Dimension.png",
      "Cromulon_Dimension_happy_heads.jpg",
      "Cromulon_Dimension_angry_heads.jpeg"
    ],
    reviews: [
      {
        id: 22,
        text: "SHOW ME WHAT YOU GOT!!!  Hahaaaaaaa!  Now, I'm saying it to them!  And, to be honest, they got some good stuff here in the Signus 5 Expanse!  The views are AMAZING.  I think this is the place for me.  Finalizing the move right now",
        user: {
          id: 21,
          username: "some_guy"
        }
      }
    ],
    agent: {
      id: 24,
      name: "Armagheadon",
      image: "armagheadon.jpeg"
    }
  },
  {
    description: "Earth in Dimension C-500A is a normal enough planet in the multiverse, except a man who no one knows about in nearly every other dimension, is the most famous person on the planet here!  Jerry Smith has taken the planet by storm and is on TV and movie screens daily.  A couple years ago, he had a mental breakdown that ended in him reuniting with his high school sweetheart, Beth Sanchez.  It broke TV viewing records.  Two weeks after the incident, they got married, which broke TV viewing records again!  Make Earth C-500A your home today, and who knows?  Maybe you'll suffer a mental breakdown and get reunited with your long-lost love too!",
    cost: 55000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "earth_c500a_johnny_depp.jpeg",
      "earth_c500a_jerry.png",
      "earth_c500a_famous_jerry.jpeg",
      "earth_c500a_beth.png"
    ],
    reviews: [
      {
        id: 23,
        text: "This alternate reality of Earth is the bomb!  I'm famous!  I'm actually famous!  Well, not me, really... the alternate version of me is, but I guess it's still cool to watch from the sidelines, you know?",
        user: {
          id: 2,
          username: "jerr_jerr_69"
        }
      }
    ],
    agent: {
      id: 183,
      name: "Johnny Depp",
      image: "johnny_depp.jpeg"
    }
  },
  {
    description: "Peace among worlds!  Famous mad scientist Rick Sanchez created a microverse inside his car battery, which is now opening its doors to outsiders!  For the first time since its creation, Rick's Battery Microverse is allowing outsiders to settle down and live with them in their microverse utopia!  You will be introduced to the wonders of Gooble Box technology and use it to power your home!  Some say this is just a ploy by Rick Sanchez to increase the power in his car battery by getting people to move here.  And, to that, I say, mind your own damn business!  Make Rick's Battery Microverse your home today!",
    cost: 45000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "ricks_microverse.png",
      "ricks_microverse_slaves.jpeg",
      "ricks_microverse_peace.jpeg"
    ],
    reviews: [
      {
        id: 24,
        text: "Say what you want... maybe this is just a ploy to make Rick's battery more powerful, but I don't care!  This microverse is so cool!  Such a beautiful planet and the beings here are all super-friendly and welcoming.  If I have to power my house by stomping on a Gooble Box for the rest of my life, so be it!  Totally worth it!",
        user: {
          id: 22,
          username: "whatevaaaa"
        }
      }
    ],
    agent: {
      id: 65,
      name: "Chris",
      image: "chris.jpeg"
    }
  },
  {
    description: "The Collector in charge of The Menagerie can give you a good life.  Here, you get to be part of his collection of beings from all over the multiverse.  He will give you a nice living quarters, he will make it just like home, or however you want it to be, and he will feed you, all at no cost to you!  Free rent??  Free food??  What more do you want??  Make The Menagerie your forever home today!  The Collector will be most pleased!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "menagerie.png",
      "menagerie_interior.png"
    ],
    reviews: [
      {
        id: 25,
        text: "Aww, dude, you have to try this place out!  It's so awesome!  The Collector showed me around the place, we talked about how I wanted my place to look, he had his workers build it, and it looked EXACTLY how I imagined it!  Now I'm living like a King in my own personal palace.  Sure, I guess I can't ever leave, but I don't ever want to!",
        user: {
          id: 23,
          username: "dudey_mcdudemeister"
        }
      }
    ],
    agent: {
      id: 67,
      name: "Collector",
      image: "collector.jpeg"
    }
  },
  {
    description: "Hideout Planet is a perfect place to... well... hide out!  Located in an unknown dimension, far out of reach of the law, Hideout Planet offers the ultimate protection from fugitives on the run.  Or, if you're not a fugitive, it's just a perfect place to get away from it all and live out the rest of your years in peace and quiet.  Hideout Planet offers breathtaking views and landscapes, as well as a dome-like facility that was once home to an evil robot version of mad scientist Rick Sanchez.  It is now empty and up for grabs!  Come make Hideout Planet your home today!",
    cost: 78000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "hideout_planet.png",
      "hideout_planet_surface.jpeg"
    ],
    reviews: [
      {
        id: 26,
        text: "Definitely a good hide out spot, but don't know if I'd want to live there forever.  It smells like ass on the surface.  Some of the plants emit a gas that just smells like really bad farts.  Gross.",
        user: {
          id: 24,
          username: "charlie_bit_me"
        }
      }
    ],
    agent: {
      id: 84,
      name: "Cult Leader Morty",
      image: "cult_leader_morty.jpeg"
    }
  },
  {
    description: "What's so good about individuality anyways???  Come make Unity's Planet your home today and become part of a Hive Mind!  Unity has created a paradise here on her planet.  There is 0 crime, 0 wars, 0 pollution, the world economy is great, and all beings on the planet are thriving.  Instead of people on her planet being individuals, they have all been assimilated into one giant, collective intelligence that rules the planet.  Be part of this great communal experience and join the Hive Mind today!",
    cost: 50000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "unitys_planet.png",
      "unitys_planet_people.png"
    ],
    reviews: [
      {
        id: 27,
        text: "I was a drug addict on Earth, now, on Unity's Planet, I have been sober for over a year and I'm a lawyer making 100 grand a year.  Moving to Unity's Planet was the best decision I ever made.  Whatever you are now, you will become better if you join the Hive Mind.  Trust me.  Make the move!",
        user: {
          id: 25,
          username: "all_hail_unity"
        }
      }
    ],
    agent: {
      id: 372,
      name: "Unity",
      image: "unity.jpeg"
    }
  },
  {
    description: "Ever played Blips and Chitz's most famous game, Roy?  Have you ever thought about spending your entire life in there?  Well, now you can!  Make the virtual reality world of Roy: A Life Well Lived your home today!  Live your entire life as Roy and take control of your life!  Do all the things you regretted not doing in your real life.  Ask that girl or boy out on a date that you were too scared to ask out, become an actor, become a rock star, smoke that joint, take that leap!  Do it all in Roy: A Life Well Lived!  And, guess what?  When you die as Roy, you get to choose whether you want to play again or quit.  So, in essence, you're immortal!  Play again as many times as you want!  And when you're finally ready to cross over to the other side, hit 'Quit.'  The future is now!",
    cost: 45000,
    alt_cost_curr: "Flurbos",
    alt_cost_amt: 100000,
    neighborhood: "Safe",
    images: [
      "roy.png",
      "roy_school.jpeg",
      "roy_football.jpeg",
      "roy_family.png",
      "roy_carpet_store.jpeg",
      "roy_cancer.png"
    ],
    reviews: [
      {
        id: 28,
        text: "I'm about to play my 5th Roy life, and let me tell you, my life has gotten better and better every single time I've played it!  One life I got to be an MLB player, the next, an NFL player, the next, a rockstar, and now, who knows?  Maybe a scientist?  Maybe a movie star?  The choice is mine!  Moving myself to Roy: A Life Well Lived was the best decision I've ever made!  Make the move and join me!",
        user: {
          id: 26,
          username: "some_d00d"
        }
      }
    ],
    agent: {
      id: 449,
      name: "Roy's Mum",
      image: "roys_mum.jpeg"
    }
  },
  {
    description: "Planet Squanch is a beautiful planet filled with intelligent cat-like beings that can talk.  In their language, 'Squanch' is the root of nearly every word, and it can get quite confusing at times to know what 'squanch' is referring to.  But, like learning any language, practice makes perfect!  So squanch your squanch all the way to squanch and make Planet Squanch your squanch squanch!",
    cost: 70000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "planet_squanch.jpeg",
      "planet_squanch_wedding.png",
      "planet_squanch_squanchy.jpeg",
      "planet_squanch_beach.jpeg"
    ],
    reviews: [
      {
        id: 29,
        text: "Wow wow wow wow WOW!  Planet Squanch is the squanch!  I visited nearly all the planet's beaches and all of them are so damn beautiful!  I finally decided to settle in the country Squanch, in the state of Squanch, in the beach city of Squanch.  It's so squanching beautiful.  Squanch on over to Planet Squanch today!",
        user: {
          id: 27,
          username: "squanchy_squancher"
        }
      }
    ],
    agent: {
      id: 331,
      name: "Squanchy",
      image: "squanchy.jpeg"
    }
  },
  {
    description: "Interdimensional Customs!  May not seem like the most exciting or comfortable place to call home, but hear us out!  The Gromflomite guards who work here have always had living quarters on the premises.  After Interdimensional Customs fell on hard times, they decided to re-design their facility to include new luxury homes next to these living quarters.  They also decided to build some of these new luxury homes just outside the facility.  Since then, beings from the multiverse have flocked here!  What better location?  You will always be just a short walk away from being able to walk through a portal and be in another dimension instantly!  How cool is that?  Make Interdimensional Customs your home today!",
    cost: 83000,
    alt_cost_curr: "Blemflarcks",
    alt_cost_amt: 93000,
    neighborhood: "Safe",
    images: [
      "interdimensional_customs.jpeg",
      "interdimensional_customs_portal.jpeg"
    ],
    reviews: [
      {
        id: 30,
        text: "Yeah, I had my doubts about this place, definitely.  But after viewing the place a couple times with Shleemypants, he made me want it so bad.  Now, every day, I'm walking over to the Interdimensional Customs portal gates and visiting a new dimension!  It's so cool!",
        user: {
          id: 28,
          username: "shim_shlom_doopidy_dop"
        }
      }
    ],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    description: "I know, I know, it's a prison... why would I EVER wanna live here, right?  WRONG!  Of course you'd want to live here, because A) The prison has developed luxury living quarters for the guards and their families, and now, these homes are open to beings from the entire multiverse!  B) This is a maximum security prison, so you best believe you are living in one of the safest places in the multiverse.  C) If you have a friend, family member, or significant other incarcerated at this prison, you can visit them every day with ease!  Come make the Galactic Federation Prison your home today!",
    cost: 50000,
    alt_cost_curr: "Blemflarcks",
    alt_cost_amt: 60000,
    neighborhood: "Safe",
    images: [
      "galactic_federation_prison.png",
      "galactic_federation_prison_robot.jpeg",
      "galactic_federation_prison_rick.jpeg"
    ],
    reviews: [],
    agent: {
      id: 635,
      name: "Darth Poopybutthole",
      image: "darth_poopybutthole.jpeg"
    }
  },
  {
    description: "Are you a female looking for a safe and secure utopia to live out the rest of your life?  Are you a dumb brute male looking for a rock to sleep on and other males to fight with for the rest of your (probably short) life?  Well, lucky for both of you, we have a planet in the multiverse just for you!  Gazorpazorp is a desert wasteland planet, made that way when the male leadership of the planet bombed each other to hell.  Luckily, that wasn't the end for the whole planet.  The females of the planet gathered together to form a utopia free from male interference and now males get to play outside in the wasteland they created.  Cool, huh?  Check out what Gazorpazorp has to offer today!",
    cost: 45000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "gazorpazorp_males.jpeg",
      "gazorpazorp_ricks_tent.jpeg",
      "gazorpazorp.jpg"
    ],
    reviews: [],
    agent: {
      id: 211,
      name: "Ma-Sha",
      image: "ma_sha.jpeg"
    }
  },
  {
    description: "Ever wondered how the hamsters in Hamster In Butt World live inside the butts of human beings?  Well, you have the rest of your life to learn how if you make Hamster In Butt World your home!  Hamster In Butt World is one of many versions of the planet Earth and offers so much to see.  From breathtaking mountains, beaches, rivers, waterfalls, and big cities, there's something for everyone here on Hamster In Butt World!  Make it your home today!",
    cost: 50000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "hamster_in_butt_world_diagram.png",
      "hamster_in_butt_world_family_pic.jpeg",
      "hamster_in_butt_world_iwo_jima.jpeg",
      "hamster_in_butt_world.jpeg"
    ],
    reviews: [],
    agent: {
      id: 153,
      name: "Hamster In Butt",
      image: "hamster_in_butt.jpeg"
    }
  },
  {
    description: "Are you a human seeking an Earth with a Ball Fondlers movie franchise, a very relaxed movie rating system, and the best ice cream in the whole multiverse?  Are you a giant telepathic spider looking for a place to call home and dwell among your own kind?  Well look no further, both of you, than Earth: Giant Telepathic Spiders Dimension!  After a mysterious space car showed up and brokered a peace agreement between humans and spiders, the giant telepathic spiders of Giant Telepathic Spiders Earth no longer telepathically influence humans to wander into their webs for consumption.  Nor do humans try to bomb the spiders out of existence anymore.  Human and spider kind live side by side now and everything is perfect.  Make Earth: Giant Telepathic Spiders Dimension your home today!",
    cost: 45000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "earth_telepathic_spiders.png",
      "earth_telepathic_spiders_egan.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    description: "Are you a letter of the alphabet seeking a new home in the multiverse?  Well, come on down to Alphabetrium and make this place your new home!  Here, every being on the planet is a letter of the alphabet and an element of the periodic table, so you'll fit right in!  These alphabet beings have done wonders with their planet.  It is a haven and utopia for all alphabet beings.  Make it your home today!",
    cost: 50000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "alphabetrium.png",
      "alphabetrium_palace.jpeg"
    ],
    reviews: [],
    agent: {
      id: 161,
      name: "Hydrogen-F",
      image: "hydrogen_f.jpeg"
    }
  },
  {
    description: "Are you a lonely Jerry looking for a safe, fun place to call home?  Look no further than Jerryboree!  Created by a Rick, Jerryboree has everything you need as a Jerry.  There's a playground filled with a miniature golf course and a model of the Titanic and an iceberg, you get to play with other Jerrys, Beths, Mortys, and Summers, you get to watch Midnight Run with director's commentary on with Beth and adjust the picture settings... it's the greatest!  Everything a Jerry needs is right here.  Come feel special, valued, and respected, here at Jerryboree!",
    cost: 30000,
    alt_cost_curr: "Flurbos",
    alt_cost_amt: 85000,
    neighborhood: "Safe",
    images: [
      "jerryboree_playground.png",
      "jerryboree.png",
      "jerryboree_midnight_run.jpeg",
      "jerryboree_ball_pen.jpeg",
      "jerryboree_abandoned_jerries.png"
    ],
    reviews: [],
    agent: {
      id: 445,
      name: "Jerryboree Keeper",
      image: "jerryboree_keeper.jpeg"
    }
  },
  {
    description: "Are you a regular-sized being who wants to feel like a giant Superman on another planet or are you a smaller-sized being who wants to fit in somewhere?  Well, come check out Pluto!  Plutonians have made the best out of a bad planet.  Pluto is small, super cold, and isolated, but Plutonians have not only learned to survive, they have learned how to thrive here.  They have built impressive cities with palaces by using Pluto herself as the resource.  Some nutjobs are saying that's destroying the planet.  Don't listen to them.  They're just scientists with impressive degrees.  Listen to the less-educated politicians!  They know better!  Come make Pluto your home today!",
    cost: 40000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "pluto.png",
      "pluto_underground.jpeg",
      "pluto_plutonians.jpeg",
      "pluto_palace.jpeg",
      "pluto_flippy_nips.png",
      "pluto_ceremony.jpeg"
    ],
    reviews: [],
    agent: {
      id: 192,
      name: "King Flippy Nips",
      image: "king_flippy_nips.jpeg"
    }
  },
  {
    description: "Are you a dork who loves stuff like dungeons and dragons and World of Warcraft?  Nerd!  But, hey, who am I to judge?  Hahaha.  Come make Fantasy World your home today!  This place has all kinds of fantasy stuff, like giants in the clouds, stair goblins, ladies with big boobs... it's all here on Fantasy World in the Fantasy Dimension!  Come on down and make this place your home today!",
    cost: 45000,
    alt_cost_curr: "Schmeckles",
    alt_cost_amt: 70000,
    neighborhood: "Safe",
    images: [
      "fantasy_world.jpeg",
      "fantasy_world_thirsty_step.png",
      "fantasy_world_stair_goblins.png",
      "fantasy_world_slippery_stair.jpeg",
      "fantasy_world_bar.jpeg"
    ],
    reviews: [],
    agent: {
      id: 41,
      name: "Big Boobed Waitress",
      image: "big_boobed_waitress.jpeg"
    }
  },
  {
    description: "Calling all fans of the Vindicators!  The Vindicators have recently created homes on their mothership and are opening them up for rent!  That's right, you could make the Vindicators' Base your home!  The Vindicators have fallen on hard times, especially since all but 1 of them died tragically when trying to defeat Worldender in his lair.  So, the extra rent will help remaining lone survivor, Supernova, with the costs of vindicating.  And, who knows?  I'm sure she's looking out for recruits as well, so put on your big boy/girl pants and she could very well ask you to join the team!  How cool would that be?  Make Vindicators Base your home today!",
    cost: 40000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "vindicators_base.jpeg",
      "vindicators_base_table.png",
      "vindicators_base_room.jpeg"
    ],
    reviews: [],
    agent: {
      id: 252,
      name: "Noob-Noob",
      image: "noob_noob.jpeg"
    }
  },
  {
    description: "Pawn Shop Planet is exactly what it sounds like.  It's a tiny planet that consists of a parking lot on 90% of its surface and a pawn shop on the north pole part of the planet.  It is only inhabited by one being, the pawn shop clerk.  However, in a new business venture, the pawn shop clerk has built a house on the south pole of the planet and decided to rent it out to one lucky person.  That person could be you!  Come live on this tiny, secluded planet and make it your forever home today!",
    cost: 20000,
    alt_cost_curr: "Smidgens",
    alt_cost_amt: 80000,
    neighborhood: "Safe",
    images: [
      "Pawn_Shop_Planet.png",
      "Pawn_Shop_Planet_sex_robot.jpeg"
    ],
    reviews: [],
    agent: {
      id: 258,
      name: "Pawnshop Clerk",
      image: "pawnshop_clerk.jpeg"
    }
  },
  {
    description: "Come and shrink yourself down to ant size and live among the Mega Gargantuans in Mega Gargantuan Kingdom!  Yes, that's right, they're actually a tiny civilization with a tiny city located in a secluded rainforest on the planet Earth, but they named themselves before learning that they were actually incredibly small.  If you ever wanted to live in a living representation of irony, this is your chance!  The Mega Gargantuans are welcoming, friendly beings and would make great neighbors.  Come visit the beautiful Mega Gargantuan Kingdom and make it your home today!",
    cost: 66000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "mega_gargantuan_kingdom.png",
      "mega_gargantuan_kingdom_presidentress.png",
      "mega_gargantuan_kingdom_flying_in.png"
    ],
    reviews: [],
    agent: {
      id: 269,
      name: "Presidentress of The Mega Gargantuans",
      image: "presidentress.jpeg"
    }
  },
  {
    description: "Ever wanted to live amongst beings made up of turning gears?  Well, then Gear World is the place for you!  All beings here are known as gear people and are human-like beings, except many of their internal and external organs are gears.  Many of their buildings, vehicles, and merchandise are also gear-themed.  It's a beautiful planet with friendly inhabitants.  They'll accept you if you're gear or not!  Come make Gear World your home today!",
    cost: 45000,
    alt_cost_curr: "Flurbos",
    alt_cost_amt:  100000,
    neighborhood: "Safe",
    images: [
      "gear_world.png",
      "gear_world_market.jpeg"
    ],
    reviews: [],
    agent: {
      id: 282,
      name: "Revolio Clockberg Jr.",
      image: "revolio_clockberg_jr.jpeg"
    }
  },
  {
    description: "One of the coolest places in the multiverse!  Froopyland was created by mad scientist Rick Sanchez for his daughter.  It's a magical place where the surface of the entire planet is bouncy, so you can never die by falling from great heights and the rainbow-colored rivers, lakes, and oceans have breathable water in them, so you can never die by drowning.  However, when one of Rick's daughter's friends got stuck in Froopyland, he ended up mating with some of the magical creatures there and creating these dangerous hybrid creatures which still roam the world today.  However, all planets tend to have dangerous creatures on them.  The main thing is to avoid them.  Which you can do by moving into a home here in Froopyland!  Visit today!",
    cost: 44000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "Froopyland.png",
      "Froopyland_tommy.jpeg",
      "Froopyland_beth.jpg"
    ],
    reviews: [],
    agent: {
      id: 350,
      name: "Thomas Lipkip",
      image: "tommy.jpeg"
    }
  },
  {
    description: "Are you a toxic being who loves being toxic?  Then living in the Detoxifier may be just what you need!  Why go around living on a world where everyone thinks you're an asshole?  Spend the rest of your life in the Detoxifier so that you're surrounded by other toxic beings just like you!  You can be assholes together in this toxic world for the rest of your life!  It's perfect!  Visit today!",
    cost: 30000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Dangerous",
    images: [
      "detoxifier.jpg"
    ],
    reviews: [],
    agent: {
      id: 332,
      name: "Stacy",
      image: "stacy.jpeg"
    }
  },
  {
    description: "Looking for a world to explore your sexual freedoms?  Well, come on over to Trunk World!  Here, there's a procedure you can have done that will attach a large trunk to your face that you can talk and eat out of and have sex with male and female partners with.  Broaden your sexual horizons here on Trunk World!  Make it your forever home today!",
    cost: 56000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "trunk_world.jpeg",
      "trunk_world_sad_trunk_person.jpeg"
    ],
    reviews: [],
    agent: {
      id: 367,
      name: "Trunk Man",
      image: "trunk_man.jpeg"
    }
  },
  {
    description: "Blips and Chitz is the best arcade in the whole multiverse!  And now, it's built homes on its property!  That's right, you can now LIVE in the coolest arcade in the whole multiverse!  Built with soundproof walls, these homes allow you to get a good night's rest even when the arcade that never sleeps still rages on outside.  Get on over to Blips and Chitz and squirt, squeeze, spray, and play all day for the rest of your life!",
    cost: 80000,
    alt_cost_curr: "Flurbos",
    alt_cost_amt: 135000,
    neighborhood: "Safe",
    images: [
      "blips_and_chitz.png",
      "blips_and_chitz_roy.jpeg"
    ],
    reviews: [],
    agent: {
      id: 1,
      name: "Rick Sanchez",
      image: "rick.jpeg"
    }
  },
  {
    description: "Who doesn't love dogs?  How freakin' adorable would it be to live in a dog's dream?  And we'll one-up it... how adorable would it be to live in an intelligent dog's dream?  Well, now you can find out!  Spoiler alert, it is SO freakin' adorable!  Live in Snuffles' Dream for the rest of your life!  In his dream, all dogs are intelligent thanks to a robotic device that amplifies their brainwaves.  They will treat you like their favorite pet forever.  They will shower you with toys, good food, women, play time, and of course, love.  Come make Snuffles' Dream your home today!",
    cost: 1000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "snuffles_dream.jpeg",
      "snuffles_dream_my_morty.jpeg"
    ],
    reviews: [],
    agent: {
      id: 306,
      name: "Scary Terry",
      image: "scary_terry.jpeg"
    }
  },
  {
    description: "This is a trip, especially if you come from a normal version of Earth... Earth: Pizza Dimension is a version of Earth where the dominant species evolved from pizza.  That's right, the intelligent species on this version of Earth are pizzas with eyes, mouths, arms, and legs.  Amazing, right?  If you're a human, be careful, because here their version of pizzas are people.  Come live as an oddity or, if you're a pizza being, come live among your kind here on Earth: Pizza Dimension!  Visit today!",
    cost: 55000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "Pizza_Dimension.png"
    ],
    reviews: [],
    agent: {
      id: 424,
      name: "Pizza-Person",
      image: "pizza_person.jpeg"
    }
  },
  {
    description: "Another trippy planet, if you're originally from a normal version of Earth... Earth: Phone Dimension features intelligent beings who have evolved from phones.  That's right, the dominant species on Earth: Phone Dimension are telephones.  And, get this!  All furniture in this version of Earth is in the form of pizza!  And, even better, all phones in this version of Earth are in the form of human beings!  And the intelligent phones eat furniture!  What???  I know, mind-blower, right?  Come live on this wonderfully weird planet!",
    cost: 55000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "phone_dimension.png"
    ],
    reviews: [],
    agent: {
      id: 428,
      name: "Phone-Person",
      image: "phone_person.jpeg"
    }
  },
  {
    description: "Greasy Grandma World is a sight to behold!  It is literally nothing but a planet full of grease and grease-covered human grandmas.  Because... why not?  Come make Greasy Grandma World your home today!",
    cost: 35000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "Greasy_Grandma_World.jpeg"
    ],
    reviews: [],
    agent: {
      id: 426,
      name: "Greasy Grandma",
      image: "greasy_grandma.jpeg"
    }
  },
  {
    description: "Yet another trippy planet if you're a human being from a normal version of Earth.  Earth: Chair Dimension features intelligent beings that evolved from chairs and other types of furniture.  That's right, the dominant species here are chairs!  And they sit on human beings, talk on pizzas, and eat phones!  What being would not want to live on this wonderfully weird planet??  Make Earth: Chair Dimension your home today!",
    cost: 43000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "chair_dimension.png",
      "chair_dimension_restaurant.png",
      "chair_dimension_homeless_chair.jpeg",
      "chair_dimension_bus.png"
    ],
    reviews: [],
    agent: {
      id: 429,
      name: "Chair-Person",
      image: "chair_person.jpeg"
    }
  },
  {
    description: "Arboles Mentirosos is a beautiful planet filled with friendly, welcoming, and artistic intelligent beings.  Arbolian Mentirososians have built grand cities on their planet and have gotten really into music since the Cromulons featured them on their musical reality show, 'Show Us What You Got!'  They've been creating new, better music ever since so that they are never disqualified if the Cromulons ever feature them on their show again.  They have some pretty groovy bands and solo artists now.  Come experience Arbolian Mentirososian culture here on Arboles Mentirosos!  Make it your forever home today!",
    cost: 65000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "arboles_mentirosos.png",
      "arboles_mentirosos_band.png"
    ],
    reviews: [],
    agent: {
      id: 454,
      name: "Arbolian Mentirososian",
      image: "arbolian_mentirososian.jpeg"
    }
  },
  {
    description: "How would you like to live out the rest of your life in the best day spa in the multiverse?  Well, now you can!  The Alien Day Spa has just finished construction on luxury homes located in their facility.  Since they are in the facility, your rent includes all the features that are included at the spa!  That includes free in-home massages, pedicures, and even your very own detox machine!  Come relax for the rest of your life!  Make Alien Day Spa your forever home today!",
    cost: 200000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "alien_day_spa.png",
      "alien_day_spa_detoxifier.jpeg",
      "alien_day_spa_detoxed.png"
    ],
    reviews: [],
    agent: {
      id: 470,
      name: "Alien Spa Employee",
      image: "alien_spa_employee.jpeg"
    }
  },
  {
    description: "No matter where you're from in the multiverse, we all understand that fascism is BAD, right?  Okay, good.  But there are always going to be douchebags out there who don't believe that.  For you assholes, well, there's this planet.  If you're looking for a place to live out your f'd up fascist utopia dreams, Earth: Fascist Dimension is your planet.  Go ahead and go there so we know where all the fascists are in the multiverse when we try to bring you guys to justice!",
    cost: 60000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Dangerous",
    images: [
      "earth_fascist.png",
      "earth_fascist_meeseeks.jpeg"
    ],
    reviews: [],
    agent: {
      id: 500,
      name: "Fascist Mr. President",
      image: "fascist_president.jpeg"
    }
  },
  {
    description: "Ssssss ssss sss ssssssssss sss sssssssss ssssss?  Sssss ssssssssss ssss sssssssssss!  Sssssss ssss ssssssssssssssssssssss... sssssssssss ssss ssss sssssssssssss.  Sssss sssssssssssss ssssssssssss ssssssssssss!  Sorry, need a translation?  Ever dream of living on a planet full of snakes?  Then come on down to Snake Planet!  And besides that, well... it's pretty much just like a normal version of Earth.  Come make Snake Planet your home today!",
    cost: 58000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "Snake_Planet.png",
      "Snake_Planet_reporters.jpeg",
      "Snake_Planet_press_conference.png",
      "Snake_Planet_news.jpeg",
      "Snake_Planet_general.jpeg"
    ],
    reviews: [],
    agent: {
      id: 583,
      name: "80's Snake",
      image: "80s_snake.jpeg"
    }
  },
  {
    description: "Forbodulon Prime is an isolated, uninhabited planet, other than the occasional death crystal poachers.  Speaking of which, the planet is filled with an extremely valuable natural resource: death crystals!  Death crystals show you how you're going to die.  Depending on what actions you take, it changes.  It's very valuable for soldiers and worth millions of dollars on the black market.  Not that we're advocating for you to go on the black market, of course.  But they sure are cool to have just for yourself!  Come make this extremely valuable planet your home today!  And just make sure you install a good security system to watch out for poachers.",
    cost: 40000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "forbodulon_prime.png",
      "forbodulon_prime_death_crystals.jpeg",
      "forbodulon_prime_crystal_poachers.png"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    description: "Calling all fascist shrimp!  This is your planet!  Or, honestly, just any being that is fascist will be accepted here.  Although, we've been through this already, fascists are BAD.  BAAAAD.  But I guess the further away from human beings we get, the funnier and less serious it gets, so HA HA!  Yes, make Earth: Fascist Shrimp Dimension your home today!  You fascist pricks.",
    cost: 30000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Dangerous",
    images: [
      "earth_fascist_shrimp_killing_rick.png",
      "earth_fascist_shrimp.png"
    ],
    reviews: [],
    agent: {
      id: 506,
      name: "Fascist Shrimp SS",
      image: "fascist_shrimp_ss.jpeg"
    }
  },
  {
    description: "Are you a fascist teddy bear or just some other fascist prick being looking for your dream fascist utopia?  Well, look no further than Earth: Fascist Teddy Bear Dimension.  Yes, that's right, all intelligent life on this planet evolved from teddy bears, and just happened to end up fascists.  Who would've known?  Don't underestimate these little teddy bear pricks, either.  They may look adorable, but they're downright savage to anyone who isn't a fascist.  Fuck these guys!  Make it your home today if you want, you asshole fascist!",
    cost: 20000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Dangerous",
    images: [
      "earth_fascist_teddy_bear.png",
      "earth_fascist_teddy_bear_ricks_lair.png"
    ],
    reviews: [],
    agent: {
      id: 507,
      name: "Fascist Teddy Bear Rick",
      image: "fascist_teddy_bear_rick.jpeg"
    }
  },
  {
    description: "Okay, we try to make all listings on this site open to any being from the multiverse, but in this case, I'd say only come here if you are a wasp being, because wasps are very aggressive towards other species.  Earth: Wasp Dimension is the place for you if you are a wasp being!  Nests are pre-built into all houses and there's wasp food aplenty!  Come make this planet your home today (only if you're a wasp)!",
    cost: 35000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "earth_wasp_smith_family.png",
      "earth_wasp.png"
    ],
    reviews: [],
    agent: {
      id: 520,
      name: "Wasp Jerry",
      image: "wasp_jerry.jpeg"
    }
  },
  {
    description: "Do you want to develop an app?  In need of water?  You'll fit right in here on the Monogatron Mothership!  Monogatrons are masters at creating apps that can distract entire civilizations.  And while a civilization is distracted, they steal their water!  Evil, right?  Yeah, these guys are jerks, but they have a really cool mothership that has modest homes built into it, so up to you.  Just, whatever you do, don't become a fascist, please!",
    cost: 25000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "monogatron_mothership.png",
      "monogatron_mothership_soldiers.png"
    ],
    reviews: [],
    agent: {
      id: 525,
      name: "Glootie",
      image: "glootie.jpeg"
    }
  },
  {
    description: "Not much is known about the Gorgon Quadrant, other than it is home to an intelligent species of frogs and flies.  In one part of the Gorgon Quadrant, there is even a fly crime lord who is the boss of thousands of frog gangsters.  What a wacky place, right?  Make the Gorgon Quadrant your home today!",
    cost: 15000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "gorgon_quadrant.png"
    ],
    reviews: [],
    agent: {
      id: 543,
      name: "Vermigurber",
      image: "vermigurber.jpeg"
    }
  },
  {
    description: "The Midland Quasar was once home to the famous Robot Wars, but now it is a peaceful place that offers beautiful views of the quasar at the center of it.  There are mini space station homes being built around the quasar and you can also bring your own mini space station home or ship and start living out the rest of your life here.  Beauty and history await at Midland Quasar!  View today!",
    cost: 50000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "midland_quasar.png",
      "midland_quasar_robot_wars_robots.png",
      "midland_quasar_robot_wars_lizards.png"
    ],
    reviews: [],
    agent: {
      id: 252,
      name: "Noob-Noob",
      image: "noob_noob.jpeg"
    }
  },
  {
    description: "Globaflyn is a liquid that you can drink that will make all your dreams come true!  Drink enough of it and have a large enough supply of it, and you could live out all your wildest fantasies for the rest of your life!  That is what this listing is telling you.  We are offering you a lifetime supply of Globaflyn so that you can live any life you want to in this hallucinatory state for as long as your body will stay alive for!  Come make this Globaflyn hallucination your home today!",
    cost: 65000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "globaflyn_jerry.jpeg",
      "globaflyn.jpg"
    ],
    reviews: [],
    agent: {
      id: 532,
      name: "Tony's Wife",
      image: "tonys_wife.jpeg"
    }
  },
  {
    description: "Are you a being with tusks growing out of your mouth?  Well, then, you'll fit right in on Earth: Tusk Dimension!  In this version of the planet Earth, the dominant species, human beings, all have tusks growing out of their mouths.  Other than that, though, it's a pretty normal version of Earth.  Come see what Earth: Tusk Dimension has to offer today!",
    cost: 65000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "earth_tusk.png",
      "earth_tusk_tuskla.jpeg"
    ],
    reviews: [],
    agent: {
      id: 558,
      name: "Elon Tusk",
      image: "elon_tusk.jpeg"
    }
  },
  {
    description: "Calling all dragon fans!  Draygon is your paradise!  Draygon is a world populated by an intelligent race of talking dragons!  Once upon a time, there was a wizard who ruled this world and controlled all the dragons.  He refused to let some dragons be sexually free, so a few of them when into hiding in underground caves on the planet.  The Slut Dragons, as they called themselves, lived in these Slut Caves for eons, until one day, three slut strangers arrived and gave them the power to turn into the All Slut Slut Phoenix Dragon Slut.  These Slut Dragons and slut strangers killed the wizard and now all dragons are free to be sluts!  If you dream of living the rest of your life as a slut too, then this is the place for you!  Come view today!",
    cost: 22000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "draygon.png",
      "draygon_wooly_mammoth.jpeg",
      "draygon_slut_dragons.jpeg",
      "draygon_phoenix_dragon.png"
    ],
    reviews: [],
    agent: {
      id: 569,
      name: "Shadow Jacker",
      image: "shadow_jacker.jpeg"
    }
  },
  {
    description: "Ever wanted to live in a real-life version of a story's plot/narrative that you had the power to change?  Well, now, with Story Train, you can!  Make up all the zany characters you want!  Make sub plots, sub sub plots, sub sub sub plots!  If you're moving here with someone else or a family, give them the power to change the story too!  Come live out the rest of your days on the Story Train!",
    cost: 40000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "story_train.png",
      "story_train_tough_bar.jpg",
      "story_train_morty_as_girl.jpg",
      "story_train_control_room.png",
      "story_train_bar.jpeg"
    ],
    reviews: [],
    agent: {
      id: 606,
      name: "Goomby",
      image: "goomby.jpeg"
    }
  },
  {
    description: "The Glorzo Asteroid is an asteroid full of facehugger aliens that attach themselves to larger beings and take over their bodies.  Doesn't sound very appealing, right?  Well... yeah, I got nothing.  It's there if you want to be taken over by a facehugger and die a horrible, explosive death when their eggs hatch from inside your body.  Or maybe YOU'RE a facehugger looking for a planet to fit into.  If so, Glorzo is your place!  Come view today!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Dangerous",
    images: [
      "glorzo.png",
      "glorzo_planet_surface.jpeg",
      "glorzo_many_glorzos.jpeg"
    ],
    reviews: [],
    agent: {
      id: 645,
      name: "Shane",
      image: "shane.jpeg"
    }
  },
  {
    description: "The Alien Acid Plant is now renting out some humble, makeshift homes built inside their facility!  Enjoy quiet nights, other than the occasional secretive crime deal going down.  Sometimes they end in gunfire, but not that much.  If you need a job, the Alien Acid Plant boss says residents will be given first dibs on a job at the plant.  Cheap houses, quiet nights, a guaranteed job?  What more could you want?  Visit the Alien Acid Plant today!",
    cost: 25000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "OK",
    images: [
      "alien_acid_plant.jpeg",
      "alien_acid_plant_gangsters.png"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    description: "The NX-5 Planet Remover, sponsored by Wrangler Jeans, is an amazing piece of machinery.  And now, it could be your home!  That's right, the Gromflomites who own this Death Star, are now renting out homes and rooms onboard the massive ship.  Enjoy comfort, safety, and the power to destroy an entire planet aboard the NX-5 Planet Remover, sponsored by Wrangler Jeans.  Come view today!",
    cost: 50000,
    alt_cost_curr: "Blemflarcks",
    alt_cost_amt: 60000,
    neighborhood: "Safe",
    images: [
      "nx_5.jpeg",
      "nx_5_fight_chamber.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    description: "Gaia is a beautiful, sentient planet that is aware of its existence and the beings living on her.  And, yes, she is a female planet.  She was impregnated by a cloud god named Reggie, which resulted in her giving birth to a strange race of clay people, who now populate her.  The clay people are a nice enough civilization and are very easily influenced, so be the first to settle here, so you can influence them to do your laundry and mow your lawn and stuff!  View Gaia today!",
    cost: 36000,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "gaia.png",
      "gaia_zeus_cloud.jpeg",
      "gaia_surface.png"
    ],
    reviews: [],
    agent: {
      id: 666,
      name: "Squeeb",
      image: "squeeb.jpeg"
    }
  }
];

// Locations not in the Rick and Morty API that I still wanted to include
const myExtraLocations = [
  {
    id: 107,
    name: "Dwarf Terrace-9",
    type: "Planet",
    dimension: "Replacement Dimension",
    description: "Dwarf Terrace-9 is a fascinating planet.  If you have ever been to Earth, it is basically just a really scaled-down version of that planet.  Dwarf Terrace-9 is so small, that you can walk around the entire planet in about 2 minutes, yet it still has enough gravity to keep you glued to its surface.  And it's not just an asteroid either, it is a full-blown planet with an atmosphere and weather.  It is truly mind-boggling, but it's an awesome place to call home!  It is outside of the Galactic Federation's jurisdiction, so it's a great place just to lay low or avoid having to pay taxes or just live on a planet that has no laws.  Make Dwarf Terrace-9 your home today!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "dwarf_terrace_9_ship_and_house.png",
      "dwarf_terrace_9_south_pole.png",
      "dwarf_terrace_9_core.png",
      "dwarf_terrace_9_all_terrains.png"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg" 
    }
  },
  {
    id: 108,
    name: "On A Cob Planet",
    type: "Planet",
    dimension: "Replacement Dimension",
    description: "Everyone likes corn on the cob, right?  Well, just imagine, if there existed a world where, not only corn was on a cob, but EVERYTHING was on a cob.  Well, such a place exists, and it's simply called On A Cob Planet.  On this planet, everything, from mountains, to flowers, to rocks, to strawberries, to birds and ants, are on a cob.  In fact, the entire planet is on a cob!  This planet has to be seen to be believed.  Come visit today and make On A Cob Planet your home today!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "cob_planet_mountains.png",
      "cob_planet_ants.png",
      "cob_planet_rick_inspects.jpeg",
      "cob_planet_strawberries_and_flowers.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg" 
    }
  },
  {
    id: 109,
    name: "Screaming Sun Planet",
    type: "Planet",
    dimension: "Replacement Dimension",
    description: "Screaming Sun Planet is a beautiful world with bountiful natural resources that you can survive off of with no need for money.  There are currently no residents on Screaming Sun Planet, so the entire planet is yours if you choose to move there!  One thing we do have to let you know, though... the sun on this planet screams at the top of its lungs all day.  And the days on this planet last for 42 hours.  So, that's something to consider.  But other than that, it's a perfect planet!  Come make Screaming Sun Planet your home today!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "screaming_sun_planet.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    id: 110,
    name: "Buttworld",
    type: "Dimension",
    dimension: "Buttworld Dimension",
    description: "How would you like to be surrounded by big butts for the rest of your life?  Sounds too good to be true?  Well, it ain't!  Not here on Buttworld!  Buttworld is a dimension that is full of huge 10 ft. high, 10 ft. wide, farting butts that are sticking out of the ground.  Each butt is different.  Some are shaved, some are hairy, some are saggy, some are toned, some are flat, and some of them are perfect.  There are also trees that grow out of the ground whose branches have toilet paper on them.  There are also giant toilet plungers that grow out of the ground as well.  And, speaking of the ground, the ground is made up of a mixture of feces and dirt.  If you are a feces eater or just someone who likes big butts, this dimension is for you!  Come visit Buttworld and make it your home today!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "buttworld.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    id: 111,
    name: "Doopidoo Dimension",
    type: "Dimension",
    dimension: "Doopidoo Dimension",
    description: "The Doopidoo Dimension is a beautiful, colorful dimension, occupied by gentle, bird-like creatures with bowl cuts that just say 'Doopidoo' nonstop for their entire lives.  It can get quite annoying to some, but if you're willing to put up with that, it's definitely the dimension to be!  It has beautiful scenery, it is not occupied by any intelligent beings, and as a result of that, it costs nothing to live here, other than the cost of any equipment you need to survive off of nature.  Come make the Doopidoo Dimension your home today!",
    cost: 0,
    alt_cost_curr: null,
    alt_cost_amt: null,
    neighborhood: "Safe",
    images: [
      "Doopidoo_Dimension.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  },
  {
    id: 112,
    name: "Dimension 35-C",
    type: "Dimension",
    dimension: "Dimension 35-C",
    description: "Dimension 35-C is so freakin' crazy, in all the coolest and best ways!  Nature is quite bizarre here.  There are plants and rocks that have eyes that blink, there are creatures that just absolutely make no sense at all, like a winged, flying butt, a blob of human body parts, and a creepy, giant, spider-like creature.  It is one of the weirdest, trippiest, dimensions in the entire multiverse, and you could call it home today!",
    cost: 37000,
    alt_cost_curr: "Blemflarcks",
    alt_cost_amt: 47000,
    neighborhood: "OK",
    images: [
      "dimension_35C.png",
      "dimension_35C_seeds.jpeg",
      "dimension_35C_scary_monster.jpeg",
      "dimension_35C_exploring.jpeg"
    ],
    reviews: [],
    agent: {
      id: 313,
      name: "Shleemypants",
      image: "shleemypants.jpeg"
    }
  }
];

const finalLocations = myLocations.map((l, i) => ({
  ...locations[i],
  ...l
}));

myExtraLocations.forEach(location => finalLocations.push(location));

export default finalLocations;